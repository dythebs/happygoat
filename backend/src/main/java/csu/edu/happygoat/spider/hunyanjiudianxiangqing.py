import requests
from bs4 import BeautifulSoup
import re
import sys
import json

url = sys.argv[1]

html = requests.get(url).text
html = html.replace('<head>', '<head><style type="text/css">.hotel_logo,.dxl_logo,.guess,.talkwindow,.toolMain,.indexTool{ display: none ! important;}</style>')
html = html.replace('"//', '"https://')
soup = BeautifulSoup(html, 'html.parser')

footer = soup.find('footer')
footer.decompose()
header = soup.find('header')
header.decompose()

res = {}
res['content'] = str(soup).replace('\r', '').replace('\n', '')

print(json.dumps(res))