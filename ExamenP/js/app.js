function formula() {
    //Variables
    var a,b,c,total1,total2, textoa,textob;

    //Asignando a, b y c
    a=document.getElementById("x2").value;
    b=document.getElementById("x").value;
    c=document.getElementById("c").value;

    //Formulas empleadas - Inicio
    total2=((parseFloat(-b))+Math.pow(((Math.pow(parseFloat(b),2))-(4*parseFloat(a)*parseFloat(c))),(1/2)))/(2*parseFloat(a));
    total1=((parseFloat(-b))-Math.pow(((Math.pow(parseFloat(b),2))-(4*parseFloat(a)*parseFloat(c))),(1/2)))/(2*parseFloat(a));
    // FOrmulas empleadas - Fin

    //Función de la Formula
    if(isNaN(a)||isNaN(b)||isNaN(c)){
        textoa="El numero que ingreso es incorrecto"
    }else{
        
        textoa="X1: " +total1;
        textob="X2: "+total2;
    }

    //Impreción de datos
    document.getElementById("totala").innerHTML=textoa;
    document.getElementById("totalb").innerHTML=textob;
}