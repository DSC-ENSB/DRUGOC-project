# -*- coding: utf-8 -*-
"""
Created on Wed Apr 10 17:12:30 2019

@author: Ala eddine
"""
import ScoreInformativite
import ScoreImputabilite
import ImputabiliteExtrinseque
import Sauvegarde

def Menu():
    print("<__________________________C.N.P.M__________________________>")
    print("<___________________Imputabilité Intrinsèque____________________>")
    nomM=input("Veuillez introduire le nom du patient: ")
    prenomM=input("Veuillez introduire le prénom du patient: ")
    ageM=input("Veuillez introduire l'age du patient: ")
    medicament=str(input("Veuillez introduire le médicament à imputer: "))
    medicament=medicament.lower()
    medicament=medicament.replace(str(medicament[0]),str(medicament[0]).capitalize())
    EI=str(input("Veuillez introduire l'effet indésirable: "))
    EI=EI.lower() 
    SI, DélaiA, DélaiB =ScoreInformativite.ScoreInformativité() 
    print("Le score d'informativité est: ", SI)
    Score=ScoreImputabilite.ScoreImputabilité(medicament, EI)
    print("Le score d'imputabilité intrinsèque est: ", Score)
    IE=ImputabiliteExtrinseque.ImputabulitéExtrinsèque()
    Sauvegarde.Sauvegarde(medicament, EI, DélaiA, DélaiB, SI, Score, IE, nomM, prenomM, ageM)
    
if __name__=='__main__':
    Menu()