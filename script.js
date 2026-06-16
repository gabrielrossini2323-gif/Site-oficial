/**
 * Motor de Gestão Dinâmica do Carrossel e Checkout - Otimizado
 */
(() => {
    "use strict";

    let currentIdx = 0;
    const totalSlides = 3;

    // Cache local de nós do DOM
    const carouselInner = document.getElementById('carouselInner');
    const dots = document.querySelectorAll('.dot');

    function updateCarousel() {
        if (!carouselInner) return;

        // Deslocamento horizontal escalado estritamente baseado no total de itens
        const displacement = currentIdx * (100 / totalSlides);
        carouselInner.style.transform = `translateX(-${displacement}%)`;
        
        dots.forEach((dot, index) => {
            const isActive = index === currentIdx;
            dot.classList.toggle('active', isActive);
            dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
    }

    window.moveSlide = (direction) => {
        currentIdx += direction;
        
        if (currentIdx >= totalSlides) {
            currentIdx = 0; 
        } else if (currentIdx < 0) {
            currentIdx = totalSlides - 1; 
        }
        updateCarousel();
    };

    window.currentSlide = (index) => {
        if (index >= 0 && index < totalSlides) {
            currentIdx = index;
            updateCarousel();
        }
    };

    window.checkout = () => {
        const linkMercadoPago = "https://mpago.la/1sAse96";
        window.location.href = linkMercadoPago;
    };

    window.addCart = () => {
        window.checkout();
    };
})();
