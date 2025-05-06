$("#formExemplo").validate({
    debug: true,
    rules: {
        txtemail: {
            required: true,
            email: true,
        },
        txtnome: {
            required: true,
            rangelength: [2, 50],
        },
        txtfilho: {
            required: true,
            min: 0,
            max: 10,
        },
        txtadmissao: {
            required: true,
            date: true,
        },
        txturl: {
            required: true,
            url: true,
        },
    },
    messages: {
        txtemail: {
            required: "E-mail obrigatório",
            email: "Formato inválido do e-mail",
        },
        txtnome: {
            required: "Nome obrigatório",
            rangelength: "Nome deve ter entre 2 e 50 caracteres",
        },
        txtfilho: {
            required: "Nº de filhos obrigatório",
            min: "Valor mínimo: 0",
            max: "Valor máximo: 10",
        },
        txtadmissao: {
            required: "Data de Admissão obrigatória",
        },
        txturl: {
            required: "URL obrigatória",
            url: "Formato inválido da URL",
        },
    }
});
