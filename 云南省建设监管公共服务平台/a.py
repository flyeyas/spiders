import os
import execjs

from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5
import base64

def first_encrypt(message):
    # 获取当前文件路径
    current_dir = os.path.dirname(os.path.abspath(__file__))
    js_code = ''
    with open(current_dir + '/ynjzjgcx.js', 'r', encoding='utf-8') as f:
        js_code = f.read()

    js = execjs.compile(js_code)
    result = js.call('get_encrypt_data', message)
    return result


F_e = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC29miF1Wp9XlhCECo+FYpCHad1ipEMgXf4IdgYjMIQwczzo9GXdcZ4eeV+9lkh6+aTqzzU843rdkMt0vrSnujU+GOuDPLfa5LZ6SfanAoysi6xxTX02Xizb3k+Z1USIzm9QAwE+SR1AQ78rGTRFHWFu7OGPkVNeF+vrX3inQTiawIDAQAB"



def V_e(e):
    key = RSA.importKey(base64.b64decode(F_e))
    cipher = PKCS1_v1_5.new(key)
    chunk_size = 117
    chunks = [e[i:i+chunk_size] for i in range(0, len(e), chunk_size)]
    encrypted_chunks = [cipher.encrypt(chunk.encode()) for chunk in chunks]
    return ",".join(base64.b64encode(encrypted_chunk).decode() for encrypted_chunk in encrypted_chunks)


params = {
    "pageNum": 1, 
    "pageSize": 10,
    "certificateType":"01",
    "name":"",
    "slideId": '1185655575912906752',
    "key":"query", 
    "width": 223
}

params = first_encrypt(params)
params = V_e(params)

print(params)


