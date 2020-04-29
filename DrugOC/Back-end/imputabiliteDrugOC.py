import ScoreInformativite
import ScoreImputabilite
import CriteresChrono
import CriteresSemio
import Parser 

def imputabiliteProcess(data_json):

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
        
        if Parser.ansm_parser(data_json["medicament"][i]["DCI"], data_json["effetIndiserable"][j]["name"]):
            scoreExtrinseque = "B4"
            
        elif Parser.sider_parser(data_json["medicament"][i]["DCI"], data_json["effetIndiserable"][j]["name"]):
            scoreExtrinseque = "B3" 

        elif Parser.pub_med_parser(data_json["medicament"][i]["DCI"], data_json["effetIndiserable"][j]["name"]):
           scoreExtrinseque = "B2"
        
        else:
            scoreExtrinseque = "B1"

        results.append(
            {
               "interaction" : "Imputabilité entre le médicament: "+ data_json["medicament"][i]["DCI"] + " et l'effet indisérable: " + data_json["effetIndiserable"][j]["name"],
               "delaiA" : "Le délai du paramètre A est: " + str(delaiA),
               "delaiB" : "Le délai du paramètre B est: " + str(delaiB),
               "scoreInformativite" : "Le score informativité est: " + SI,
               "criteresChronologiques" : scoreCriteresChrono,
               "criteresSemiologiques" : scoreCriteresSemio,
               "scoreDeLimputabiliteIntrinseque" : scoreIntrinseque,
               "scoreDeLimputabiliteExtrinseque" : scoreExtrinseque
            }
        )

  return results