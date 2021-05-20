var titulo = document.querySelector(".titulo")
titulo.textContent = "nutrição legal"

var paciente = document.querySelectorAll(".paciente")
console.log(paciente)

for(var i = 0; i < paciente.length; i++){
    
    var paciente = paciente[1]

    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent
    
    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent
    
    var tdImc = paciente.querySelector(".info-imc")
    
    var alturaEhValida = validaAltura(altura)
    var pesoEhValido = validaPeso(peso)
    
    if (!pesoEhValido){
        console.log("peso invalido")
        pesoEhValido = false
        tdImc.textContent = "peso inválido"
        paciente.classList.add("paciente-invalido")
    }
    
    if (!alturaEhValida){
        console.log("altura invalido")
        alturaEhValida = false
        tdImc.textContent = "Altura invalida"
        paciente.classList.add("paciente-invalido")
    }
    
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaIMC(peso, altura)
        tdImc.textContent = imc
    }
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

function calculaIMC(peso, altura){
    var imc = 0

    imc = peso / (altura * altura)

    return imc.toFixed(2)
}
