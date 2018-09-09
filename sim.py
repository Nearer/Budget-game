from pprint import pprint
import sqlite3
conn = sqlite3.connect('budget.db')
# fonction utilisant comme input combien il assigne a chaque depenses
def happyness(nourriture,loyer,internet,electricite,cinema,jeu_video,restaurant,f1,economies=0,happy=100,mois=1):
    
    prix=(10,30,5,5,4,2,9,15)

    nourriture*=prix[0]
    loyer*=prix[1]
    internet*=prix[2]
    electricite*=prix[3]
    cinema*=prix[4]
    jeu_video*=prix[5]
    restaurant*=prix[6]
    f1*=prix[7]



    
    revenu=100
    mois=+1
    depense_nec = nourriture + loyer + internet + electricite
    
   
    depense_fun= cinema + jeu_video + restaurant + f1
   
    
    total= depense_fun + depense_nec
    r_dep_fun= 30 - depense_fun
    r_dep_nec= 50 - depense_nec
    
    
    economies= int(economies) + int(revenu) - int(total)
    dette=0
    if economies < 0:
         dette=abs(economies)
         economies=0
    
    if total <= 80:    
        happy = happy - r_dep_nec - int( r_dep_fun) + 0.1*economies
    
    if total > 80:
        happy = happy - r_dep_fun - (3*dette) -20

    happy =int(happy)
    
    print("nourriture=",nourriture,"revenu=",revenu,"total=", total,"depenses_fun=",depense_fun,"depense_nec=", depense_nec , "economies=", economies,"happy=",happy,"dette=",dette)
    return economies,happy,dette

if __name__ == "__main__":
    # execute only if run as a script
    happyness(1,1,0,1,2,2,1,1)

