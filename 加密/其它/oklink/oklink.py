import requests
import base64
import time
import random
import threading
import hashlib
from pymongo import MongoClient
from queue import Queue
import inspect


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

class onlinkSpider(object):
    # 定义API_KEY
    API_KEY = "a2c903cc-b31e-4547-9299-b6d07b7631ab"
    # 定义最大爬取数量
    spider_max_count = 10000
    # 定义爬取请求队列
    spier_request_list = Queue()
    # 定义爬取数据队列
    spider_save_data = Queue()

    hash_data_list = []

    is_sleep = True
    sleep_time = 5

    # 加密API_KEY
    def encrypt_api_key(self):
        e = list(self.API_KEY)
        n = e[:8]
        return ''.join(e[8:] + n)

    # 加密时间
    def encrypt_time(self, t):
        a = 1111111111111
        e = list(str(1 * t + a))
        n = int(10 * random.random())
        r = int(10 * random.random())
        o = int(10 * random.random())
        return ''.join(e + [str(n), str(r), str(o)])

    # 组合API_KEY和时间
    def comb(self, t, e):
        n = "{}|{}".format(t, e)
        return base64.b64encode(n.encode()).decode()

    # 获取API_KEY
    def get_api_key(self):
        t = int(time.time() * 1000) # 获取当前时间的时间戳（毫秒级）
        e = self.encrypt_api_key()
        t = self.encrypt_time(t)
        return self.comb(e, t)

    def hash_data(self, data):
        return hashlib.md5(data.encode()).hexdigest()

    # 添加爬取请求
    def add_requests(self):
        offset = 0
        while offset < self.spider_max_count:
            url = "https://www.oklink.com/api/explorer/v1/btc/transactionsNoRestrict"
            x_api_key = self.get_api_key()
            headers = {
                "accept": "application/json",
                "referer": "https://www.oklink.com/cn/btc/tx-list/page/2",
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                "x-apikey": x_api_key,
            }
            params = {
                "t": str(int(time.time() * 1000)),
                "offset": str(offset),
                "txType": "",
                "limit": "20",
                "curType": ""
            }
            item = {
                "url": url,
                "headers": headers,
                "params": params,
                "offset": offset
            }
            self.spier_request_list.put(item)
            offset += 20
            

    # 获取爬取数据
    def get_data(self):
        while True:
            item = self.spier_request_list.get()
            self.spier_request_list.task_done()
            try:
                use_proxy = {
                    'http':'http://127.0.0.1:33210',
                }
                response = requests.get(item['url'], headers=item['headers'], params=item['params'],timeout=5, proxies=use_proxy)

                res_data = response.json()
                print('__line__: '+ str(inspect.currentframe().f_lineno), 'offset: '+ str(item['offset']), 'response_status_code: '+ str(response.status_code), 'total:' + str(res_data['data']['total']), 'retry: '+ str(item.get('retry', 0)))

                self.spider_save_data.put(response.json())
            except Exception as e:
                print('__line__: '+ str(inspect.currentframe().f_lineno), 'offset: '+ str(item['offset']), '请求异常，进行重试')
                item['retry'] = 1
                item['headers']['x-apikey'] = self.get_api_key()
                item['params']['t'] = str(int(time.time() * 1000))
                self.spier_request_list.put(item)

            if self.is_sleep:
                time.sleep(self.sleep_time)

    # 保存数据
    def save_data(self):
        while True:
            data = self.spider_save_data.get()
            self.spider_save_data.task_done()
            if data:
                add_data_list = []
                for item in data['data']['hits']:
                    data_hash = {
                        'hash': item['hash'],
                        'blockHash': item['blockHash'],
                        'witnessHash': item['witnessHash']
                    }
                    hash_data = self.hash_data(str(data_hash))
                    if hash_data not in self.hash_data_list:
                        insert_data = {
                            'hash_data': hash_data,
                            'index': item['index'],
                            'blockHash': item['blockHash'],
                            'witnessHash': item['witnessHash'],
                        }
                        add_data_list.append(insert_data)
                        self.hash_data_list.append(hash_data)
                self.save_data_to_mongodb(add_data_list)
    
    def save_data_to_mongodb(self, add_data_list):
        if not add_data_list:
            print('line_num: ' + str(inspect.currentframe().f_lineno), '插入数据为空')
            return
        
        # 链接mongodb
        db_client = MongoDBClient().get_client()

        # 选择/创建数据库
        db = db_client['oklink']

        # 选择/创建集合（类似于关系数据库中的表）
        collection = db['oklink']

        for data in add_data_list:
            # 检查数据是否已存在
            filter_criteria = {"hash_data": data["hash_data"]}
            existing_data = collection.find_one(filter_criteria)

            if existing_data is None:
                # 数据不存在，执行插入操作
                collection.insert_one(data)
                print(f"Data inserted successfully: {data}")

        return True


    # 启动爬虫
    def main(self):
        print('启动')
        t_list = []

        # 构造请求
        t_request = threading.Thread(target=self.add_requests)
        t_list.append(t_request)

        # 请求数据
        for i in range(5):
            t_data = threading.Thread(target=self.get_data)
            t_list.append(t_data)

        # 保存数据
        t_save = threading.Thread(target=self.save_data)
        t_list.append(t_save)

        for t in t_list:
            t.setDaemon(True) # 把子线程设置为守护主线程,  主线程结束, 子线程就结束
            t.start()

        time.sleep(1)
        for q in [self.spier_request_list, self.spider_save_data]:
            q.join()


if __name__ == '__main__':
    spider = onlinkSpider()
    spider.main()