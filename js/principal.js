var titulo = document.querySelector(".titulo")
titulo.textContent = "nutrição legal"

var paciente = document.querySelector("#primeiro-paciente")

var tdPeso = paciente.querySelector(".info-peso")
var peso = tdPeso.textContent

var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent

var tdImc = paciente.querySelector(".info-imc")


var pesoEhValido = true
var alturaEhValida = true

if (peso <= 0 || peso >= 1000){
    console.log("peso invalido")
    pesoEhValido = false
    tdImc.textContent = "peso inválido"
}


if (altura <= 0 || peso >= 4){
    console.log("altura invalido")
    alturaEhValida = false
    tdImc.textContent = "Altura invalida"
}


if (alturaEhValida && pesoEhValido)
var imc = peso / (altura * altura)

tdImc.textContent = imc


