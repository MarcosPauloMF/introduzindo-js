var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente")

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i]
            var tdNome = paciente.querySelector(".info-nome")   //buscando nome de paciente dentro de td em html
            var nome = tdNome.textContent
            var expressao = new RegExp(this.value,"i")
            if( !expressao.test(nome)){
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel")
            }
        }
   } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

})

/* var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        //nesse if eu já resolvo os problemas.
        if (nome.toLowerCase() != this.value.toLowerCase() && this.value.length > 0) {
            paciente.classList.add('invisivel');
        } else {
            paciente.classList.remove('invisivel');
        }
    }
}); */