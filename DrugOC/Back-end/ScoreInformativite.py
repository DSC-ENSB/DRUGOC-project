import Date

def ScoreInformativite(DAEI, DDMT, DEM):
    
    delaiA = Date.parametreA(DAEI, DEM) if DAEI else 0
    delaiB = Date.parametreB(DDMT, DEM) if DDMT else 0
    
    if (DAEI and DDMT):
        SI = "NI2"

    elif (DAEI or DDMT):
        SI = "NI1"

    else:
        SI = "NIO"
        
    return (delaiA, delaiB, SI)