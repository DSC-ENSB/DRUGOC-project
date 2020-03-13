#import json
#import sys  

def CriteresChronologiques(obj): 
    
    #path = sys.argv[1]    
    #with open(path, 'r') as jsonFile:
    #    data = jsonFile.read()
    #obj = json.loads(data)
    
    DAEI = obj["delaiDapparitionCritereChrono"] 
   
    EEI = obj["evolutionDeffet"]
   
    R = obj["reAdministration"]

    CC = ""
    
    #DAEI, EEI, R sont obtenus à partir json file
    
    if EEI == 0:
        #print("Evolution de l'effet: <<Suggestive>>") 
        # Evolution de l'effet: <<Suggestive>> est un message  dans l'interface
        EEI = 1
   
    elif EEI > 0 and EEI < 6: 
        #print("Evolution de l'effet: <<Non concluante>>")
        EEI = 2
   
    elif EEI == 6 or EEI == 7:
        #print("Evolution de l'effet: <<Non suggestive>>")
        EEI = 3
   
    if DAEI == 1:
   
        if R == 1:
            CC = "C3" if EEI != 3 else "C1"
   
        elif R == 2:
            if EEI == 1:
                CC="C3"
   
            elif EEI == 2:
                CC="C2"
   
            elif EEI == 3:
                CC="C1"
   
        elif R == 3:
            CC="C1"
   
    elif DAEI == 2:
        if R == 1:
            CC = "C3" if EEI != 3 else "C1"    
   
        elif R == 2:
            CC = "C2" if EEI == 1 else "C1"
   
        elif R == 3:
            CC="C1"
   
    elif DAEI == 3:
        CC = "C0" if EEI != 3 else "C1"
   
    return CC
    







"""

    print("\n<__________________________Critères chronologiques__________________________>")
    DAEI=0
    print("Délai d'apparition de l'effet indésirable: \n1: Suggestif \n2: Compatible \n3: Incompatible")
    try:
        while DAEI < 1 or DAEI > 3:
            DAEI=int(input("Entrez votre choix: "))
            if DAEI < 1 or DAEI > 3:
                print("Veuillez choisir de 1 à 3, s'il vous plait.")
    except:
        print("Entrée éronnée !!")
        print("Ressayer\n")
        
    print("\nEvolution de l'effet: ")
    print("1: Régression de l'effet à l'arrêt du médicament avec ou sans traitement symptomatique " +
          "(avec recul suffisant et en prenant en compte les caractéristiques pharmacocinétiques ou pharmacodynamiques du médicament) "+
          "ou lors de la diminution de posologie pour un effet dose-dependant.")
    print("2: Lésions irréversibles ou décès.")                     
    print("3: Evolution inconnue.")
    print("4: Recul insuffisant après l'arrêt du médicament.")
    print("5: Persistance de l'effet et médicament non arrêté.")
    print("6: Persistance de l'effet après administration unique.")
    print("7: Absence de régression de manifesations de type réversible malgré l'arrêt avec recul suffisant.")
    print("8: Régression complète malgré la poursuite du médicament.")
    
    EEI=0
    
    while EEI < 1 or EEI > 8:
        try:
            EEI=int(input("Entrez votre choix: "))
            if EEI == 1:
                print("Evolution de l'effet: <<Suggestive>>")
            elif EEI > 1 and EEI < 7:
                print("Evolution de l'effet: <<Non concluante>>")
                EEI = 2
            elif EEI == 7 or EEI == 8:
                print("Evolution de l'effet: <<Non suggestive>>")
                EEI = 3
            else:
                print("Veuillez choisir de 1 à 8, s'il vous plait.")
        except:
            print("Entrée éronnée !!")
            print("Ressayer\n")

    print("\nRéadministration du médicament: \n1: R(+) \n2: R(0) \n3: R(-)")
    
    R=0
    while R < 1 or R > 3:
        try:
            R=int(input("Entrez votre choix: "))
            if R < 1 or R > 3:
                print("Veuillez choisir de 1 à 3, s'il vous plait.")
        except:
            print("Entrée éronnée !!")
            print("Ressayer\n")
"""
 