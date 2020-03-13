import datetime

datetimeFormat = "%Y-%m-%d %H:%M"
# en cas d'une bug dans %d   
def parametreA(DAEI, DEM):
    difference = datetime.datetime.strptime(DAEI, datetimeFormat) - datetime.datetime.strptime(DEM, datetimeFormat)
    return difference

def parametreB(DDMT, DEM):
    difference = datetime.datetime.strptime(DDMT, datetimeFormat) - datetime.datetime.strptime(DEM, datetimeFormat)
    return difference



















