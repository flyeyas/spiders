# -*- coding: utf-8 -*-
"""
Created on 2023-10-03 17:19:32
---------
@summary:
---------
@author: flyeyas
"""

import feapder
import pdb
import csv
import os

class Mafengwo(feapder.AirSpider):
    # 定义爬取的url
    url = 'https://www.mafengwo.cn/gonglve/'
    # 定义最大爬取页数
    max_page = 15
    # 定义存储文件路径
    save_file = './mafengwo.csv'

    def start_requests(self):
        # 如果文件存在，则删除
        if os.path.exists(self.save_file):
            os.remove(self.save_file)

        # 发起请求
        yield feapder.Request(self.url)
        # 遍历每一页
        for page in range(1, self.max_page+1):
            # 设置请求参数
            data = {
                'page': str(page)
            }
            params = {
                'method': 'post'
            }
            # 发起请求
            yield feapder.Request(self.url, data = data, params = params, callback=self.parse)

    def parse(self, request, response):
        # 提取网站title
        # pdb.set_trace()
        # 定义xpath
        feed_xpath = '//div[@class="_j_feed_data"]/div[@class="feed-item _j_feed_item"]'
        dataList = []
        # 遍历每一条数据
        for data_xpath in response.xpath(feed_xpath):
            # 获取url
            url = data_xpath.xpath('./a/@href').extract_first()
            # 获取title
            title =  data_xpath.xpath('./a/div[@class="title"]/text()').extract_first().strip()
            print('url: %s,title: %s' % (url, title))
            # 将url和title添加到列表中
            dataList.append((url, title))
        
        #存储到CSV中
        with open(self.save_file, 'a', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerows(dataList)


if __name__ == "__main__":
    # 启动爬虫
    Mafengwo().start()