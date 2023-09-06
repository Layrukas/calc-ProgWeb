var numero;
var numero2;

function soma(){

    num1 =document.getElementById("num1").value;
    num2 =document.getElementById("num2").value;

    let resultado = Number(num1) + Number(num2);
    alert(resultado);
    document.getElementById("resultado").innerHTML = resultado;

}

function subtracao(){
    num1 =document.getElementById("num1").value;
    num2 =document.getElementById("num2").value;

    let resultado =Number(num1) - Number(num2);
    
    document.getElementById("resultado").innerHTML = resultado;
}

function divisao(){
    num1 =document.getElementById("num1").value;
    num2 =document.getElementById("num2").value;

    let resultado = Number(num1) + Number(num2);
    
    document.getElementById("resultado").innerHTML = resultado;
}

function multiplicacao(){
    num1 =document.getElementById("num1").value;
    num2 =document.getElementById("num2").value;
    let resultado = num1 * num2;
    document.getElementById("resultado").innerHTML = resultado;
}
