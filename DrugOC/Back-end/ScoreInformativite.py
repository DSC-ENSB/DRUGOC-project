import Date

def daysToJours(date):
    
    newDate = str(date)
    if newDate[0] == '1' and newDate[1] == ' ':
        return newDate.replace('day', 'jour')
    
    return newDate.replace('days', 'jours')

def ScoreInformativite(DAEI, DDMT, DEM):
    
    delaiA = Date.parametreA(DAEI, DEM) if DAEI else 0
    delaiB = Date.parametreB(DDMT, DEM) if DDMT else 0
    
    if (DAEI and DDMT):
        SI = "NI2"

    elif (DAEI or DDMT):
        SI = "NI1"

    else:
        SI = "NIO"
    
    newDelaiA = daysToJours(delaiA)
    newDelaiB = daysToJours(delaiB)
        
    return (newDelaiA, newDelaiB, SI)