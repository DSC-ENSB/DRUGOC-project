def criteresSemiologiques(medicament, obj):

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