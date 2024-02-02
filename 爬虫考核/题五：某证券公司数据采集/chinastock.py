import requests


headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    
    "Referer": "https://www.chinastock.com.cn/newsite/cgs-services/stockFinance/businessAnnc.html?type=marginList",

    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
}
cookies = {
    # "aliyungf_tc": "0fa872c1ce75fbdc87e668caa9a87fa6f3a7e6276a42366055c10892812c95ce",
    # "acw_tc": "ac11000117037555184926781e9ae9feeb13cc27451f0d07f9000c5f9ea085",
    # "1EzPGwRUoQaWS": "5bNixcnrFG9KNylWj.4ftmaGxmCSV5TKph7vRwGZPDA4UUI4ZXmC69apZtqa8ku9PO__nBSRtTz0u36Cwtm7WAG",
    # "sajssdk_2015_cross_new_user": "1",
    # "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%2218cafbe15a916f7-0a3029f75e4b07-1f525637-1296000-18cafbe15aa2467%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%2218cafbe15a916f7-0a3029f75e4b07-1f525637-1296000-18cafbe15aa2467%22%7D",
    # "JSESSIONID": "0fa872c1ce75fbdc87e668caa9a87fa6f3a7e6276a42366055c10892812c95ce"
}
url = "https://www.chinastock.com.cn/website2020/doc/queryDocList"
params = {
    "pageSize": "50",
    "pageNo": "2",
    "dayLimit": "9000",
    "catName": "yhgg_调整融资融券标的证券名单的公告"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)