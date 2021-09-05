function Calculadora(){
    a = document.getElementById("resultado");
    tipo = prompt("Qual o tipo de calculo?");
    valorA = prompt("Primeiro Valor:");
    valorB = prompt("Segundo Valor:");
    if(tipo == "+"){
        Total = parseInt(valorA) + parseInt(valorB);
        a.innerHTML = Total;
    }
    else if(tipo == "-"){
        Total = parseInt(valorA) - parseInt(valorB);
        a.innerHTML = Total;
    }else if(tipo == "*"){
        Total = parseInt(valorA) * parseInt(valorB);
        a.innerHTML = Total;
    }else if(tipo == "/"){
        Total = parseInt(valorA) / parseInt(valorB);
        a.innerHTML = Total;
    }
}