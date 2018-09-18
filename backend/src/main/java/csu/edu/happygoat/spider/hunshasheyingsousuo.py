import requests
from bs4 import BeautifulSoup
import json
import re
import sys

url = sys.argv[1]
base_url = re.findall('(https://.*?)/', url)[0]

html = requests.get(url).text
soup = BeautifulSoup(html, 'html.parser')

def trim(str):
	return str.replace(' ', '').replace('\n', '').replace('\r', '')

datas = []
lis = soup.find('ul', class_='shoplistul').find_all('li')
for li in lis:
	data_dict = {}
	data_dict['title'] = trim(li.a['title'])
	tags = []
	taglist = li.find('div', class_='taglist').find_all('span')
	for tag in taglist:
		tags.append(tag.text)
	data_dict['tags'] = tags
	zone = li.find('div', class_='shopzone')
	data_dict['zone'] = trim(zone.text) + ' ' + zone['data-address']
	rightcon = li.find('div', class_='rightcon')
	data_dict['cast'] = rightcon.div.text
	ass = rightcon.find_all('a')
	data_dict['taoxi'] = ass[0].text.split()[-1]
	data_dict['anli'] = ass[1].text.split()[-1]
	data_dict['img'] = li.a.img['_src']
	data_dict['href'] = base_url + li.a['href']

	datas.append(data_dict)

#获取页码
pages = {}
p = soup.find('p', class_='page')
total = p.find('span', class_='totalPage').text
pages['total'] = total
pre = p.find_all('span', id='pagePrev')
if pre[0].a == None:
	pages['pre'] = ''
else:
	pages['pre'] = base_url + pre[0].a['href']
if pre[1].a == None:
	pages['next'] = ''
else:
	pages['next'] = base_url + pre[1].a['href']
pagelist = p.find_all('a', recursive=False)
page_list = []
for page in pagelist:
	dict = {}
	dict['num'] = page.text
	dict['href'] = base_url + page['href'] 
	page_list.append(dict)
pages['list'] = page_list

clearfixs = soup.find('div', class_='limit').find_all('li', class_='clearfix')
clear_list = ['jiage', 'quyu', 'fengge']
clear_dict = {}
for i in range(len(clearfixs)):
	clearfix = clearfixs[i]
	options_list = []
	options = clearfix.find_all('a')
	for option in options:
		option_dict = {}
		option_dict['href'] = base_url + option['href']
		option_dict['text'] = option.text
		if option.get('class') == None:
			option_dict['cur'] = 0
		else:
			option_dict['cur'] = 1
		options_list.append(option_dict)
	clear_dict[clear_list[i]] = options_list


res = {}
res['code'] = 200
res['clearfixs'] = clear_dict
res['datas'] = datas
res['pages'] = pages
print(json.dumps(res))
