from pprint import pprint
# fonction utilisant comme input combien il assigne a chaque depenses
def happyness(nourriture,loyer,internet,electricite,cinema,jeu_video,restaurant,f1,economies=0,happy=100,mois=1):
    revenu=100
    mois=+1
    depense_nec = nourriture + loyer + internet + electricite
    
   
    depense_fun= cinema + jeu_video + restaurant + f1
   
    
    total= depense_fun + depense_nec
    r_dep_fun=25 - depense_fun +20
    r_dep_nec=abs(75- int(depense_nec))
    
    happy=happy-r_dep_nec-r_dep_fun
    economies= int(economies) + int(revenu) - int(total)
    
    # print("nourriture=",nourriture,"revenu=",revenu,"total=", total,"depenses_fun=",depense_fun,"depense_nec=", depense_nec , "economies=", economies,"happy=",happy,"mois=",mois)
    return economies,happy,mois

if __name__ == "__main__":
    # execute only if run as a script
    happyness()

# happyness(10,30,5,5,4,2,9,15)

