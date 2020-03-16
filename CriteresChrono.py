import json
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
    
if __name__ == '__main__':

    path = 'dataa.json'
    
    with open(path, 'r') as f:
        data = f.read()
    obj = json.loads(data)

    print(obj)

    print(CriteresChronologiques(obj))




