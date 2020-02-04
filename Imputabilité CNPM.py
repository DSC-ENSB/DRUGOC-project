import ScoreInformativite
import ScoreImputabilite
import ImputabiliteExtrinseque
import Sauvegarde
import sys  
import json 

def Menu():

    #path_json = sys.argv[1]
    path_json = "C:/Users/lenovo/Desktop/CNPM_OPT/data.json"
    
    with open(path_json, 'r') as myFile:
        data = myFile.read()
    
    obj = json.loads(data)
    
    for i in range(obj["medicament"][i]):
        for j in range(obj["effetIndiserable"][j]):
            #calcul du score d'informativité 
            delaiA, delaiB, SI = ScoreInformativite.ScoreInformativite(
                obj["medicament"][i]["dateDapparitionDeLeffetIndiserable"],
                obj["medicament"][i]["dateDarretOuModificationDuTraitement"],
                obj["medicament"][i]["dateDexpositionAuMedicament"]
            )
            score = ScoreImputabilite.ScoreImputabilite(obj["medicament"][i]["DCI"], obj["effetIndiserable"][j])



    #medicament=str(input("Veuillez introduire le médicament à imputer: "))
    #medicament=medicament.lower()
    #medicament=medicament.replace(str(medicament[0]),str(medicament[0]).capitalize())
    #EI=str(input("Veuillez introduire l'effet indésirable: "))
    #EI=EI.lower() 
    """SI, DélaiA, DélaiB =ScoreInformativite.ScoreInformativité() 
    print("Le score d'informativité est: ", SI)
    Score=ScoreImputabilite.ScoreImputabilité(medicament, EI)
    print("Le score d'imputabilité intrinsèque est: ", Score)
    IE=ImputabiliteExtrinseque.ImputabulitéExtrinsèque()
    Sauvegarde.Sauvegarde(medicament, EI, DélaiA, DélaiB, SI, Score, IE, nomM, prenomM, ageM)"""
    
if __name__=='__main__':
    Menu()