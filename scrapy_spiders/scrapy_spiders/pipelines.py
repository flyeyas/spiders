# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import logging
import pdb
from pymongo import MongoClient


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


class ScrapySpidersPipeline:
    def process_item(self, item, spider):
        logging.info(f"item: {item}")
        self.sava_mongo_data(item, spider)
        return item

    def sava_mongo_data(self, item, spider):
        logging.debug(f"sava_mongo_data item: {item}")
        # 链接mongodb
        db_client = MongoDBClient().get_client()
        # pdb.set_trace()
        # 选择/创建数据库
        db = db_client[spider.custom_settings['db']]

        # 选择/创建集合（类似于关系数据库中的表）
        collection = db[spider.custom_settings['collection']]

        brand_data = {}
        brand_data['brand_id'] = item['brand_id']
        brand_data['brand_name'] = item['brand_name']
        brand_data['brand_logo'] = item['brand_logo']
        brand_data['brand_hash'] = item['brand_hash']
        brand_data['list_IndustryType'] = item['list_IndustryType']
        brand_data['list_IndustryType2'] = item['list_IndustryType2']
        brand_data['list_IndustryType3'] = item['list_IndustryType3']
        filter_criteria = {"brand_hash": item["brand_hash"]}
        existing_data = collection.find_one(filter_criteria)
        if existing_data is None:
            # 数据不存在，执行插入操作
            collection.insert_one(brand_data)
            logging.info(f"Data inserted successfully: {brand_data}")
        else:
            logging.warning(f"Data already exists: {brand_data}")

        return item