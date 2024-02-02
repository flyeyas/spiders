# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class ScrapySpidersItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    pass


class BrandItem(scrapy.Item):
    brand_id = scrapy.Field()
    brand_name = scrapy.Field()
    brand_hash = scrapy.Field()
    brand_logo = scrapy.Field()
    list_IndustryType = scrapy.Field()
    list_IndustryType2 = scrapy.Field()
    list_IndustryType3 = scrapy.Field()