import requests
from bs4 import BeautifulSoup


#def get_url(id):
"""
quote_page = "http://agence-prd.ansm.sante.fr/php/ecodex/rcp/R0309953.htm"
page = requests.get(quote_page)
src = page.content
soup = BeautifulSoup(src, 'html.parser')
tables = soup.find("table", attrs={"class": "AmmCorpsTexteTable"})
EI = []
for row in tables.find_all('tr'):
	cells = row.find('td')
	paragraph = cells.find('p')
	EI.append(str(paragraph))

for ei in EI:
	if side_effect in ei:
		return True
	else:
		return False
#get_url("65541548")"""

quote_page = "http://sideeffects.embl.de/se/"+ ID
page = requests.get(quote_page)
src = page.content
soup = BeautifulSoup(src, 'html.parser')
a = soup.find_all('a')
for i in a:
	if drug in i:
		return True
	else:
		return False
"""
for row in tables.find_all('tr'):
	cells = row.find('td')
	paragraph = cells.find('p')
	EI.append(str(paragraph))
for ei in EI:
	if side_effect in ei:
		return True
	else:
		return False

"""