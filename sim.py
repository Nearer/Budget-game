
# fonction utilisant comme input combien il assigne a chaque depenses
def happyness(nourriture,loyer,internet,electricite,cinema,jeu_video,restaurant,f1,economies=0,happy=100,mois=1):
    revenu=100
    mois=+mois
    depense_nec = nourriture + loyer + internet + electricite
    depense_fun= cinema + jeu_video + restaurant + f1
    total= depense_fun + depense_nec
    r_dep_fun=(0.25*revenu-depense_fun)+20
    r_dep_nec=abs(0.75*revenu-depense_nec)
    
    happy=happy-r_dep_nec-r_dep_fun
    economies= economies + revenu - total
    # print("revenu=",revenu,"total=", total,"economies=", economies,"happy=",happy,"mois=",mois)
    return economies,happy,mois

if __name__ == "__main__":
    # execute only if run as a script
    happyness()

# happyness(10,30,5,5,4,2,9,15)

