// Botón de bienvenida
document.getElementById('btn-bienvenida').addEventListener('click', () => {
    alert('¡Bienvenido a EduPeople! Explora y aprende.');
});

// Cambiar contenido dinámicamente
document.querySelectorAll('.tarjeta').forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        const tema = tarjeta.getAttribute('data-tema');
        alert(`Has seleccionado el tema: ${tema}`);
    });
});

// Resaltar sección activa en el menú
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav ul li a');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`header nav ul li a[href="#${section.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});
