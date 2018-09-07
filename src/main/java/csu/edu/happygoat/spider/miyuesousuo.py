import requests
from bs4 import BeautifulSoup
import json
import re
import sys

url = 'https://www.daoxila.com/MiYue'
base_url = re.findall('(https://.*?)/', url)[0]

html = requests.get(url).text
html = re.findall('(<body>.*?</body>)', html, re.DOTALL)[0]
soup = BeautifulSoup(html, 'html.parser')
#print(soup)
def trim(str):
	return str.replace(' ', '').replace('\n', '').replace('\r', '')

datas = []

lis = soup.find('div', class_='product').find_all('li')
for li in lis:
	data_dict = {}
	data_dict['href'] = base_url + li.a['href']
	info = li.find('div', class_='info')
	data_dict['title'] = info.h3.text
	data_dict['summary'] = info.p.text
	price = info.find('p', class_='price')
	data_dict['price'] = price.text
	datas.append(data_dict)

res = {}
res['code'] = 200
res['datas'] = datas
print(json.dumps(res))