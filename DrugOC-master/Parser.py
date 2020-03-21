# -*- coding: UTF-8 -*-
#!/usr/bin/python

from itertools import islice 
import requests
from bs4 import BeautifulSoup
from Bio import Entrez
from Bio import Medline

def RE_extractor(drug):
	print('DRUG -------------------------',drug)
	with open("CIS.txt",  encoding="ISO-8859-1") as f:
		cis = []
		for line in islice(f, 0, None): 
			l=line.split("\t")
			if l[-2] == 0:
				l[-2] == "4675869"
				if drug.upper() in l[1].upper() and l[-2] not in cis:
					cis.append([l[-2],l[1]]) 
				
				
		#If len(res) > 1:
			#show the list of drugs found l[1] and let the user choose which one
			#get the cis code of this drug l[-2]
		#else :
			#res = res[0] #so cis will be str

	return cis

def ansm_parser(drug, side_effect):

	cis = RE_extractor(drug)
	quote_page = "http://agence-prd.ansm.sante.fr/php/ecodex/rcp/R"+ str(cis[0][0]) +".htm"
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
		if side_effect.title() in ei:
			return True 
	return False	

def ID_extractor(side_effect):
	
	with open("meddra_all_se.tsv") as f:
		res = []
		for line in islice(f, 0, None): 
			l=line.split("\t")
			if l[3] == "PT":
				if side_effect in l[-1] and l[-2] not in res :
					res.append(l[-1])
					res.append(l[-2])
	if len(res) == 1:
		return res[1]
	elif len(res) > 1:
		pass #show the side effects and let the user choose
		return res[1]
	else:
		print("0 résultats trouvés")
		return str(0)
	

def sider_parser(drug, side_effect):

	ID = ID_extractor(side_effect.title())
	quote_page = "http://sideeffects.embl.de/se/"+ ID
	page = requests.get(quote_page)
	src = page.content
	soup = BeautifulSoup(src, 'html.parser')
	a = soup.find_all('a')
	for i in a:
		if drug in i:
			return True
	return False	

def pub_med_parser(drug, side_effect):
	
	Entrez.email = "cnpm@cnpm.org.dz"
	terms = "(("+drug+"[Title]) AND "+side_effect+"[Title/Abstract])" 
	handle= Entrez.esearch(db = "pubmed", term = terms, rettype = "medline", retmode = "text") 
	record = Entrez.read(handle)
	handle.close()
	if record["Count"] != "0":
		idlist = record["IdList"]
		handle2 = Entrez.efetch(db="pubmed", id=idlist, rettype="medline",retmode="text")
		records = Medline.parse(handle2)
		records = list(records)

		for record in records:
			print("title:", record.get("TI", "?"))
			print("authors:", record.get("AU", "?"))
			print("source:", record.get("SO", "?"))
		return True
	else:
		print("0 résultats trouvés")
	return False