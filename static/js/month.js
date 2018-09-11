


function  noMonth(){

    count = sessionStorage.getItem("count")==null?0:sessionStorage.getItem("count");
    count=Number(count)+1;
    sessionStorage.setItem("count", count);
    document.getElementById('month').innerHTML = count;
}

function valeur_a(){
    if (count == 1){
        var x_var = Math.floor(Math.random() * 6) + 1;
        sessionStorage.setItem("x_var",x_var );
    }
}


// Evenements aleatoire diminuant le salaire disponible
function random(){
    
    var x_var = Number(sessionStorage.getItem("x_var"));
    if (count == 2){

        // Malade 50$ neccessaire
        $('#myModal').modal('show');
        nonP = 50;
    
    }else{
        nonP =0;
    }
    
}

function valeur_i() {  

    if(sessionStorage.getItem("economies") !== null){
     economies = Number(sessionStorage.getItem("economies"));
    } else {
     economies = 0;
    }

    if(sessionStorage.getItem("dette") !== null){
     dette = Number(sessionStorage.getItem("dette"));
    } else {
     dette = 0;
    }

    if(sessionStorage.getItem("happy") !== null){
     happy = Number(sessionStorage.getItem("happy"));
    } else {
     happy = 100;
    }

    if(sessionStorage.getItem("revenu") !== null){
        revenu = Number(sessionStorage.getItem("revenu")) - nonP;
       } else {
        revenu = 100;
       }

    document.getElementById('economies').innerHTML = economies + '$';
    document.getElementById('dette').innerHTML = dette + '$';
    document.getElementById('happy').innerHTML = happy + '%';
    document.getElementById('revenu').innerHTML = revenu + '$';
}

// CODE FOR BUDGET COMPUTATION

function sim(){


    var Nourriture = Number(document.querySelector('input[name="Nourriture"]:checked').value);
    var Loyer = Number(document.querySelector('input[name="Loyer"]:checked').value);
    var Internet = Number(document.querySelector('input[name="Internet"]:checked').value);
    var Electricite =Number(document.querySelector('input[name="Electricite"]:checked').value);
    var Cinema = Number(document.querySelector('input[name="Cinema"]:checked').value);
    var Jeux_videos = Number( document.querySelector('input[name="Jeux_videos"]:checked').value);
    var Restaurant = Number(document.querySelector('input[name="Restaurant"]:checked').value);
    var F1 = Number( document.querySelector('input[name="F1"]:checked').value); 

    Nourriture*=10;
    Loyer*=30;
    Internet*=5;
    Electricite*=5
    Cinema*=4;
    Jeux_videos*=2;
    Restaurant*=9;
    F1*=15;



    

    var depense_nec =  Nourriture + Loyer + Internet + Electricite;


    var depense_fun= Cinema + Jeux_videos + Restaurant + F1;


    var total = depense_fun + depense_nec;

    var r_dep_fun= 30 - depense_fun;
    var r_dep_nec= 50 - depense_nec;


    economies = economies + revenu - total - dette;

    if (economies < 0){
        dette=Math.abs(economies);
        economies=0;
    } else {
        dette = 0;
    }

    if (total < 80){
        if(happy == 100){    
            happy = happy - 2*r_dep_nec - r_dep_fun;
        }else if(happy < 100 ){
            happy = happy - 1.5*r_dep_nec -  r_dep_fun + 0.5 * economies ;
        }else{
            happy = happy - r_dep_nec -  r_dep_fun - 0.5*dette;
        }
    }else if (total > 80){
        if (happy ==100){
            happy = happy - r_dep_fun - dette + economies;
        }else if(happy < 100){
            happy = happy - 0.3*(100 - happy) - 0.5*dette ;
        }else{
            happy = happy - (happy-100) - 20;
        }
    }else{
        if(happy == 100){    
            happy = happy - 10;
        }else if(happy < 100 ){
            happy = happy  + 0.5 * economies ;
        }else{
            if (dette > 0 ){
                happy = happy - 0.5*dette;
            }else{
                happy = happy - 20;

            }
        }
    }

    happy = Math.floor(happy);

    revenu =100;

    // if(happy>100){happy=100;}

    sessionStorage.setItem("economies", economies);
    sessionStorage.setItem("dette", dette);
    sessionStorage.setItem("happy", happy);
    sessionStorage.setItem("revenu", revenu);

}






window.onload = function(){
// CALL FUNTION TO ITERATE MONTHS
noMonth()
// create random value
valeur_a()
// create random event
random()
//  assign sessionStorage value for economies, dette, happy
valeur_i()

}; 

document.getElementById("myBtn").addEventListener("click", sim);

