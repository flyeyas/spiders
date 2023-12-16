import requests
import json
import rsa
import base64
import inspect
import os
import ddddocr
import execjs
import time
import hashlib
from pymongo import MongoClient
import inspect

from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5

class MongoDBClient(object):
    _instance = None

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super(MongoDBClient, cls).__new__(cls, *args, **kwargs)
        return cls._instance

    def __init__(self, host='localhost', port=27017):
        self.client = MongoClient(host, port)

    def get_client(self):
        return self.client

# 加载公钥
public_key_str = (
    "-----BEGIN PUBLIC KEY-----\n"
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC29miF1Wp9XlhCECo+FYpCHad1"
    "ipEMgXf4IdgYjMIQwczzo9GXdcZ4eeV+9lkh6+aTqzzU843rdkMt0vrSnujU+GOu"
    "DPLfa5LZ6SfanAoysi6xxTX02Xizb3k+Z1USIzm9QAwE+SR1AQ78rGTRFHWFu7OG"
    "PkVNeF+vrX3inQTiawIDAQAB\n"
    "-----END PUBLIC KEY-----\n"
)


# 加密函数

def encrypt_rsa_old(string_to_encrypt):
    # 加载公钥
    public_key = rsa.PublicKey.load_pkcs1_openssl_pem(public_key_str.encode('utf-8'))
    # RSA加密
    max_length = 117  # RSA加密的最大块大小
    encrypted_blocks = []
    
    # 分块加密
    for i in range(0, len(string_to_encrypt), max_length):
        block = string_to_encrypt[i:i+max_length]
        encrypted_block = rsa.encrypt(block.encode('utf-8'), public_key)
        encrypted_blocks.append(encrypted_block)

    # 连接加密块并转换为base64编码的字符串
    encrypted_message = ','.join([block.hex() for block in encrypted_blocks])
    return encrypted_message

F_e = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC29miF1Wp9XlhCECo+FYpCHad1ipEMgXf4IdgYjMIQwczzo9GXdcZ4eeV+9lkh6+aTqzzU843rdkMt0vrSnujU+GOuDPLfa5LZ6SfanAoysi6xxTX02Xizb3k+Z1USIzm9QAwE+SR1AQ78rGTRFHWFu7OGPkVNeF+vrX3inQTiawIDAQAB"

def encrypt_rsa(e):
    key = RSA.importKey(base64.b64decode(F_e))
    cipher = PKCS1_v1_5.new(key)
    chunk_size = 117
    chunks = [e[i:i+chunk_size] for i in range(0, len(e), chunk_size)]
    encrypted_chunks = [cipher.encrypt(chunk.encode()) for chunk in chunks]
    return ",".join(base64.b64encode(encrypted_chunk).decode() for encrypted_chunk in encrypted_chunks)


def first_encrypt(message):
    # 获取当前文件路径
    current_dir = os.path.dirname(os.path.abspath(__file__))
    js_code = ''
    with open(current_dir + '/ynjzjgcx.js', 'r', encoding='utf-8') as f:
        js_code = f.read()

    js = execjs.compile(js_code)
    result = js.call('get_encrypt_data', message)
    return result

def hash_data(data):
        return hashlib.md5(data.encode()).hexdigest()

proxy = {
    'http': 'http://127.0.0.1:33210',
}

# 生成验证码
def get_vcode():

    # 请求头
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=UTF-8",
        "Origin": "https://www.ynjzjgcx.com",
        "Referer": "https://www.ynjzjgcx.com/dataPub/enterprise",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "appId": "84ded2cd478642b2",
    }
    # 请求地址
    url = "https://www.ynjzjgcx.com/prod-api/mohurd-pub/vcode/genVcode"

    query_key = {'key':'query'}
    # 请求参数
    data = {
        "params": encrypt_rsa(first_encrypt(query_key))
    }
    # 将参数转换为json格式
    data = json.dumps(data, separators=(',', ':'))
    # 发起请求
    response = requests.post(url, headers=headers, data=data, proxies=proxy)

    # 判断请求是否成功
    if response.status_code != 200:
        print('__line__: '+ str(inspect.currentframe().f_lineno), "请求失败")
        exit()

    # 获取响应数据
    res_data = response.json()
    # 判断响应状态码
    if res_data['code'] != 200:
        print('__line__: '+ str(inspect.currentframe().f_lineno), "验证码接口请求失败")
        exit()

    # 获取图片数据
    img_data = json.loads(res_data['data'])
    # 获取小图片
    smallImage = base64.b64decode(img_data['smallImage'])
    # 获取大图片
    bigImage = base64.b64decode(img_data['bigImage'])

    # 获取当前文件路径
    current_dir = os.path.dirname(os.path.abspath(__file__))

    # 获取小图片路径
    smallImage_path = current_dir + '/smallImage.jpg'
    # 判断小图片是否存在
    if os.path.exists(smallImage_path):
        os.remove(smallImage_path)

    # 获取大图片路径
    bigImage_path = current_dir + '/bigImage.jpg'
    # 判断大图片是否存在
    if os.path.exists(bigImage_path):
        os.remove(bigImage_path)

    # 将图片数据写入文件
    open(smallImage_path, 'wb').write(smallImage)
    open(bigImage_path, 'wb').write(bigImage)


    print('开始识别图片')
    det = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)

    with open(smallImage_path, 'rb') as f:
        target_bytes = f.read()

    with open(bigImage_path, 'rb') as f:
        background_bytes = f.read()

    res = det.slide_match(target_bytes, background_bytes, simple_target=True)
    print(res)
    return res['target'][0], img_data['slideId'] 

def get_data():
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=UTF-8",
        "Origin": "https://www.ynjzjgcx.com",
        "Referer": "https://www.ynjzjgcx.com/dataPub/enterprise",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "appId": "84ded2cd478642b2",
    }
    url = "https://www.ynjzjgcx.com/prod-api/mohurd-pub/dataServ/findBaseEntDpPage"

    # 链接mongodb
    db_client = MongoDBClient().get_client()

    # 选择/创建数据库
    db = db_client['ynjzjgcx']

    # 选择/创建集合（类似于关系数据库中的表）
    collection = db['ynjzjgcx']

    for page in list(range(1, 11)):

        for i in range(1, 10):
            try:
                img_num,  slideId= get_vcode()
                params = {
                    "pageNum": page, 
                    "pageSize": 10,
                    "certificateType":"01",
                    "name":"",
                    "slideId": str(slideId),
                    "key":"query", 
                    "width": img_num
                }

                params = first_encrypt(params)
                params = encrypt_rsa(params)
                data = {
                    "params": params
                }
                data = json.dumps(data, separators=(',', ':'))
                response = requests.post(url, headers=headers, data=data, proxies=proxy)
                print(response.json())
                if response.status_code != 200:
                    print('__line__: '+ str(inspect.currentframe().f_lineno), "请求失败")
                    raise ValueError('请求失败')
                
                res_data = json.loads(response.text)
                if res_data['code'] != 200:
                    print('__line__: '+ str(inspect.currentframe().f_lineno), "请求失败, "+ str(res_data['msg']))
                    raise ValueError('请求失败')
                
                for data in res_data['data']['records']:
                    hash_title = hash_data(data['name'])
                    add_data = {
                        'name': data['name'],
                        'address': data['address'],
                        'creditCode': data['creditCode'],
                        'hash_name': hash_title,
                    }
                    # 检查数据是否已存在
                    filter_criteria = {"hash_name": add_data["hash_name"]}
                    existing_data = collection.find_one(filter_criteria)
                    if existing_data is None:
                        # 数据不存在，执行插入操作
                        collection.insert_one(add_data)
                        print(f"Data inserted successfully: {add_data}")
                    else:
                        print(f"Data already exists: {add_data}")
                break
            except:
                print('__line__: '+ str(inspect.currentframe().f_lineno), "请求失败, 重试")
                time.sleep(3)

        time.sleep(5)
        break


if __name__ == '__main__':
    get_data()