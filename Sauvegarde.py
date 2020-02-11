# -*- coding: utf-8 -*-
"""
    Created on Sat Apr 13 11:19:14 2019

@author: Ala eddine
"""
from datetime import date

def Sauvegarde(medicament, EI, DélaiA, DélaiB, SI, Score, IE, nomM, prenomM, ageM):
    print("#################################################")
    print("Souhaitez vous enregistrer le travail sur disque ?")
    print("1: Oui \n2: Non")
    ans=0
    while ans < 1 or ans > 2:
        try:
            ans=int(input("Entrez votre choix: "))
            if ans == 1:
                dossier=input("Veuillez introduire le chemin du dossier de sauvegrade: ")
                nom=input("Veuillez introduire votre nom: ")
                prenom = input("Veuillez introduire votre prénom: ")
                temp=str(date.today())
                if DélaiA == 0:
                    DélaiA = "n'est pas renseigné."
                if DélaiB == 0:
                    DélaiB = "n'est pas renseigné."  
                document="<__________________________C.N.P.M__________________________>"
                document=document+"\nLa date: "+ temp 
                document = document+"\nRecherche de lien de causalité entre '" +medicament+"' et '"+EI+"'"
                document=document+"\nLe nom du patient: " + nomM + ".\nLe prénom du patient: "+ prenomM +".\nAge du pateint: "+ageM
                document=document+"\nDélai de survenue de l'effet indésirable par rapport à la période d'exposition au médicament: "+ str(DélaiA) 
                document=document+"\nNotion d'arrêt ou de poursuite du médicament ou de modification de posologie: "+ str(DélaiB)
                document=document+"\nLe score d'informativité est : "+SI+"\nLe score d'imputabilité intrinsèque est: "+Score
                document=document+"\nLe score d'imputabilité extrinsèque est: "+IE
                document=document+"\nCe travail est fait par: "+ nom +" - "+prenom
                name=dossier+"Imputabilite "+medicament+".txt"
                fichier=open(name, "w")
                fichier.write(document)
                fichier.close()
            elif ans != 2:
                print("Veuillez choisir entre 1 et 2, s'il vous plait")
        except:
            print("Entrée éronnée !!")
            print("Ressayer\n")