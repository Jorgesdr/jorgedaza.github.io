function openLightbox(image) {
            const lightbox = document.querySelector('.lightbox');
            const lightboxImg = document.getElementById('lightboxImg');
            lightbox.style.display = "flex";
            lightboxImg.src = image.src; // Set the lightbox image to the clicked image
        }

        // Close lightbox when clicking outside the image or on the close button
        function closeLightbox(event) {
            if (event.target !== event.currentTarget || event.target === event.currentTarget || event.target.classList.contains('close-btn')) {
                document.querySelector('.lightbox').style.display = "none";
            }
        }

        // Add event listeners to all images with the class 'lightbox-trigger'
        document.querySelectorAll('.lightbox-trigger').forEach(img => {
            img.addEventListener('click', function() {
                openLightbox(img);
            });
        });


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
    esLanguaje.addEventListener('click', () => setLanguage('es'));
    enLanguaje.addEventListener('click', () => setLanguage('en'));    
    // Establecer el idioma por defecto (puedes cambiarlo a 'es' si prefieres español como predeterminado)
    setLanguage('es');
});


// Eventos de clic para cambiar de idioma