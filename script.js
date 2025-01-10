// Archivo JavaScript para la página de Animal Crossing

// Arreglo con curiosidades
const curiosidades = [
    "Animal Crossing se lanzó por primera vez en 2001 y ha sido un éxito mundial desde entonces.",
    "En Animal Crossing, el tiempo pasa al mismo ritmo que el del mundo real.",
    "Los personajes del juego tienen personalidades únicas, desde los más alegres hasta los más gruñones.",
    "Tom Nook, el mapache, es uno de los personajes más famosos y siempre está dispuesto a ayudarte, aunque con un precio.",
    "El juego tiene eventos especiales que se celebran según la estación del año, como la Fiesta de la Primavera y el evento de la Caza de Huevos.",
    "Blathers, el búho, dirige el museo donde puedes completar exposiciones de peces, insectos, fósiles y arte.",
    "K.K. Slider es un músico icónico que te ofrece canciones exclusivas cada semana.",
    "El juego incluye cambios estacionales que se sincronizan con tu ubicación en el mundo real.",
    "¡No hay ganadores ni perdedores en Animal Crossing! El objetivo es relajarte y disfrutar personalizando tu isla."
];

// Referencias a los elementos del DOM
const botonCuriosidades = document.getElementById('btn-curiosidades');
const dialogo = document.getElementById('curiosidades');
const textoCuriosidad = document.getElementById('texto-curiosidad'); // Asegúrate de tener este elemento en el HTML
const botonCerrar = document.getElementById('cerrar-dialogo');

// Función para abrir el cuadro de diálogo con una curiosidad aleatoria
botonCuriosidades.addEventListener('click', () => {
    const curiosidadAleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];
    textoCuriosidad.textContent = curiosidadAleatoria; // Actualiza el contenido del texto
    dialogo.showModal();
});

// Función para cerrar el cuadro de diálogo
botonCerrar.addEventListener('click', () => {
    dialogo.close();
});
