document.getElementById('togglePassword').addEventListener('click', function (e) {
    // Obtén el input de la contraseña y los íconos
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    const eyeSlashIcon = document.getElementById('eyeSlashIcon');
    
    // Alterna el tipo de input entre password y text
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';  // Muestra la contraseña
        eyeIcon.style.display = 'none';  // Oculta el ícono de "ojo abierto"
        eyeSlashIcon.style.display = 'inline';  // Muestra el ícono de "ojo cerrado"
    } else {
        passwordInput.type = 'password';  // Oculta la contraseña
        eyeIcon.style.display = 'inline';  // Muestra el ícono de "ojo abierto"
        eyeSlashIcon.style.display = 'none';  // Oculta el ícono de "ojo cerrado"
    }
});

document.querySelectorAll('.hover-element').forEach((item) => {
    item.addEventListener('mousemove', (e) => {
        const hoverElement = item;
        const { left, top, width, height } = hoverElement.getBoundingClientRect();
        const x = (e.clientX - left) / width * 130;
        const y = (e.clientY - top) / height * 130;

        hoverElement.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, transparent, rgba(23, 23, 23, 0.406))`;

        clearTimeout(hoverElement.timeout);
        document.body.classList.add("movimiento");
        hoverElement.timeout = setTimeout(function () {
            document.body.classList.remove("movimiento");
        }, 300);
    });

    item.addEventListener('mouseleave', () => {
        const hoverElement = item;
        hoverElement.style.backgroundImage = 'none';
    });
});
