from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
from Crypto.Util.strxor import strxor_c
import base64
import requests
import json
from pymongo import MongoClient
import hashlib
import pdb

# 解密函数
def des_decrypt(data):
    # pdb.set_trace()
    # 获取key和iv
    key = (str(data['lastFetchTime']) + "000").encode('utf-8')
    iv = (str(data['lastFetchTime']) + "000").encode('utf-8')
    
    # 将base64编码的数据解码
    encrypted_data = base64.b64decode(data['data'])
    
    # 使用AES算法，CBC模式，PKCS7填充
    cipher = AES.new(key, AES.MODE_CBC, iv)
    
    # 解密
    decrypted_data = unpad(cipher.decrypt(encrypted_data), AES.block_size)
    
    # 返回解密后的数据
    return decrypted_data.decode('utf-8')

# 保存数据函数
def save_data(data):
    # 连接到MongoDB数据库
    client = MongoClient('mongodb://localhost:27017/')

    # 选择/创建数据库
    db = client['chinaindex']

    # 选择/创建集合（类似于关系数据库中的表）
    collection = db['mycollection']

    # 批量插入数据
    # data_to_insert = [
    #     {'name': 'John Doe', 'age': 30, 'city': 'New York'},
    #     {'name': 'Jane Smith', 'age': 25, 'city': 'San Francisco'},
    #     {'name': 'Bob Johnson', 'age': 35, 'city': 'Los Angeles'}
    # ]

    data_to_insert = []
    for item in data:
        insert_data = {
            'fans_num': item['fans_num'],
            'name': item['object_info']['name'],
            'heat_value': item['heat_value'],
            'hash_md5': hashlib.md5(item['object_info']['name'].encode('utf-8')).hexdigest(),
        }
        data_to_insert.append(insert_data)
    # 插入多条数据
    result = collection.insert_many(data_to_insert)
    print(f"Inserted {len(result.inserted_ids)} documents")
    # 关闭连接
    client.close()


# 获取粉丝函数
def get_fans():
    # 设置请求头
    headers = {
        "authority": "www.chinaindex.net",
        "accept": "application/json, text/plain, */*",
        "referer": "https://www.chinaindex.net/ranklist/5",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "uuid": "29fdbeed-3310-5448-a5c7-61a02a1cd9bc"
    }

    # 设置请求地址
    url = "https://www.chinaindex.net/iIndexMobileServer/teleplay/rank/waiting/fans"
    params = {
        "sign": "46cf510e48f99667216bfa781d6bebab"
    }
    # 发起请求
    response = requests.get(url, headers=headers, params=params)

    # 解密数据
    data = des_decrypt(json.loads(response.text))
    data = json.loads(data)
    if not data['rank_list']:
        print("没有数据")
        return False
    # 保存数据
    res = save_data(data['rank_list'])

    # 返回True
    return True


print(get_fans())