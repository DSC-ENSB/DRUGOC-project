import Date

def ScoreInformativite(DAEI, DDMT, DEM):
    if DAEI: 
        delaiA = Date.parametreA(DAEI, DEM)
        #delaiA en jours delaiA.days
        #Si delaiA est négatif criterechrono = C0 
    else: 
        delaiA = 0
        
    if DDMT:
        delaiB = Date.parametreB(DDMT, DEM)
        #delaiB en jours delaiB.days
    else: 
        delaiB = 0

    if (DAEI and DDMT):
        SI = "NI2"
    elif (DAEI or DDMT):
        SI = "NI1"
    else:
        SI = "NIO"
    return (delaiA, delaiB, SI)











