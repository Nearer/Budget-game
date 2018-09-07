// Iterates months

function  noMonth(){

    var count = localStorage.getItem("count")==null?1:localStorage.getItem("count");
    count=Number(count)+1;
    localStorage.setItem("count", count);
    document.getElementById('month').innerHTML = count-1;
  }
 
window.onload = function(){
    // CALL FUNTION TO ITERATE MONTHS
    noMonth()
    
    
    // SHOW MODAL ON THE FIRST MONTH
    if(localStorage.getItem("count") -1 == 1 ){
        $('#myModal').modal('show');
    }
    
}; 

// Modal

// show modal

