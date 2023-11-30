import threading
import queue
import requests
import json

class Worker(threading.Thread):
    def __init__(self, queue):
        threading.Thread.__init__(self)
        self.queue = queue

    def run(self):
        while True:
            url = self.queue.get()
            try:
                self.fetch_url(url)
            finally:
                self.queue.task_done()

    
    def fetch_url(self, url):
        cookieList = {
            'cngizm2ziytq3mwy': '1bsMhFU63AkwhFxg0Ao56GUPs2YD6mBQ5mwAtG0F5CQbqHMYgQ==',
            'fogq4n2exnzc0otg': 'AAoINQZYDQQJXlVeBw0DUA8AWwlIRBJLQERKHE4TQxpDSB8RDA=='
        }
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
        }
        response = requests.get(url, headers=headers, cookies=cookieList)
        dataRet = json.loads(response.text)
        dataRetList = dataRet['data']['rows']
        # 进行测试输出一条
        for data in dataRetList:
            title = data['release_name']
            competition_start_time = data['competition_start_time']
            competition_end_time = data['competition_end_time']
            release_sponsor = data['release_sponsor']
            print(f"从{url}获取的数据：标题 - {title}, 开始时间 - {competition_start_time}, 结束时间 - {competition_end_time}, 主办方 - {release_sponsor}")
            break

queue = queue.Queue()

for i in range(3):  # 创建5个工作线程
    worker = Worker(queue)
    worker.daemon = True
    worker.start()

urlList = [
    "https://adworld.xctf.org.cn/api/event/release_event/list/?page=1&page_size=20&search=&isSearch=false&event_status=&event_type=",
    "https://adworld.xctf.org.cn/api/event/release_event/list/?page=2&page_size=20&search=&isSearch=false&event_status=&event_type=",
    "https://adworld.xctf.org.cn/api/event/release_event/list/?page=3&page_size=20&search=&isSearch=false&event_status=&event_type=",
    "https://adworld.xctf.org.cn/api/event/release_event/list/?page=4&page_size=20&search=&isSearch=false&event_status=&event_type=",
    "https://adworld.xctf.org.cn/api/event/release_event/list/?page=5&page_size=20&search=&isSearch=false&event_status=&event_type=",
    "https://adworld.xctf.org.cn/api/event/release_event/list/?page=6&page_size=20&search=&isSearch=false&event_status=&event_type=",
]

for url in urlList:
    queue.put(url)

queue.join()  # 等待队列为空
