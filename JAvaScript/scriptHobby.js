document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio do formulário
    
        var username = document.getElementById("username").value;
       
    
        // Simulação de autenticação do usuário (apenas para fins demonstrativos)
        if (username) {
            showWelcomeMessage(username);
            setTimeout(function() {
                window.location.href = "MainPage.html"; // Redireciona para outra página
            }, 3000); // Tempo de espera antes do redirecionamento (3000 milissegundos = 3 segundos)
        }
    });
    
});

function showWelcomeMessage(username) {
    var welcomeMessage = document.getElementById("welcome-message");
    welcomeMessage.textContent = "Welcome " + username;
    welcomeMessage.classList.remove("hidden");
    welcomeMessage.style.opacity = 1;

    setTimeout(function() {
        welcomeMessage.style.opacity = 0;
        setTimeout(function() {
            welcomeMessage.style.display = "none";
            
            hideLoginForm(); // Chama a função para ocultar o formulário de login
        }, 1000); // Tempo de espera antes de esconder a mensagem de boas-vindas
    }, 2000); // Tempo de espera antes de iniciar a transição de remoção da mensagem de boas-vindas
}

function hideLoginForm() {
    var loginForm = document.getElementById("login-form");
    loginForm.style.display = "none";
}
