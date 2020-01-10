# -*- coding: utf-8 -*-
"""
Created on Thu Apr 11 10:14:06 2019

@author: Ala eddine
"""

import drug_bank
import Gene

def DrugBank(medicament):
    save=''
    list_of_drug = drug_bank.get_drugs()
    for i in range(0,len(list_of_drug)):
        if medicament == list_of_drug[i]['name']:
            for j in range(0,len(list_of_drug[i]['proteins'])):
                categorie="Famille médicamenteuse: "+str(list_of_drug[i]['categories'])
                print(categorie)
                organisme="Organisme: "+str(list_of_drug[i]['proteins'][j]['organism'])
                print("\n"+organisme)
                group="Etat de l'autorisation: "+str(list_of_drug[i]['groups'])
                print(group)
                action="Action du médicament: "+str(list_of_drug[i]['proteins'][j]['actions'])
                print(action)
                knownAction="Mécanisme d'action: "+str(list_of_drug[i]['proteins'][j]['known action'])
                print(knownAction)
                cible="Le médicament cible un(e): " +str(list_of_drug[i]['proteins'][j]['category'])
                print(cible)
                IDg=list_of_drug[i]['proteins'][j]['entrez gene id']
                infoG=Gene.gene(IDg,medicament)      
                save=save+categorie+"\n"+organisme+"\n"+group+"\n"+action+"\n"+knownAction+"\n"+cible+"\n"+infoG
    return save