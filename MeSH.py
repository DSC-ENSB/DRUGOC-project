# -*- coding: utf-8 -*-
"""
Created on Thu Apr 11 15:42:23 2019

@author: Ala eddine
"""

from Bio import Entrez
import ssl

def MeSH(medicament):

    ssl._create_default_https_context = ssl._create_unverified_context

    Entrez.email = ("cnpm@cnpm.org.dz")
    data_base="mesh"      
    try:
        handle = Entrez.esearch(db = data_base, term = medicament, rettype = "full", retmode = "text")
        record = Entrez.read(handle)
        try:
            handle2 = Entrez.esummary(db=data_base, id=record['IdList'][0])
            record1 = Entrez.read(handle2)
            return (record1[0]['DS_ScopeNote'])
        except:
            pass
    except:
        print("Sorry !! il y'a eu un problème")