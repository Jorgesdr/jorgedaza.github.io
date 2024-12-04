function openLightbox() {
    document.getElementById("lightbox").style.display = "flex";
}

// Función para cerrar el lightbox (popup)
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}



const btnEs = document.getElementById("eslanguaje");
const btnEn = document.getElementById("enlanguaje");
const enContent = document.getElementById('en');
const esContent = document.getElementById('es');

btnEn.addEventListener('click', () => {
    enContent.classList.remove('hidden');
    esContent.classList.add('hidden');
});

// Función para mostrar español y ocultar inglés
btnEs.addEventListener('click', () => {
    esContent.classList.remove('hidden');
    enContent.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
    enContent.classList.add('hidden'); // Mostrar español por defecto
})