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
        txtfilho: {
            min: 0,
            max: 10,
            required
            //range: [18, 100]
        },
        txtdate:{
            required: true, 
            date: true,
        },
        txturl:{
            required: true, 
            url: true,
        },
        txtsalario: {
            min: 2000,
            max: 10000,
            //range: [18, 100]
        },
    },
    messages:{
        txtemail:{
            required: "E-mail obrigatório",
            email: "Formato inválido do e-mail",
        },
        txtnome: {
            required: "Nome obrigatório",
            minlength: "Exigido 2 caracteres",
            maxlength: "Até 50 caracteres",
        },
        txtfilho: {
            required: "Nº de filhos obrigatório",
            min: "Valor mínimo: 0",
            max: "Valor máximo: 10",
        },
        txtdate:{
            required: "Data de admissão obrigatório",
        },
        txturl:{
            required: "Url obrigatório",
            url: "Formato inválido do url",
        },
        txtsalario: {
            min: "Valor mínimo: 2000",
            max: "Valor máximo: 10000",
        }
    }
});