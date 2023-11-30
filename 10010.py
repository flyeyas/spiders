import requests

url = 'http://iservice.10010.com/e5/query.html'

response = requests.get(url)
print(response.json)