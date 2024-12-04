function openLightbox() {
    document.getElementById("lightbox").style.display = "flex";
}

// Función para cerrar el lightbox (popup)
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}



document.addEventListener("DOMContentLoaded", function () {
    const esLanguaje = document.getElementById("esLanguaje");
    const enLanguaje = document.getElementById("enLanguaje");
    // Aquí va el código que usa esLanguaje y enLanguaje
    const esText = document.querySelectorAll('#es');
    const enText = document.querySelectorAll('#en');
    function setLanguage(language) {
      if (language === 'es') {
        esLanguaje.classList.add('active');
        enLanguaje.classList.remove('active');
        esText.forEach(el => el.classList.remove('hidden'));
        enText.forEach(el => el.classList.add('hidden'));
      } else if (language === 'en') {
        enLanguaje.classList.add('active');
        esLanguaje.classList.remove('active');
        esText.forEach(el => el.classList.add('hidden'));
        enText.forEach(el => el.classList.remove('hidden'));
      }
    }
    console.log(esLanguaje);
    esLanguaje.addEventListener('click', () => setLanguage('es'));
    enLanguaje.addEventListener('click', () => setLanguage('en'));
    
    // Establecer el idioma por defecto (puedes cambiarlo a 'es' si prefieres español como predeterminado)
    setLanguage('es');
});


// Eventos de clic para cambiar de idioma