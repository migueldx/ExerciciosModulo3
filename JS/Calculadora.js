Calculadora = function(){}

Calculadora.prototype.somar = function(){
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    result = parseFloat(n1) + parseFloat(n2);

    window.alert("Resultado = " + result);
}

Calculadora.prototype.subtrair = function(){
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    result = parseFloat(n1) - parseFloat(n2);

    window.alert("Resultado = " + result);
}

Calculadora.prototype.multiplicar = function(){
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    result = parseFloat(n1) * parseFloat(n2);

    window.alert("Resultado = " + result);
}

Calculadora.prototype.dividir = function(){
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    result = parseFloat(n1) / parseFloat(n2);

    window.alert("Resultado = " + result);
}

calc = new Calculadora();