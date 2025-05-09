// Botón de bienvenida
document.getElementById('welcome-btn').addEventListener('click', () => {
    alert('¡Bienvenido a EduPeople! Explora y aprende con nosotros.');
});

// Cambiar contenido dinámicamente
const topics = {
    artes: "15 datos curiosos sobre el arte...",
    ciencias: "15 datos curiosos sobre la ciencia...",
    "cultura-global": "15 datos curiosos sobre la cultura global...",
    mexico: "15 datos curiosos sobre México...",
    matematicas: "15 datos curiosos sobre las matemáticas..."
};

document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', () => {
        const topicId = card.id;
        alert(topics[topicId]);
    });
});

// Resaltar sección activa en el menú
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});
