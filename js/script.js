$(document).ready(function(){ 
   
    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(DDD) XXXXX-XXXX'
    });
    $('#document').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    });
    $('#area-code').mask('00.000-000', {
        placeholder: '__.___-___'
    });

    $('#registration-form').validate({
        rules:{
            name: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            document: {
                required: true
            },
            address: {
                required: true
            },
            areaCode: {
                required: true
            }
        },
        messages:{
            name: 'Por favor insira seu nome completo.',
            email: {
                required: 'Por favor, insira seu email.'
            },
            tel: 'Por favor, insira seu telefone de contato.',
            document: 'Por favor, insira seu CPF.',
            address: 'Por favor, insira seu endereço.',
            areaCode: 'Por favor, insira seu CEP.'
        },
        submitHandler: function(form){
            form.submit()
            alert('Formulário cadastrado!')
        }
    })
})