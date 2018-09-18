import requests
from bs4 import BeautifulSoup
import re
import sys
import json

#url = sys.argv[1]
url = 'https://www.daoxila.com/MiYue/Tours-141'

html = requests.get(url).text
html = html.replace('<head>', '<head><style type="text/css">#orderNow,#payNow,.hotel_logo,.dxl_logo,.guess,.talkwindow,.toolMain,.indexTool{ display: none ! important;}</style>')
html = html.replace('"//', '"https://')
html = html.replace('<![endif]–>', '')
html = html.replace('<!–[if lt IE9]>', '')
soup = BeautifulSoup(html, 'html.parser')
footer = soup.body.find('footer')
footer.decompose()
header = soup.body.find('header')
header.decompose()

res = {}
res['content'] = str(soup).replace('\r', '').replace('\n', '')

print(json.dumps(res))