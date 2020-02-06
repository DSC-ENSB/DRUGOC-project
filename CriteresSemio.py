import MeSH
import DrugBank
import sys, json

def CritèresSémiologiques(medicament):
    print("\n<__________________________Critères sémiologiques__________________________>")
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
            print("Ressayer\n")
    # Coté base de données 
    
    json_path = sys.argv[1]
    
    with open(json_path, 'r') as myFile:
        data = myFile.read()

    obj = json.loads(data)
    
    SCPC = obj["critereSemiologiqueCliniqueOuParaclinique"]
    ACNM = obj["autreCauseNonMedicamenteuse"]
    EC = obj["examenComplementaire"]

    if SCPC == 1:
        if L != 3:
            if ACNM != 3:
                CS="S3"
            else:
                CS="S2"
        else:
            if ACNM == 1:
                CS="S2"
            else:
                CS="S1"
    elif SCPC == 2:
        if L == 1:
            if ACNM != 3:
                CS="S3"
            else:
                CS="S2"
        elif L == 2:
            if ACNM == 1:
                CS="S3"
            elif ACNM == 2:
                CS="S2"
            else:
                CS="S1"
        else:
            CS="S1"
    else:
        if L == 1:
            if ACNM != 3:
                CS="S3"
            else:
                CS="S1"
        elif L == 2:
            if ACNM != 1:
                CS="S1"
            else:
                CS="S2"
        else:
            if ACNM != 3:
                CS="S1"
            else:
                CS="S0"

    return CS
    
    
    
    
    
    
    
   """ 
    print("\nSémiologie clinique ou paraclinique: ")
    print("1: Evocatrice du role de ce médicament ET facteur favorisant bien validé du couple EI/M")
    print("2: Evocatrice du role de ce médicament OU facteur favorisant bien validé du couple EI/M")
    print("3: Ni sémiologie évocatrice du role de ce médicament ni facteur favorisant bien validé")
    SCPC=0
    
    while SCPC < 1 or SCPC > 3:
        try:
            SCPC=int(input("Entrez votre choix: "))
            if SCPC < 1 or SCPC > 3:
                print("Veuillez choisir de 1 à 3, s'il vous plait.")
        except:
            print("Entrée éronnée !!")
            print("Ressayer\n")
            
    print("\nAutre cause non médicamenteuse: ")
    print("1: Absente après bilan approprié")
    print("2: Non recherchée ou bilan incomplet")
    print("3: Présente")
    ACNM=0
    while ACNM < 1 or ACNM > 3:
        try:
            ACNM=int(input("Entrez votre choix: "))
            if ACNM < 1 or ACNM > 3:
                print("Veuillez choisir de 1 à 3, s'il vous plait.")
        except:
            print("Entrée éronnée !!")
            print("Ressayer\n")
            
    print("\nExamen complémentaire spécifique fiable du couple EI/M ou réponse à un antidote spécifique")
    print("1: L(+) \n2: L(0) \n3: L(-)")
    L=0
    while L < 1 or L > 3:
        try:
            L=int(input("Entrez votre choix: "))
            if L < 1 or L > 3:
                print("Veuillez choisir de 1 à 3, s'il vous plait.")
        except:
            print("Entrée éronnée !!")
            print("Ressayer\n")
            
    if SCPC == 1:
        if L != 3:
            if ACNM != 3:
                CS="S3"
            else:
                CS="S2"
        else:
            if ACNM == 1:
                CS="S2"
            else:
                CS="S1"
    elif SCPC == 2:
        if L == 1:
            if ACNM != 3:
                CS="S3"
            else:
                CS="S2"
        elif L == 2:
            if ACNM == 1:
                CS="S3"
            elif ACNM == 2:
                CS="S2"
            else:
                CS="S1"
        else:
            CS="S1"
    else:
        if L == 1:
            if ACNM != 3:
                CS="S3"
            else:
                CS="S1"
        elif L == 2:
            if ACNM != 1:
                CS="S1"
            else:
                CS="S2"
        else:
            if ACNM != 3:
                CS="S1"
            else:
                CS="S0"
    print("Critères sémiologiques: ", CS)
    return CS
    """