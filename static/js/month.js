

function  noMonth(){

    var count = localStorage.getItem("count")==null?0:localStorage.getItem("count");
    count=Number(count)+1;
    localStorage.setItem("count", count);
    document.getElementById('month').innerHTML = count;
    }

function valeur_i() {  

    if(localStorage.getItem("economies") !== null){
     economies = Number(localStorage.getItem("economies"));
    } else {
     economies = 0;
    }

    if(localStorage.getItem("dette") !== null){
     dette = Number(localStorage.getItem("dette"));
    } else {
     dette = 0;
    }

    if(localStorage.getItem("happy") !== null){
     happy = Number(localStorage.getItem("happy"));
    } else {
     happy = 100;
    }

    document.getElementById('economies').innerHTML = economies;
    document.getElementById('dette').innerHTML = dette;
    document.getElementById('happy').innerHTML = happy + '%';
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



    var revenu = 100;

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

    if (total <= 80){
        if(happy == 100){    
            happy = happy - r_dep_nec -  r_dep_fun ;
        }else{
            happy = happy - r_dep_nec -  r_dep_fun + 0.1 * economies ;
        }
    }
    if (total > 80){
        happy = happy - r_dep_fun - 2*dette -20;
    }

    if(happy>100){happy=100;}

    localStorage.setItem("economies", economies);
    localStorage.setItem("dette", dette);
    localStorage.setItem("happy", happy);

    }






window.onload = function(){
// CALL FUNTION TO ITERATE MONTHS
noMonth()
//  assign localstorage value for economies, dette, happy
valeur_i()

}; 

document.getElementById("myBtn").addEventListener("click", sim);

