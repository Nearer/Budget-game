from flask import Flask, render_template, request, redirect, jsonify, url_for, make_response
import sim

app = Flask(__name__)






@app.route('/',methods = ['GET', 'POST'])
@app.route('/budget',methods = ['GET', 'POST'])
def budget():

     if request.method == 'POST':

        # Inputs from a submission 
        nourriture = int(request.form['Nourriture'])
        loyer = int(request.form['Loyer'])
        internet = int(request.form['Internet'])
        electricite = int(request.form['Electricite'])
        cinema = int(request.form['Cinema'])
        jeux_videos = int(request.form['Jeux_videos'])
        restaurant = int(request.form['Restaurant'])
        f1 = int(request.form['F1'])
     
     
     
        
        

        # call the simulation function 
        economies,happy,mois = sim.happyness(nourriture,loyer,internet,electricite,cinema,jeux_videos,restaurant,f1)

    # Initial values
     mois_defaut=1
     happy_defaut=100
     economies_defaut=0
    

     if  'mois' in locals():
         mois_defaut=mois
     if 'happy' in locals():
         happy_defaut=happy
     if 'economies' in locals():
         economies_defaut=economies







     return render_template('index.html',economies=economies_defaut,mois=mois_defaut,happy=happy_defaut)






if __name__ == '__main__':
    app.debug = True
    app.run()