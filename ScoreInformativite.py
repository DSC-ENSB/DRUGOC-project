# -*- coding: utf-8 -*-
"""
Created on Wed Apr 10 17:08:15 2019

@author: Ala eddine
"""
import Date

def ScoreInformativité():
    print("<__________________________Score d'informativité__________________________>")
    print("\nA: Délai de survenue de l'effet indésirable par rapport à la période d'exposition au médicament")
    print("1: Est renseigné")
    print("2: N'est pas renseigné")
    A = 0
    while A < 1 or A > 2:
        try:
            A=int(input("Entrez votre choix : "))
            if A == 1:
                DélaiA=Date.DateA()
            elif A == 2:
                DélaiA=0
            else:
                print("Veuillez choisir de 1 à 2, s'il vous plait.")
        except:
            print("Entrée éronnée !!")
            print("Ressayer\n")
            
    print("\nB: Notion d'arrêt ou de poursuite du médicament ou de modification de posologie:")
    print("1: Est renseigné")
    print("2: N'est pas renseigné")
    B = 0
    while B < 1 or B > 2:
        try:
            B=int(input("Entrez votre choix : "))
            if B == 1:
                DélaiB=Date.DateB()
            elif B == 2:
                DélaiB=0
            else:
                print("Veuillez choisir de 1 à 2, s'il vous plait.")
        except:
            print("Entrée éronnée !!")
            print("Ressayer\n")
    
    if (A == 1 and B == 1):
        SI="NI2"
    elif (A == 1 or B == 1):
        SI="NI1"
    else:   
        SI="NI0"
    return (SI, DélaiA, DélaiB)