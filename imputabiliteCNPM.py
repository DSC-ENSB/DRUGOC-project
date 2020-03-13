import ScoreInformativite
import ScoreImputabilite
import CriteresChrono
import CriteresSemio
import Parser 
#import ImputabiliteExtrinseque
#import Sauvegarde
#import sys  
#import json 

def imputabiliteProcess(data_json):

    #path_json = sys.argv[1]
    #path_json = "C:/Users/lenovo/Desktop/CNPM_OPT/data.json"
    
    #with open(data_json, 'r') as myFile:
    #    data = myFile.read()

    #obj = json.loads(data)

    results = []
    
    for i in range(len(data_json["medicament"])):
        
        for j in range(len(data_json["effetIndiserable"])):
             
            delaiA, delaiB, SI = ScoreInformativite.ScoreInformativite(
                data_json["medicament"][i]["dateDapparitionDeLeffetIndiserable"],
                data_json["medicament"][i]["dateDarretOuModificationDuTraitement"],
                data_json["medicament"][i]["dateDexpositionAuMedicament"]
            )

            scoreCriteresChrono = CriteresChrono.CriteresChronologiques(data_json) 

            scoreCriteresSemio = CriteresSemio.criteresSemiologiques(data_json["medicament"][i]["DCI"], data_json )
            
            scoreIntrinseque = ScoreImputabilite.ScoreImputabilite(
                data_json["medicament"][i]["DCI"], 
                data_json
            )
            
            #criteres chrono + critères sémio 
            if Parser.ansm_parser(data_json["medicament"][i]["DCI"], data_json["effetIndiserable"][j]):
                scoreExtrinseque = "B4"
                
            elif Parser.sider_parser(data_json["medicament"][i]["DCI"], data_json["effetIndiserable"][j]):
                scoreExtrinseque = "B3" 

            elif Parser.pub_med_parser(data_json["medicament"][i]["DCI"], data_json["effetIndiserable"][j]):
               scoreExtrinseque = "B2"
            
            else:
                scoreExtrinseque = "B1"

            results.append(
                {
                   "interaction" : "imputabilité entre le médicament N° "+ str(j+1) + " et l'effet indisérable N° " + str(i+1),
                   "delaiA" : delaiA,
                   "delaiB" : delaiB,
                   "scoreInformativite" : SI,
                   "criteresChronologiques" : scoreCriteresChrono,
                   "criteresSemiologiques" : scoreCriteresSemio,
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