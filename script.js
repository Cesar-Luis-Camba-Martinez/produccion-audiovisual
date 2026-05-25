// Confirmación de carga del entorno digital
document.addEventListener('DOMContentLoaded', () => {
    console.log("Entorno web de Producción Audiovisual Educativa inicializado correctamente.");

    // Configuración de desplazamiento suave para los enlaces del menú
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});