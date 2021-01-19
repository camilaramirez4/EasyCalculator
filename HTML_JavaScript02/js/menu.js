var btnMenu = document.getElementById('btn-menu'); //Guardamos el elemento btn-menu en la variable btnMenu
var nav = document.getElementById('nav'); //Guardamos el elemento nav en la variable nav

btnMenu.addEventListener('click', function(){ //Agregamos un evento de click al boton menu
    nav.classList.toggle('mostrar'); //Agregamos la clase mostrar a nav 
});

var res = document.getElementById('resultado');

function suma(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var resultado = parseInt(n1) + parseInt(n2) ;
    if(resultado < 0){
        document.getElementById('resultado').style.color = "#FF0000";
    }else{
        document.getElementById('resultado').style.color = "#000000";
    }
    document.getElementById('resultado').value= resultado;
}

function resta(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var resultado = parseInt(n1) - parseInt(n2) ;
    if(resultado < 0){
        document.getElementById('resultado').style.color = "#FF0000";
    }else{
        document.getElementById('resultado').style.color = "#000000";
    }
    document.getElementById('resultado').value= resultado;
}

function multi(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var resultado = parseInt(n1) * parseInt(n2) ;
    if(resultado < 0){
        document.getElementById('resultado').style.color = "#FF0000";
    }else{
        document.getElementById('resultado').style.color = "#000000";
    }
    document.getElementById('resultado').value= resultado;
}

function div(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var resultado = parseInt(n1) / parseInt(n2) ;
    if(resultado < 0){
        document.getElementById('resultado').style.color = "#FF0000";
    }else{
        document.getElementById('resultado').style.color = "#000000";
    }
    document.getElementById('resultado').value= resultado;
}