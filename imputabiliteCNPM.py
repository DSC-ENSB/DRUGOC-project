import ScoreInformativite
import ScoreImputabilite
import ImputabiliteExtrinseque
import Sauvegarde
#import sys  
#import json 

def imputabiliteProcess(data_json):

    #path_json = sys.argv[1]
    #path_json = "C:/Users/lenovo/Desktop/CNPM_OPT/data.json"
    
    #with open(data_json, 'r') as myFile:
    #    data = myFile.read()

    #obj = json.loads(data)

    results = []
    
    for i in range(data_json["medicament"][i]):
        
        for j in range(data_json["effetIndiserable"][j]):
             
            delaiA, delaiB, SI = ScoreInformativite.ScoreInformativite(
                data_json["medicament"][i]["dateDapparitionDeLeffetIndiserable"],
                data_json["medicament"][i]["dateDarretOuModificationDuTraitement"],
                data_json["medicament"][i]["dateDexpositionAuMedicament"]
            )
            
            scoreIntrinseque = ScoreImputabilite.ScoreImputabilite(
                data_json["medicament"][i]["DCI"], 
                data_json
            )

            scoreExtrinseque = ImputabiliteExtrinseque.imputabiliteExtrinseque()

            results.append(
                {
                   "delaiA" : delaiA,
                   "delaiB" : delaiB,
                   "scoreInformativite" : SI,
                   "scoreDeLimputabiliteIntrinseque" : scoreIntrinseque,
                   "scoreDeLimputabiliteExtrinseque" : scoreExtrinseque 
                }
            )
            # append le premier médicament avec l'ensemble des effets indisérables, ensuite le deuxième etc ...

    return results
 

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
    
#if __name__=='__main__':
#    Menu()