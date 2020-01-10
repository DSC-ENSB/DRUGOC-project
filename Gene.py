# -*- coding: utf-8 -*-
"""
Created on Sat Apr 13 20:36:31 2019

@author: Ala eddine
"""

from Bio import Entrez
import ssl

def gene(ID, medicament, Email="Example@gmail.com"):
    ssl._create_default_https_context = ssl._create_unverified_context

    Entrez.email = (Email)
    data_base="gene"      
    #handle2 = Entrez.efetch(db=data_base, id=ID, rettype = 'xml', retmode ='txt')
    #record1 = Entrez.read(handle2,validate=False)
    handle2 = Entrez.esummary(db=data_base, id=ID, rettype = 'xml')
    record1 = Entrez.read(handle2,validate=False)
    NameP=record1['DocumentSummarySet']['DocumentSummary'][0]['NomenclatureName']
    NameP="La protéine cible est: "+str(NameP)
    print(NameP)  
    NameG=record1['DocumentSummarySet']['DocumentSummary'][0]['Name']
    NameG="Le gène qui code cette protéine est: "+str(NameG)
    print(NameG)
    #print(record1['DocumentSummarySet']['DocumentSummary'][0]['Description'])
    AutreNomination=record1['DocumentSummarySet']['DocumentSummary'][0]['OtherAliases']
    AutreNomination="Autres nomination de ce gène: "+str(AutreNomination)
    print(AutreNomination)
    r=record1['DocumentSummarySet']['DocumentSummary'][0]['Summary']
    r="Resumee: "+str(r)
    print(r)
    #NameP=record1[0]['Entrezgene_gene']['Gene-ref']['Gene-ref_desc']
    #print("La protéine cible est: ", str(NameP))
    #NameG=record1[0]['Entrezgene_gene']['Gene-ref']['Gene-ref_syn']
    #print("Le gêne qui code cette protéine est: ",str(NameG))
    #Locus=record1[0]['Entrezgene_gene']['Gene-ref']['Gene-ref_locus']
    #print("Locus du gêne est: ",str(Locus))
    #resumee=record1[0]['Entrezgene_summary']
    #r="Resumee: "+ resumee +"\n"
    #print(str(r))
    info=NameP+"\n"+NameG+"\n"+r+"\n"
    return (info)