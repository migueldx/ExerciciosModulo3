Utilitaria = function(){}

Utilitaria.prototype.juntarNome = function(){
    nome = document.getElementById("nome").value;
    sobrenome = document.getElementById("sobrenome").value;

    nomeCompleto = nome + " " + sobrenome;

    window.alert("Nome Completo = " + nomeCompleto);
}

u = new Utilitaria();