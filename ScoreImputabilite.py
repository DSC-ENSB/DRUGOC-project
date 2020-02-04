# -*- coding: utf-8 -*-
"""
Created on Wed Apr 10 17:10:11 2019

@author: Ala eddine
"""
import CriteresChrono
import CriteresSemio
#import traitementChronologique
import CritèresChronologiquesNonSpecifie

def ScoreImputabilite(medicament, EI):
    #Liste_EI=['atteintes hépatiques', 'neutropènie', 'thrombopènie', 'anémie hémolytique aiguë immuno-allergique', 'purpura vasculaire', 'phototoxicité médicamenteuse', 'photoallergie médicamenteuse', 'insuffisance rénale aiguë', 'pneumopathie interstitielle']
    #for i in range(0,len(Liste_EI)):
        #if EI == Liste_EI[i]:
            #if DélaiA == 0:
                #DAEI=CritèresChronologiquesNonSpecifie.CCNS(EI, DélaiA)
    Cc=CriteresChrono.CriteresChronologiques() # pourquoi l'effet indiserable est comme argument !?
    Cs=CriteresSemio.CritèresSémiologiques(medicament)
    Cs=str(Cs)
    Cc=str(Cc)
    SI=Cc+Cs
        
    if SI == "C1S1":
        score="I1"
    elif SI == "C1S2" or SI == "C2S1":
        score="I2"
    elif SI == "C2S2":
        score="I3"
    elif SI == "C1S3" or SI == "C3S1":
        score="I4"
    elif SI == "C2S3" or SI == "C3S2":
        score="I5"
    elif SI == "C3S3":
        score="I6"
    else:
        score="I0"
    
    return score