
# fonction utilisant comme input combien il assigne a chaque depenses
def happyness(nourriture,loyer,internet,electricite,cinema,jeu_video,restaurant,f1,economies=0,happy=100,mois=1):
    revenu=100
    mois=+mois
    depense_nec=nourriture + loyer+internet+electricite
    depense_fun=cinema + jeu_video+restaurant+f1
    total=depense_fun + depense_nec
    happy=happy-abs(0.75*revenu-depense_nec)-(0.25*revenu-depense_fun)+20
    economies= economies + revenu - total
    print("revenu=",revenu,"total=", total,"economies=", economies,"happy=",happy,"mois=",mois)
    return economies,happy,mois



happyness(10,30,5,5,4,2,9,15)

