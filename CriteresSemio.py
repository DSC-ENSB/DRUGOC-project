import MeSH
import DrugBank
#import sys, json

def criteresSemiologiques(medicament, obj):
    """print("\n<__________________________Critères sémiologiques__________________________>")
    p=MeSH.MeSH(medicament)
    p=str(p)
    descr=medicament + ": " + p+"\n"
    print(descr)
    save=DrugBank.DrugBank(medicament)
    
    print("\n#################################################")
    print("Souhaitez vous enregistrer les informations sur le médicament sur disque ?")
    print("1: Oui \n2: Non")
    ans=0
    while ans < 1 or ans > 2:   
        try:
            ans=int(input("Entrez votre choix: "))
            if ans == 1:
                dossier=input("Veuillez introduire le chemin du dossier de sauvegrade: ")
                name=dossier+medicament+".txt"
                fichier=open(name, "w")
                fichier.write(descr)
                fichier.write(save)
                fichier.close()
            elif ans != 2:
                print("Veuillez choisir entre 1 et 2, s'il vous plait")
        except:
            print("Entrée éronnée !!")
            print("Ressayer\n")"""
    # Coté base de données 
    
    #json_path = sys.argv[1]
    
    #with open(json_path, 'r') as myFile:
    #    data = myFile.read()

    #obj = json.loads(data)
    
    SCPC = obj["critereSemiologiqueCliniqueOuParaclinique"]
    
    ACNM = obj["autreCauseNonMedicamenteuse"]
    
    EC = obj["examenComplementaire"]

    L = obj["autreCauseNonMedicamenteuse"]

    CS = ""

    if SCPC == 1:
        
        if L != 3:
            CS = "S3" if (ACNM != 3) else "S2"
        else:
            CS = "S2" if (ACNM == 1) else "S1"
    
    elif SCPC == 2:
        
        if L == 1:
            CS = "S3" if (ACNM != 1) else "S2"    
        elif L == 2:
            CS = "S3" if (ACNM == 1) else "S1"
            CS = "S2" if (ACNM == 2) else "S1"
        else:
            CS="S1"
    
    else:
        
        if L == 1:
            CS = "S3" if (ACNM != 3) else "S1"
        elif L == 2:
            CS = "S1" if (ACNM != 1) else "S2" 
        else:
            CS = "S1" if (ACNM != 3) else "S0" 
    
    return CS
