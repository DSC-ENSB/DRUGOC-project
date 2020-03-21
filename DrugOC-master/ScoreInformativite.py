import Date

def ScoreInformativite(DAEI, DDMT, DEM):
    if DAEI: 
        delaiA = Date.parametreA(DAEI, DEM)

    else: 
        delaiA = 0
        
    if DDMT:
        delaiB = Date.parametreB(DDMT, DEM)
        
    else: 
        delaiB = 0

    if (DAEI and DDMT):
        SI = "NI2"

    elif (DAEI or DDMT):
        SI = "NI1"

    else:
        SI = "NIO"
        
    return (delaiA, delaiB, SI)