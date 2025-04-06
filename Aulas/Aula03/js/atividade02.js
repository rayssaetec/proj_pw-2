$("#esconder").click(function(){
    $("#teste1").hide();
});

$("#mostrar").click(function (){
    $("#teste1").show();
});

$("#alterarCSS").click(function (){
    $("#teste2").css({
        "background-color": "blue",
        "font-size": "200%",
        "color": "white"
    });
});

$("#alterarClass").click(function (){
    $("#teste3").removeClass("alert-success").addClass("alert-primary");
    $("#alterarClass").removeClass("btn-success").addClass("btn-danger");
});


$("#alternar3").hide()
$("#alternar1").hide()


$("#alternar1").click(function(){
    $("#link").attr({
        "href": "https://etecitu.cps.sp.gov.br/",
        "title": "Etec Itu"
    });
    $("#link").text("Etec Itu");
    $("#alternar3").hide()
    $("#alternar2").show()
    $("#alternar1").hide()
    $("#alert").removeClass("alert-success alert-warning").addClass("alert-primary");
    $("#alert").text("A Etec Itu é uma escola técnica estadual que oferece diversos cursos profissionalizantes integrado ao ensino médio, possibilitando habilidades técnicas e teoricas ao aluno.");
});

$("#alternar2").click(function(){
    $("#link").attr({
        "href": "https://fatecitu.cps.sp.gov.br/",
        "title": "Fatec Itu"
    });
    $("#link").text("Fatec Itu");
    $("#alternar2").hide()
    $("#alternar3").show()
    $("#alternar1").hide()
    $("#alert").removeClass("alert-primary alert-warning").addClass("alert-success");
    $("#alert").text("A Fatec Itu é uma faculdade de tecnologia que oferece cursos superiores gratuitos, em diversas áreas, como Construção Civil, Mecânica, Informática, Tecnologia da Informação, Turismo, entre outras, sendo pioneira na graduação de tecnólogos.");
});

$("#alternar3").click(function(){
    $("#link").attr({
        "href": "https://www.cps.sp.gov.br/",
        "title": "CPS"
    });
    $("#link").text("CPS");
    $("#alternar1").show()
    $("#alternar2").hide()
    $("#alternar3").hide()
    $("#alert").removeClass("alert-primary alert-success").addClass("alert-warning");
    $("#alert").text("O Centro Paula Souza administra as Etecs e Fatecs em São Paulo. Presente em diversos municípios do Estado de São paulo, a instituição administra as Escolas Técnicas (Etecs) e as Faculdades de Tecnologia (Fatecs) estaduais, com alunos em cursos técnicos de nível médio e superiores tecnológicos.");
});
