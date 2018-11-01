

// keep track of current month
function  noMonth(){

    let count = sessionStorage.getItem("count")==null?0:sessionStorage.getItem("count");
    count=Number(count)+1;
    sessionStorage.setItem("count", count);
    document.getElementById('month').innerHTML = count;
}

// create random event
function valeur_a(){
    let count = parseInt(sessionStorage.getItem("count")==null?0:sessionStorage.getItem("count"),10);
    if (count === 1){
    var x_var = Math.floor(Math.random() * 6) + 1;
    sessionStorage.setItem("x_var",x_var );
    }
}






// Evenements aleatoire modifiant le salaire disponible
function e_salary(){
    // get random value
    var x_var = parseInt(sessionStorage.getItem("x_var"),10);
    var count = parseInt(sessionStorage.getItem("count")==null?0:sessionStorage.getItem("count"),10);
    if (count === x_var){
        var y_var = Math.floor(Math.random() * 5) + 1;
        if (y_var > 3){
            // Malade 50$ neccessaire
            return   50;
        
        }else if(y_var < 3){
 
            return   -50;
        }else{
            return   0;
        }
    }else{
        return 0;
    }
};

// Evenements aleatoire affichant le modal
function showModals(){
    // get random value
    var x_var = parseInt(sessionStorage.getItem("x_var"),10);
    var count = parseInt(sessionStorage.getItem("count")==null?0:sessionStorage.getItem("count"),10);
    if (count === x_var){
        var y_var = Math.floor(Math.random() * 5) + 1;
        if (y_var > 3){
            // Malade 50$ neccessaire
            $('#myModal').modal('show');
            sessionStorage.setItem("revenu", revenu - 50);
        
        }else if(y_var < 3){
            $('#myModal2').modal('show');
            sessionStorage.setItem("revenu", revenu + 50);    
        
        }else{
           
        }
    }else{
       
    }
};


// assign sessionStorage value for economies, dette, happy
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
        revenu = Number(sessionStorage.getItem("revenu")) ;
       } else {
        revenu = 100;
       }

    document.getElementById('economies').innerHTML = economies + '$';
    document.getElementById('dette').innerHTML = dette + '$';
    document.getElementById('happy').innerHTML = happy + '%';
    document.getElementById('revenu').innerHTML = revenu + '$';
}

// Clear radio buttons
function clearRadioButtons(name){
 var radioButtonArray = document.getElementsByName(name);

 for (var i=0; i<radioButtonArray.length; i++){
  var radioButton = radioButtonArray[i];
  radioButton.checked = false;
 }
}




// Event Listeners
document.getElementById('budget-form').addEventListener('submit',
    function(e){
        // Get form values
        var Nourriture = Number(document.querySelector('input[name="Nourriture"]:checked').value);
        var Loyer = Number(document.querySelector('input[name="Loyer"]:checked').value);
        var Internet = Number(document.querySelector('input[name="Internet"]:checked').value);
        var Electricite =Number(document.querySelector('input[name="Electricite"]:checked').value);
        var Cinema = Number(document.querySelector('input[name="Cinema"]:checked').value);
        var Jeux_videos = Number( document.querySelector('input[name="Jeux_videos"]:checked').value);
        var Restaurant = Number(document.querySelector('input[name="Restaurant"]:checked').value);
        var F1 = Number( document.querySelector('input[name="F1"]:checked').value); 
        
        //Get random month value for random event
       

        // Compute cost of each item
        Nourriture*=10;
        Loyer*=30;
        Internet*=5;
        Electricite*=5;
        Cinema*=4;
        Jeux_videos*=2;
        Restaurant*=9;
        F1*=15;
        // Sum values according to their type
        var depense_nec =  Nourriture + Loyer + Internet + Electricite;
        var depense_fun= Cinema + Jeux_videos + Restaurant + F1;
        var total = depense_fun + depense_nec;
        var r_dep_fun= 30 - depense_fun;
        var r_dep_nec= 50 - depense_nec;


        economies = economies + revenu - total - dette ;

        if (economies < 0){
            dette=Math.abs(economies);
            economies=0;
        } else {
            dette = 0;
        }

        if (total < 80){
            if(happy == 100){    
                happy = happy - 2*r_dep_nec - r_dep_fun + 0.3*economies;
            }else if(happy < 100 ){
                happy = happy - 1.5*r_dep_nec -  r_dep_fun + 0.5 * economies ;
            }else{
                happy = happy - r_dep_nec -  r_dep_fun - 0.5*dette;
            }
        }else if (total > 80){
            if (happy ==100){
                happy = happy - r_dep_fun - dette + economies;
            }else if(happy < 100){
                happy = happy - 0.3*(100 - happy) - 0.5*dette + 0.3 * economies;
            }else{
                happy = happy - (happy-100) - 20 + 0.3*economies;
            }
        }else{
            if(happy == 100){    
                happy = happy - 10 +0.1*economies;
            }else if(happy < 100 ){
                happy = happy  + 0.5 * economies ;
            }else{
                if (dette > 0 ){
                    happy = happy - 0.5*dette;
                }else{
                    happy = happy - 20 +0.5*economies;

                }
            }
           
        }

        // if(happy>100){happy=100;}
        happy = Math.floor(happy);
        if(happy<0){happy=0};
        
        revenu =100;

        
        // Assign new values to session storage
        sessionStorage.setItem("economies", economies);
        sessionStorage.setItem("dette", dette);
        sessionStorage.setItem("happy", happy);
        sessionStorage.setItem("revenu", revenu);



        // CALL FUNTION TO ITERATE MONTHS
        noMonth();
        // create random value
        valeur_a();
        // create random event
        // random();
        // assign sessionStorage value for economies, dette, happy
        // valeur_i();

        // clearAllRadios();
        var Depenses = ['Nourriture','Loyer','Internet','Electricite','Cinema','Jeux_videos','Restaurant','F1'];
        
        Depenses.forEach(depense => {
            clearRadioButtons(depense);
        });

        showModals();
        
        valeur_i();

        e.preventDefault();
    });



document.querySelector('#calculatorButton').addEventListener('click',
function(e){


    
    
    // Get form values
    var Nourriture = Number(document.querySelector('input[name="Nourriture"]:checked').value);
    var Loyer = Number(document.querySelector('input[name="Loyer"]:checked').value);
    var Internet = Number(document.querySelector('input[name="Internet"]:checked').value);
    var Electricite =Number(document.querySelector('input[name="Electricite"]:checked').value);
    var Cinema = Number(document.querySelector('input[name="Cinema"]:checked').value);
    var Jeux_videos = Number( document.querySelector('input[name="Jeux_videos"]:checked').value);
    var Restaurant = Number(document.querySelector('input[name="Restaurant"]:checked').value);
    var F1 = Number( document.querySelector('input[name="F1"]:checked').value); 

    // Compute cost of each item
    Nourriture*=10;
    Loyer*=30;
    Internet*=5;
    Electricite*=5;
    Cinema*=4;
    Jeux_videos*=2;
    Restaurant*=9;
    F1*=15;
    // Sum values according to their type
    var depense_nec =  Nourriture + Loyer + Internet + Electricite;
    var depense_fun= Cinema + Jeux_videos + Restaurant + F1;
    var total = depense_fun + depense_nec;

    document.getElementById('total').innerHTML = total + '$';

    
});

// compute expenses each time mouse clicked on form
// document.querySelector('#budget-form').addEventListener('click',
// function(e){


//     console.log('hello');
// });



// Page firt load
window.onload=(function(event){
    // assign sessionStorage value for economies, dette, happy    
    valeur_i();
    // initialize month
    noMonth();
    // initialize random event 
    valeur_a();


});







