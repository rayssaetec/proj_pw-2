$("#calcular").click(function () {
    var rnome = $("#nome").val();
    var rdependentes = $("#dependentes").val();
    var rsalario = $("#salario").val();    
    var idade = $("#idade").val();
    var inss = parseFloat(rsalario * 0.08).toFixed(2);
    var valeTransporte = parseFloat(rsalario * 0.05).toFixed(2);
    bonus = (idade > 50) ? bonus = 300 : bonus = 200;
    var salarioLiquido = parseFloat(rsalario - inss - valeTransporte + bonus + 50*rdependentes).toFixed(2);
    

    $("#rnome")
    .text("Nome: " + rnome)
    .css({ 'font-weight': 'bold' })

    $("#rdependentes")
    .text("Dependentes: " + rdependentes)
    .css({ 'font-weight': 'bold' })

    $("#rsalario")
    .text("Salário: " + "R$" + rsalario)
    .css({ 'font-weight': 'bold' })

    $("#inss")
    .text("INSS: " + "R$" + inss)
    .css({ 'font-weight': 'bold' })

    $("#valeTransporte")
    .text("Vale Transporte: " + "R$" + valeTransporte)
    .css({ 'font-weight': 'bold' })

    $("#salarioLiquido")
    .text("Salário Líquido: " + "R$" + salarioLiquido)
    .css({ 'font-weight': 'bold' })

})