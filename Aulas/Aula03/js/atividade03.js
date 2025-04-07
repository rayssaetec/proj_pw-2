$("#calcular").click(function () {
    let v1=parseInt($("#v1").val());
    let v2=parseInt($("#v2").val());
    let v3=parseInt($("#v3").val());


    let a, b, c;
    if (v1 <= v2 && v1 <= v3) {
        a = v1;
        if (v2 <= v3) {
            b = v2;
            c = v3;
        } else {
            b = v3;
            c = v2;
        }
    } else if (v2 <= v1 && v2 <= v3) {
        a = v2;
        if (v1 <= v3) {
            b = v1;
            c = v3;
        } else {
            b = v3;
            c = v1;
        }
    } else {
        a = v3;
        if (v1 <= v2) {
            b = v1;
            c = v2;
        } else {
            b = v2;
            c = v1;
        }
    }
    let order = [a, b, c];
    $("#order")
      .text("Ordem crescente: " + order.join(", "))
      .css({ 'font-weight': 'bold' });
    alert(order.join(", "));
    
    let median= parseInt((v1+v2+v3)/3)
    $("#median")
    .text("Média: " + median)
    .css({ 'font-weight': 'bold'});
    alert(median);

    var soma = 0;
    for (var x = 1; x <= v2; x++) {
        soma += x;
    }
    $("#loop")
        .text("Soma acumulativa: " + soma)
        .css({ 'font-weight': 'bold'});
})