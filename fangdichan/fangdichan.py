import requests
import execjs
from lxml import etree

requests = requests.session()
headers = {
    'Host': 'www.fangdi.com.cn',
    'Referer': 'http://www.fangdi.com.cn/new_house/new_house_jjswlpgs.html',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0'
}
url = 'http://www.fangdi.com.cn/index.html'


def first_request():
    res = requests.get(url, headers=headers)
    html_data = etree.HTML(res.text)
    conten_code = html_data.xpath('//meta[2]/@content')[0]
    func_code = html_data.xpath('//script[2]/text()')[0]
    return conten_code, func_code


def second_request():
    conten_code, func_code = first_request()
    with open('./fangdichan.js', encoding='utf-8') as f:
        js_code = f.read().replace('content_code', conten_code).replace('"func_code"', func_code)
    # print(js_code)
    js = execjs.compile(js_code)
    cookies = {'FSSBBIl1UgzbN7N80T':js.call('demo').split(';')[0].split('=')[-1]}
    print(cookies)
    res = requests.get(url, headers=headers, cookies=cookies)
    print(res)

second_request()


