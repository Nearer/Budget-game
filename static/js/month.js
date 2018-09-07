// Iterates months

function  noMonth(){

    var count = localStorage.getItem("count")==null?1:localStorage.getItem("count");
    count=Number(count)+1;
    localStorage.setItem("count", count);
    document.getElementById('month').innerHTML = count-1;
  }
 
window.onload = function(){
    noMonth()
}; 