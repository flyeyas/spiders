import json
import scrapy
import pdb
import logging
import hashlib
from scrapy_spiders.items import BrandItem


class WinshangdataSpider(scrapy.Spider):
    name = "winshangdata"
    allowed_domains = [
        "winshangdata.com"
    ]
    start_urls = [
        "https://www.winshangdata.com/brandList"
    ]

    custom_settings = {
        'db': 'winshangdata',
        'collection': 'winshangdata',
    }

    debug = False

    def get_list_by_xpath(self, response, xpath):
        res_list = response.xpath(xpath).extract()
        ret_list = []
        for res in res_list:
            ret_list.append(res.strip())
        return ret_list

    def parse(self, response):
        logging.info("start parsing, url: %s" % response.url)
        brand_xpath = '//div[@class="box-shadow"]/div[1]/div[1]/ul/li/text()'
        category_list = self.get_list_by_xpath(response, brand_xpath)
        for category in category_list:
            if category == "不限":
                category_list.remove(category)
        if len(category_list) == 0:
            logging.warning("no category found, url: %s" % response.url)
            return

        for category in category_list:
            logging.info("start parsing category: %s" % category)
            url = "https://www.winshangdata.com/wsapi/brand/getBigdataList3_4"
            headers = {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json;charset=UTF-8",
                "Origin": "https://www.winshangdata.com",
                "Pragma": "no-cache",
                "Referer": "https://www.winshangdata.com/brandList",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                "appType": "bigdata",
                "platform": "pc",
                "uuid": "123456"
            }
            data = {
                "isHaveLink": "",
                "isTuozhan": "",
                "isXxPp": "",
                "kdfs": "",
                "key": "",
                "orderBy": "1",
                "pageNum": 1,
                "pageSize": 60,
                "pid": "",
                "qy_p": "",
                "qy_r": "",
                "xqMj": "",
                "ytlb1": category,
                "ytlb2": ""
            }

            request = scrapy.Request(url, callback=self.getBigdataList3_4, method="POST", body=json.dumps(data), dont_filter=True, headers=headers)
            request.meta['headers'] = headers
            request.meta['data'] = data
            request.meta['category'] = category
            request.meta['page'] = 1
            request.meta['url'] = url
            yield request

            if self.debug:
                break

    def getBigdataList3_4(self, response):
        logging.info("getBigdataList3_4, category: %s" % response.meta['category'])
        if response.status != 200:
            logging.error("getBigdataList3_4, status: %s" % response.status)
            return
        res_data = json.loads(response.text)
        if res_data['code'] != 0:
            logging.error("getBigdataList3_4, code: %s, msg: %s" % (res_data['code'], res_data['msg']))
            return
        data_list = res_data['data']['list']
        for data in data_list:
            brand_data = BrandItem()
            brand_data['brand_id'] = data['brandId']
            brand_data['brand_name'] = data['brandName']
            brand_data['brand_logo'] = data['brandLogo']

            hash_data = str(brand_data['brand_id']) + brand_data['brand_name']
            brand_data['brand_hash'] = hashlib.md5(hash_data.encode('utf-8')).hexdigest()
            brand_data['list_IndustryType'] = data['list_IndustryType']
            brand_data['list_IndustryType2'] = data['list_IndustryType2']
            brand_data['list_IndustryType3'] = data['list_IndustryType3']
            logging.debug("getBigdataList3_4, brand_data: %s" % brand_data)
            yield brand_data

        next_page = res_data['data']['nextPage']
        if next_page != 0:
            url = response.meta['url']
            headers = response.meta['headers']
            category = response.meta['category']
            data = response.meta['data']
            data['pageNum'] = next_page
            logging.debug("getBigdataList3_4, category: %s, next_page: %s" % (category, next_page))

            request = scrapy.Request(url, callback=self.getBigdataList3_4, method="POST", body=json.dumps(data), dont_filter=True, headers=headers)
            request.meta['headers'] = headers
            request.meta['data'] = data
            request.meta['category'] = category
            request.meta['page'] = next_page
            request.meta['url'] = url
            
            if not self.debug:
                yield request