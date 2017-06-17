 CalculoFinanceiro =  function(){}

    CalculoFinanceiro.prototype.calculoJuros = function (){
        valor = document.getElementById("valor").value;
        porc = document.getElementById("porc").value;

        result = valor * (porc/100);
        
        window.alert(result);
        
    }

    CalculoFinanceiro.prototype.calculoSalario = function(){
        sal = document.getElementById("salario").value;
        trans = document.getElementById("transporte").value;
        ali = document.getElementById("alimentacao").value;
        total = parseFloat(sal)  + parseFloat(trans) + parseFloat(ali);
        window.alert("Salário Total = " + total);
    }

    CalculoFinanceiro.prototype.calculoMedia = function(){
        sal1 = document.getElementById("salario1").value;
        sal2 = document.getElementById("salario2").value;

        media = (parseFloat(sal1) + parseFloat(sal2)) / 2;

         window.alert("Mádia = " + media);
    }
    c = new CalculoFinanceiro();