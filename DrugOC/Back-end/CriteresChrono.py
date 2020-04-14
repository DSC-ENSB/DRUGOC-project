def CriteresChronologiques(obj): 
     
    DAEI = obj["delaiDapparitionCritereChrono"] 
   
    EEI = obj["evolutionDeffet"]
   
    R = obj["reAdministration"]

    CC = ""
    
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