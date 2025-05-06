//Validação simples
//$("#formExemplo").validate();

$("#formExemplo").validate({
    debug: true,
    rules:{
        txtemail:{
            required: true, 
            email: true,
        },
        txtnome: {
            required: true,
            rangelength: [2, 50],
        },
        txtidade: {
            min: 18,
            max: 100,
            required
            //range: [18, 100]
        }
    },
    messages:{
        txtemail:{
            required: "E-mail obrigatório",
            email: "Formato inválido do e-mail",
        },
        txtnome: {
            required: "Idade obrigatório",
            minlength: "Exigido 2 caracteres",
            maxlength: "Até 50 caracteres",
        },
        txtidade: {
            required: "Idade obrigatório",
            min: "Valor mínimo: 18",
            max: "Valor máximo: 50",
        }
    }
});