$(document).ready(function() {
    $('#submitButton').click(function(event) {
        event.preventDefault();
        
        // Limpa mensagens de erro anteriores
        $('input').removeClass('error');
        $('.error-message').remove();

        // Variáveis de validação
        let isValid = true;
        let name = $('#name').val();
        let email = $('#email').val();
        let password = $('#password').val();
        let confirmPassword = $('#confirmPassword').val();

        // Valida o campo de nome
        if (name.trim() === '') {
            isValid = false;
            $('#name').addClass('error').after('<span class="error-message">Nome é obrigatório.</span>');
        }

        // Valida o campo de email
        if (email.trim() === '') {
            isValid = false;
            $('#email').addClass('error').after('<span class="error-message">Email é obrigatório.</span>');
        } else if (!validateEmail(email)) {
            isValid = false;
            $('#email').addClass('error').after('<span class="error-message">Email inválido.</span>');
        }

        // Valida o campo de senha
        if (password.trim() === '') {
            isValid = false;
            $('#password').addClass('error').after('<span class="error-message">Senha é obrigatória.</span>');
        }

        // Valida o campo de confirmação de senha
        if (confirmPassword.trim() === '') {
            isValid = false;
            $('#confirmPassword').addClass('error').after('<span class="error-message">Confirmação de senha é obrigatória.</span>');
        } else if (password !== confirmPassword) {
            isValid = false;
            $('#confirmPassword').addClass('error').after('<span class="error-message">As senhas não coincidem.</span>');
        }

        // Se o formulário for válido, envia os dados
        if (isValid) {
            $.ajax({
                url: 'https://www.exemplo.com/destino',
                type: 'POST',
                data: $('#registerForm').serialize(),
                success: function(response) {
                    $('#confirmationMessage').show();
                    $('#registerForm')[0].reset();
                },
                error: function(error) {
                    alert('Ocorreu um erro ao registrar. Tente novamente.');
                }
            });
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});


//<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js"></script>
//<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>