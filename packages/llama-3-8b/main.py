# from huggingface_hub import login
#
# login(token="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")

import requests

response = requests.get("http://127.0.0.1:11434")
print(response.text)

import requests
import json

# 定义 URL 和请求数据
url = "http://localhost:11434/api/generate"
data = {
    "model": "llama3",
    "prompt": "介绍一下 vue 和 react 的不同之处",
    "stream": False
}

# 发起 POST 请求
response = requests.post(url, json=data)

# 打印返回结果
if response.status_code == 200:
    print("成功响应:")
    print(response.json())  # 打印 JSON 格式的返回数据
else:
    print(f"请求失败: {response.status_code}")
    print(response.text)  # 打印错误信息
