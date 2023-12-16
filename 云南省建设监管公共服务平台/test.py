from gmssl import sm4, func
import base64

# 创建SM4加密对象
sm4_crypt = sm4.CryptSM4()

key = b'B6*40.2_C9#e4$E3'

# 设置密钥
sm4_crypt.set_key(key, sm4.SM4_ENCRYPT)

# sm4_crypt.mode = "ecb"


# 要加密的数据
data = b'{"pageNum":1,"pageSize":10,"certificateType":"","name":"","slideId":"1185536166162595840","key":"query","width":84}'

# 加密数据
ciphertext = sm4_crypt.crypt_ecb(func.bytes_to_list(data))

# 将加密后的数据转换为字节串
encrypted_data = bytes(func.list_to_bytes(ciphertext))

encoded_data = base64.b64encode(ciphertext.encode())

print(encoded_data)