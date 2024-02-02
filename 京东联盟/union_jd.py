import requests


headers = {
    "accept": "application/json, text/plain, */*",
    "referer": "https://union.jd.com/proManager/index?pageNo=1",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "x-referer-page": "https://union.jd.com/proManager/index",
    "x-rp-client": "h5_1.0.0"
}
cookies = {
    # "3AB9D23F7A4B3CSS": "jdd035NDPHTJLHIR5C3BMRF3PHRYTBRVJFDCV35AJTIMFC77TU7CCSNTYP25ADXR4CGE66PWPZIFNUCS2WUJKQZASV3WXCEAAAAMMQXJLF3YAAAAADER443YD5UZ7FYX",
    # "RT": "\"z=1&dm=jd.com&si=9h0n5vbb2xc&ss=lqddbmuc&sl=4&tt=4u4u&ld=5b7g\"",
    # "__jdb": "209449046.5.1702964967974189482779|3.1703052226"
}
url = "https://api.m.jd.com/api"
params = {
    "functionId": "unionSearch",
    "appid": "unionpc",
    "_": "1703052493331",
    "loginType": "3",
    "uuid": "1702964967974189482779",
    "x-api-eid-token": "jdd035NDPHTJLHIR5C3BMRF3PHRYTBRVJFDCV35AJTIMFC77TU7CCSNTYP25ADXR4CGE66PWPZIFNUCS2WUJKQZASV3WXCEAAAAMMQMCA66AAAAAACCOHDQUEE5JP5EX",
    "h5st": "20231220140813367;3531313809132714;586ae;tk03wa7951c3e18n5RppOEHlRD48FAhYocu9yyK-5UVSsaWdn2jPysz7VoTJ7ehR9oYmqw026NLb6OewoySDRSGYW2Pp;e095b7d4d4f996874ae24c963e30494b3dfb8575b73f69ff3a2f39937152aaad;3.1;1703052493367;76dcb804add1320a126905907ff5ddbfe6354a3d8eb09a6164035064d003aab8d0dd2ba3365155923e199a44208113eec7f7a35fb6a2a0bce4a65fb65e5bc0812c95cff98d8ab602c779b56314107ef026cb665b56145afdeb72d82c0ae5a1c5",
    "body": "{\"funName\":\"search\",\"version\":\"v3\",\"source\":20310,\"param\":{\"pageNo\":1,\"pageSize\":60,\"searchUUID\":\"b89ef59acab9403e9d7aee2fdbc2a0ff\",\"bonusIds\":null,\"category1\":null,\"category2\":null,\"category3\":null,\"deliveryType\":null,\"wlRate\":null,\"maxWlRate\":null,\"fromPrice\":null,\"toPrice\":null,\"hasCoupon\":null,\"isHot\":null,\"isNeedPreSale\":null,\"isPinGou\":null,\"isZY\":null,\"isCare\":null,\"lock\":null,\"orientationFlag\":null,\"sort\":null,\"sortName\":null,\"keyWord\":\"\",\"searchType\":\"st3\",\"keywordType\":\"kt0\"},\"clientPageId\":\"jingfen_pc\"}"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)

