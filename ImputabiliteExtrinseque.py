# -*- coding: utf-8 -*-
"""
Created on Wed Apr 10 17:11:49 2019

@author: Ala eddine
"""
import webbrowser

def imputabiliteExtrinseque():
    
    print("<___________________Imputabilité Extrinsèque____________________>")
    print("Souhaitez vous rechercher le résumé des caractéristiques du produit 'RCP': \n1: Oui \n2: Non")
    rep=0
    while rep < 1 or rep > 2:
        try:
            rep=int(input("Entrez votre choix: "))
            if rep == 1:
                webbrowser.open('http://agence-prd.ansm.sante.fr/php/ecodex/index.php')
            elif rep != 2:
                print("Veuillez choisir entre 1 et 2, s'il vous plait.")
        except:
            print("Entrée éronnée !!")
            print("Ressayer\n")
    print ("Est ce que la nature, la gravité, l'intensité et l'évolution de l'effet indésirable "+
           "correpondent aux informations décrites dans le RCP ?")
    print("1: Oui \n2: Non")
    IE=0
    choix=0
    while choix < 1 or choix > 2:
        try:
            choix=int(input("Entrez votre choix: "))
            if choix == 1:
                IE="B4"
                print("L'effet est attendu le score d'imputabilité extrinsèque est donc: ", IE)
            elif choix == 2:
                print("Souhaitez vous réaliser une recherche bibliographique ?")
                print("1: Oui \n2: Non")
                ans=0
                while ans < 1 or ans > 2:
                    try:
                        ans=int(input("Entrez votre choix: "))
                        if ans == 1:
                            print("Veuillez choisir un ouvrage de référence: ")
                            print("1: Martindale \n2: SIDER Side Effect Ressource \n3: Prescrire \n4: Vidal")
                            a=0
                            while a < 1 or a > 4:
                                try:
                                    a=int(input("Entrez votre choix: "))
                                    if a == 1:
                                        webbrowser.open('https://about.medicinescomplete.com/publication/martindale-the-complete-drug-reference/')
                                    elif a == 2:
                                        webbrowser.open('http://sideeffects.embl.de/')
                                    elif a == 3:
                                        webbrowser.open('http://www.prescrire.org/fr/Login.aspx')
                                    elif a == 4:
                                        webbrowser.open('https://www.vidal.fr/')
                                    else:
                                        print("Veuillez choisir de 1 à 4, s'il vous plait.")
                                    
                                    print("Est ce que l'effet est référencé ou largement publié avec ce médicament dans des ouvrages de références et/ ou des bases de données ?")
                                    print("1: Oui \n2: Non")
                                    ans=0
                                    while ans < 1 or ans > 2:
                                        try:
                                            ans=int(input("Entrez votre choix: "))
                                            if ans == 1:
                                                IE="B3"
                                                print("Le score d'imputabilité extrinsèque est donc: ", IE)
                                            elif ans !=2:
                                                print("Veuillez choisir entre 1 et 2, s'il vous plait.")
                                        except:
                                            print("Entrée éronnée !!")
                                            print("Ressayer\n")
                                except:
                                    print("Entrée éronnée !!")
                                    print("Ressayer\n")
                        elif ans != 2:
                            print("Veuillez choisir entre 1 et 2, s'il vous plait.")
                    except:
                        print("Entrée éronnée !!")
                        print("Ressayer\n")
                else:
                     print("Veuillez choisir entre 1 et 2, s'il vous plait.")
        except:
            print("Entrée éronnée !!")
            print("Ressayer\n")
    
    if IE == 0:
        print("Est ce que l'effet a été publié une ou deux fois dans un journal scientifique ou dans une base de données "+
              "(avec sémiologie relativement différente ou publié avec un autre médicament de la même classe pharmacologique "+
              "et/ou chimique ou données purement expérimentales ?")
        print("1: Oui \n2: Non")
        ans=0
        while ans < 1 or ans > 2:
            try:
                ans=int(input("Entrez votre choix: "))
                if ans == 1:
                    IE="B2"
                    print("Le score d'imputabilité extrinsèque est donc: ", IE)
                elif ans ==2:
                    IE="B1"
                    print("L'effet n'a pas été publié conformément aux définitions de B3 ou B2 "+
                          "Le score d'imputabilité extrinsèque est donc: ", IE)
                else:
                    print("Veuillez choisir entre 1 et 2, s'il vous plait.")
            except:
                print("Entrée éronnée !!")
                print("Ressayer\n")
    return IE