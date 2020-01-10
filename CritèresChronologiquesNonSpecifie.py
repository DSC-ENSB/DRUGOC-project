# -*- coding: utf-8 -*-
"""
Created on Wed Apr 17 12:26:39 2019

@author: Ala eddine
"""

def CCNS(EI, DélaiA):
    
    DAEI=0
    print("Délai d'apparition de l'effet indésirable: \n1: Suggestif \n2: Compatible \n3: Incompatible")
    while DAEI < 1 or DAEI > 3:
        DAEI=int(input("Entrez votre choix: "))
        if DAEI < 1 or DAEI > 3:
            print("Veuillez choisir de 1 à 3, s'il vous plait.")
    return DAEI