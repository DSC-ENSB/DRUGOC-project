# -*- coding: utf-8 -*-
from itertools import islice 
import json

i=0
data=[]
file = './meddra_all_se.tsv'
with open(file,encoding="UTF-8")as f:
    for line in islice(f, 0, None): 
        l=line.split("\t")
        i = i + 1
        data.append({"name" : l[-1]})
        if i ==33092:
            break

with open('effetsInd','w')as json_file:
    file_json = json.dump(data,json_file)
