document.addEventListener('DOMContentLoaded', () => {
    
    // ---  LÓGICA PARA EL REGISTRO ---
    const signupForm = document.querySelector('.signup-card form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = signupForm.querySelector('input[type="email"]').value;
            const password = signupForm.querySelectorAll('input[type="password"]')[0].value;
            const confirmPass = signupForm.querySelectorAll('input[type="password"]')[1].value;

            if (password !== confirmPass) {
                alert("Las contraseñas no coinciden. Revisa de nuevo.");
                return;
            }

            // Guardamos el usuario en la memoria del navegador
            const usuario = { email: email, password: password };
            localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));

            alert("¡Registro exitoso! Ahora inicia sesión.");
            window.location.href = "index.html"; // Nos manda al login
        });
    }

    // --- LÓGICA PARA EL LOGIN ---
    // Buscamos el formulario de login (el que no es de registro)
    const loginForm = document.querySelector('.login-card:not(.signup-card) form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = loginForm.querySelector('input[type="email"]').value;
            const passInput = loginForm.querySelector('input[type="password"]').value;

            // Intentamos obtener los datos guardados
            const datosGuardados = JSON.parse(localStorage.getItem('usuarioRegistrado'));

            if (datosGuardados && emailInput === datosGuardados.email && passInput === datosGuardados.password) {
                console.log("Acceso concedido");
                window.location.href = "dashboard.html"; // <--- EL PUENTE MÁGICO
            } else {
                alert("Correo o contraseña incorrectos. ¿Ya te registraste?");
            }
        });
    }

    // ---  LÓGICA PARA EL DASHBOARD (Página Verde) ---
    const usernameElement = document.getElementById('username');
    if (usernameElement) {
        const userData = JSON.parse(localStorage.getItem('usuarioRegistrado'));
        if (userData && userData.email) {
            // Extrae el nombre antes del @ y lo pone en mayúscula
            const name = userData.email.split('@')[0];
            usernameElement.textContent = name.charAt(0).toUpperCase() + name.slice(1);
        }
    }
});

// ---  FUNCIÓN DE CERRAR SESIÓN ---
function logout() {
    // Te regresa al inicio
    window.location.href = "index.html";
}