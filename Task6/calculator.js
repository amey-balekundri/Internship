window.onload =function(){
    if (localStorage.length>0){
    for(i=1;i<=localStorage.length;i++){
        document.getElementById("hist").innerHTML+=localStorage[i] + "<br>" 
    }}
}

function valu(val) 
{ 
    document.getElementById("result").value+=val 
} 
      
function solve() 
{ 
    x = document.getElementById("result").value 
    y = eval(x) 
    document.getElementById("result").value = y 
        
    localStorage.setItem(localStorage.length+1,x +"="+ String(y))
    document.getElementById("hist").innerHTML+=localStorage.getItem(localStorage.length) + "<br>"
} 

function sqr(){
    x = document.getElementById("result").value
    y=x*x
    document.getElementById("result").value = y 

    localStorage.setItem(localStorage.length+1,x +"<sup>2</sup>" +"="+ String(y))
    document.getElementById("hist").innerHTML+=localStorage.getItem(localStorage.length) + "<br>"

}

function croot(){
    x = document.getElementById("result").value
    y=Math.cbrt(x)
    document.getElementById("result").value = y 

    localStorage.setItem(localStorage.length+1, "Cube root of " + x +"="+ String(y))
    document.getElementById("hist").innerHTML+=localStorage.getItem(localStorage.length) + "<br>"
}
       
function clr() 
{ 
    document.getElementById("result").value = "" 
} 
