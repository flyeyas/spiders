# -*- coding: utf-8 -*-
"""
Created on 2023-10-03 18:04:30
---------
@summary:
---------
@author: flyeyas
"""

import feapder


class Amazon(feapder.AirSpider):
    # 定义爬取的url
    url = 'https://www.amazon.cn/s?k=%E6%89%8B%E6%9C%BA&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&crid=1EP9S0KARXPB3&sprefix=%E6%89%8B%E6%9C%BA%2Caps%2C72&ref=nb_sb_noss_1'
    
    # 定义爬取的函数
    def start_requests(self):
        # 发起请求
        yield feapder.Request("https://spidertools.cn")

    # 定义解析函数
    def parse(self, request, response):
        # 提取网站title
        print(response.xpath("//title/text()").extract_first())
        # 提取网站描述
        print(response.xpath("//meta[@name='description']/@content").extract_first())
        print("网站地址: ", response.url)


if __name__ == "__main__":
    # 启动爬虫
    Amazon().start()