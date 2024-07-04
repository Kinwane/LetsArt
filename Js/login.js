$(document).ready(function() {
    $('#loginButton').click(function(event) {
        event.preventDefault();
        
        // Limpa mensagens de erro anteriores
        $('input').removeClass('error');
        $('.error-message').remove();

        // Variáveis de validação
        let isValid = true;
        let email = $('#email').val();
        let password = $('#password').val();

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

        if (isValid) {
            $.ajax({
                url: 'https://www.exemplo.com/login',
                type: 'POST',
                data: $('#loginForm').serialize(),
                success: function(response) {
                    $('#confirmationMessage').show();
                    $('#loginForm')[0].reset();
                },
                error: function(error) {
                    alert('Ocorreu um erro ao fazer login. Tente novamente.');
                }
            });
        }
    });
    

     // Inicializa o botão de login do Google
     gapi.load('auth2', function() {
        auth2 = gapi.auth2.init({
            client_id: '364731968746-t971ounf3ijc0sjueifra5hb59d49o95.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
        });
        attachSignin(document.getElementById('googleLogin'));
    });

    function attachSignin(element) {
        auth2.attachClickHandler(element, {},
            function(googleUser) {
                var profile = googleUser.getBasicProfile();
                console.log('Google login successful, user info: ', profile);
                // Aqui você pode enviar os dados do usuário para o servidor
                $('#confirmationMessage').show();
            }, function(error) {
                alert('Login com Google falhou: ' + JSON.stringify(error, undefined, 2));
            });
    }

    //login facebook
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '1637469357035955',
            cookie     : true,
            xfbml      : true,
            version    : 'v11.0'
        });
        
        FB.AppEvents.logPageView();   
    };

    $('#facebookLogin').click(function() {
        FB.login(function(response) {
            if (response.authResponse) {
                FB.api('/me', {fields: 'name,email'}, function(response) {
                    console.log('Facebook login successful, user info: ', response);
                    
                    $('#confirmationMessage').show();
                });
            } else {
                alert('Login com Facebook falhou.');
            }
        }, {scope: 'email'});
    });


    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});
