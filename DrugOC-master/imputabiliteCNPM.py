import ScoreInformativite
import ScoreImputabilite
import CriteresChrono
import CriteresSemio
import Parser 

def imputabiliteProcess(data_json):
    print(data_json)
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
                   "interaction" : "imputabilite entre le medicament Num "+ str(i+1) + " et l'effet indiserable Num " + str(j+1),
                   "delaiA" : delaiA,
                   "delaiB" : delaiB,
                   "scoreInformativite" : SI,
                   "criteresChronologiques" : scoreCriteresChrono,
                   "criteresSemiologiques" : scoreCriteresSemio,
                   "scoreDeLimputabiliteIntrinseque" : scoreIntrinseque,
                   "scoreDeLimputabiliteExtrinseque" : scoreExtrinseque
                }
            )

    return results