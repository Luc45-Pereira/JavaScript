/*function Calculadora(){
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
}*/

function Calculadora(){
    tipo = document.getElementById("sinal");
    sinal = tipo.options[tipo.selectedIndex].value;
    a = document.getElementById("valor1");
    valorA = a.value;
    b = document.getElementById("valor2");
    valorB = b.value;
    console.log(sinal);
    if(sinal == "+"){
        Total = parseInt(valorA) + parseInt(valorB);
        alert("O resultado é: " + Total);
    }
    else if(sinal == "-"){
        Total = parseInt(valorA) - parseInt(valorB);
        alert("O resultado é: " + Total);
    }else if(sinal == "*"){
        Total = parseInt(valorA) * parseInt(valorB);
        alert("O resultado é: " + Total);
    }else if(sinal == "/"){
        Total = parseInt(valorA) / parseInt(valorB);
        alert("O resultado é: " + Total);
    }
}
