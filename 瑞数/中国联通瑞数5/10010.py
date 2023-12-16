import requests
import execjs
from lxml import etree
import pdb


headers = {
    "authority": "iservice.10010.com",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}
url = "https://iservice.10010.com/e5/query.html"

def first_request():
    res = requests.get(url, headers=headers)
    html_data = etree.HTML(res.text)
    content_code = html_data.xpath('//meta[2]/@content')[0]
    func_code = html_data.xpath('//script[2]/text()')[0]
    return content_code, func_code, res.cookies.get_dict()


def second_request():
    content_code, func_code, res_cookies = first_request()
    js_code = ''
    with open('./10010.js', encoding='utf-8') as f:
        js_code = f.read().replace('content_code', content_code).replace('"function_code"', func_code)
    js = execjs.compile(js_code)
    res_cookies['IdlEqTWW2ERnT'] = js.call('get_cookie').split(';')[0].split('=')[-1]
    print(res_cookies)
    res = requests.get(url, headers=headers, cookies=res_cookies)
    print(res)

second_request()