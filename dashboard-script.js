document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener los datos del usuario que guardamos en el login
    const userData = JSON.parse(localStorage.getItem('usuarioRegistrado'));
    const usernameElement = document.getElementById('username');

    if (userData && userData.email) {
        // Extraemos el nombre antes del @ para saludarlo
        const name = userData.email.split('@')[0];
        usernameElement.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    } else {
        // Si no hay datos, redirigir al login por seguridad
        // window.location.href = 'index.html';
    }
});

function logout() {
    // Limpiar sesión si fuera necesario y volver al inicio
    window.location.href = 'index.html';
}