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
    
    
    var pesoEhValido = true
    var alturaEhValida = true
    
    if (peso <= 0 || peso >= 1000){
        console.log("peso invalido")
        pesoEhValido = false
        tdImc.textContent = "peso inválido"
        paciente.classList.add("paciente-invalido")
    }
    
    
    if (altura <= 0 || altura >= 4){
        console.log("altura invalido")
        alturaEhValida = false
        tdImc.textContent = "Altura invalida"
        paciente.classList.add("paciente-invalido")
    }
    
    
    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed(2)
    }
}


botaoAdicionar.addEventListener("click", function(){
    console.log("seu botao foi clicado")
})
