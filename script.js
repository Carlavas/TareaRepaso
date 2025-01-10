// Archivo JavaScript para la página de Animal Crossing

// Referencias a los elementos del DOM
const botonCuriosidades = document.getElementById('btn-curiosidades');
const dialogo = document.getElementById('curiosidades');
const botonCerrar = document.getElementById('cerrar-dialogo');

// Función para abrir el cuadro de diálogo
botonCuriosidades.addEventListener('click', () => {
    dialogo.showModal();
});

// Función para cerrar el cuadro de diálogo
botonCerrar.addEventListener('click', () => {
    dialogo.close();
});