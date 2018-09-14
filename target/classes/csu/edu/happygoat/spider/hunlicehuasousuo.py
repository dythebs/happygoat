import requests
from bs4 import BeautifulSoup
import json
import re
import sys


url = sys.argv[1]
base_url = re.findall('(https://.*?)/', url)[0]


html = requests.get(url).text
soup = BeautifulSoup(html, 'html.parser')

#数据列表
lis = soup.find_all('li', class_='lazyLoad')
datas = []
for li in lis:
	data_dict = {}
	img = li.find('div', class_='img')
	data_dict['img'] = img.img['_src'][2:]
	tags = li.find('dl', class_='fl').find_all('dd')
	tag_list = []
	for tag in tags:
		tag_list.append(tag.text)
	data_dict['tags'] = tag_list
	title = li.find('div', class_='title')
	data_dict['title'] = title.a.text
	cast = li.find('div', class_='cast')
	data_dict['cast'] = cast.text
	zan = li.find('div', class_='zan')
	data_dict['zan'] = zan.i.text
	shopname = li.find('div', class_='shopname')
	data_dict['shopname'] = shopname.a.text
	data_dict['span'] = shopname.span.text
	data_dict['shophref'] = base_url + shopname.a['href']
	shoppic = li.find('div', class_='shoppic')
	data_dict['shoppic'] = shoppic.img['_src'][2:]
	href = li.find('a', class_='mask')
	data_dict['anlihref'] = href['href']
	changdi = li.find('div', class_='cd')
	changdi_dict = {}
	if changdi != None:
		if changdi.a == None:
			changdi_dict['location'] = changdi.text
			changdi_dict['href'] = ''
		else:
			changdi_dict['location'] = changdi.a.text
			changdi_dict['href'] = changdi.a['href']
	data_dict['changdi'] = changdi_dict
	datas.append(data_dict)

#筛选选项
clearfixs = soup.find_all('li', class_='clearfix')
clear_list = ['yusuan', 'fengge', 'zhuti', 'quyu']
clear_dict = {}
for i in range(len(clearfixs)):
	clearfix = clearfixs[i]
	options_list = []
	if i == 2:
		option_dict = {}
		option = clearfix.find('a', class_='tt')
		option_dict['href'] = base_url + option['href']
		option_dict['text'] = option.text
		if 'cur' in option['class']:
			option_dict['cur'] = 1
		else:
			option_dict['cur'] = 0
		options_list.append(option_dict)
		options = clearfix.find_all('div', class_='color')
		for option in options:
			option_dict = {}
			option_dict['href'] = base_url + option.a['href']
			option_dict['text'] = option.a['title']
			if 'cur' in option['class']:
				option_dict['cur'] = 1
			else:
				option_dict['cur'] = 0
			options_list.append(option_dict)
	else:
		options = clearfix.find_all('a', class_='tt')
		for option in options:
			option_dict = {}
			option_dict['href'] = base_url + option['href']
			option_dict['text'] = option.text
			if 'cur' in option['class']:
				option_dict['cur'] = 1
			else:
				option_dict['cur'] = 0
			options_list.append(option_dict)
	clear_dict[clear_list[i]] = options_list

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


res = {}
res['code'] = 200
res['clearfixs'] = clear_dict
res['datas'] = datas
res['pages'] = pages
print(json.dumps(res))
