import datetime

datetimeFormat = '%Y-%m-%d %H:%M'
# en cas d'une bug dans %d   
def parametreA(DAEI, DEM):
    difference = datetime.datetime.strptime(DAEI, datetimeFormat]) - datetime.datetime.strptime(DEM, datetimeFormat])
    return difference

def parametreB(DDMT, DEM):
    difference = datetime.datetime.strptime(DDMT, datetimeFormat]) - datetime.datetime.strptime(DEM, datetimeFormat])
    return difference
 



"""
def DateA():
    
    print("\nVeuillez introduire la date d'apparition de l'effet indésirable: ")
    print("\nYYYY-MM-DD H:M ")
    an=0
    mois=0
    jours=0
    heure=-1
    minutes=-1
    try:
        while an < 1000 or an > 9999:
            AnneeApparition=input("YYYY: ")
            an=int(AnneeApparition)
        while mois < 1 or mois > 12:
            MoisApparition=input("MM: ")
            mois=int(MoisApparition)
        while jours < 1 or jours > 31:
            JoursApparition=input("DD: ")
            jours=int(JoursApparition)
        while heure < 0 or heure > 24:
            HeureApparition=input("H: ")
            heure=int(HeureApparition)
        while minutes < 0 or minutes > 59:
            MinuteApparition=input("M: ")
            minutes=int(MinuteApparition)
    except:
        print("Entrée éronnée !!")
        print("Ressayer\n")
        
    Date1=str(AnneeApparition+"-"+MoisApparition+"-"+JoursApparition+" "+HeureApparition+":"+MinuteApparition)
    print("\nVeuillez introduire la date d'exposition au médicament: ")
    print("\nYYYY-MM-DD-H-M: ")
    an=0
    mois=0
    jours=0
    heure=-1
    minutes=-1
    try:
        while an < 1000 or an > 9999:
            AnneeExposition=input("YYYY: ")
            an=int(AnneeExposition)
        while mois < 1 or mois > 12:
            MoisExposition=input("MM: ")
            mois=int(MoisExposition)
        while jours < 1 or jours > 31:
            JoursExposition=input("DD: ")
            jours=int(JoursExposition)
        while heure < 0 or heure > 23:
            HeureExposition=input("H: ")
            heure=int(HeureExposition)
        while minutes < 0 or minutes > 59:
            MinuteExposition=input("M: ")
            minutes=int(MinuteExposition)
    except:
        print("Entrée éronnée !!")
        print("Ressayer\n")
        
    Date2=str(AnneeExposition+"-"+MoisExposition+"-"+JoursExposition+" "+HeureExposition+":"+MinuteExposition)
    diff = datetime.datetime.strptime(Date1, datetimeFormat)- datetime.datetime.strptime(Date2, datetimeFormat)
    print("\nJours:", diff.days)
    print("Heures:", int(diff.seconds/3600))
    print("Minutes:", int(((diff.seconds/3600-int((diff.seconds/3600)))*60)))
    return diff

def DateB():
    datetimeFormat = '%Y-%m-%d %H:%M'
    print("\nVeuillez introduire la date du début de traitement: ")
    print("\nYYYY-MM-DD H:M ")
    an=0
    mois=0
    jours=0
    heure=-1
    minutes=-1
    try:
        while an < 1000 or an > 9999:
            AnneeApparition=input("YYYY: ")
            an=int(AnneeApparition)
        while mois < 1 or mois > 12:
            MoisApparition=input("MM: ")
            mois=int(MoisApparition)
        while jours < 1 or jours > 31:
            JoursApparition=input("DD: ")
            jours=int(JoursApparition)
        while heure < 0 or heure > 24:
            HeureApparition=input("H: ")
            heure=int(HeureApparition)
        while minutes < 0 or minutes > 59:
            MinuteApparition=input("M: ")
            minutes=int(MinuteApparition)
    except:
        print("Entrée éronnée !!")
        print("Ressayer\n")
        
    Date1=str(AnneeApparition+"-"+MoisApparition+"-"+JoursApparition+" "+HeureApparition+":"+MinuteApparition)
    print("\nVeuillez introduire la date d'arrêt ou de modification du traitement: ")
    print("\nYYYY-MM-DD-H-M: ")
    an=0
    mois=0
    jours=0
    heure=-1
    minutes=-1
    try:
        while an < 1000 or an > 9999:
            AnneeExposition=input("YYYY: ")
            an=int(AnneeExposition)
        while mois < 1 or mois > 12:
            MoisExposition=input("MM: ")
            mois=int(MoisExposition)
        while jours < 1 or jours > 31:
            JoursExposition=input("DD: ")
            jours=int(JoursExposition)
        while heure < 0 or heure > 23:
            HeureExposition=input("H: ")
            heure=int(HeureExposition)
        while minutes < 0 or minutes > 59:
            MinuteExposition=input("M: ")
            minutes=int(MinuteExposition)
    except:
        print("Entrée éronnée !!")
        print("Ressayer\n")
    Date2=str(AnneeExposition+"-"+MoisExposition+"-"+JoursExposition+" "+HeureExposition+":"+MinuteExposition)
    diff = datetime.datetime.strptime(Date2, datetimeFormat)- datetime.datetime.strptime(Date1, datetimeFormat)
    print("\nJours:", diff.days)
    print("Heures:", int(diff.seconds/3600))
    print("Minutes:", int(((diff.seconds/3600-int((diff.seconds/3600)))*60)))
    return diff"""