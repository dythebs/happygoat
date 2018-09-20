import requests
from bs4 import BeautifulSoup
import json
import re
import sys


url = sys.argv[1]
base_url = re.findall('(https://.*?/HunYan)', url)[0]


html = requests.get(url).text
soup = BeautifulSoup(html, "html.parser")

def trim(str):
	return str.replace(' ', '').replace('\n', '').replace('\r', '')


lis = soup.find_all('li', class_='clearfix listStyle')
datas = []
for li in lis:
	data_dict = {}
	data_dict['title'] = li.find('a', class_='name')['title']
	data_dict['img'] = li.article.a.img['src']
	data_dict['cast'] = '￥ '+li.find('strong').text.replace(' ','').strip()
	data_dict['href'] = base_url + li.find('a', class_='pic')['href']
	opinions = li.find('div', class_='opinion clearfix').find_all('i')
	opinions_list = []
	for opinion in opinions:
		if opinion.get('class') != None and 'line' in opinion['class']:
			continue
		opinions_list.append(trim(opinion.text))
	data_dict['opinions'] = opinions_list
	rooms = li.find('ul', class_='rooms').find_all('li')
	rooms_list = []
	for room in rooms:
		room_dict = {}
		room_dict['name'] = trim(room.a.em.text)
		room_dict['img'] = room.a.img['src']
		rooms_list.append(room_dict)
	data_dict['rooms'] = rooms_list
	datas.append(data_dict)




pages = {}
p = soup.find('div', id='pages')
total = trim(p.find('span', class_='totalPage').text)
pages['total'] = total
pagelist = p.find('span', id='pageNum').find_all('a')
page_list = []
for page in pagelist:
	dict = {}
	dict['num'] = trim(page.text)
	dict['href'] = base_url + '/' + page['href']
	page_list.append(dict)
pages['list'] = page_list
pre = p.find('span', id='pagePrev')
if pre.a == None:
	pages['pre'] = ''
else:
	pages['pre'] = base_url + '/' + pre.a['href']
next = p.find('span', id='pageNext')
if next.a == None:
	pages['next'] = ''
else:
	pages['next'] = base_url + '/' + next.a['href']


res = {}
res['code'] = 200
res['datas'] = datas
res['pages'] = pages
print(json.dumps(res))
