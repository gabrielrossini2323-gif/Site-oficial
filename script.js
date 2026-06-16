let currentIdx = 0; 
const totalSlides = 2; // Trava estrita para as suas 2 imagens de produto

function updateCarousel() {
    const carouselInner = document.getElementById('carouselInner');
    const dots = document.querySelectorAll('.dot');
    
    if (!carouselInner) return;

    // Move as imagens lateralmente de forma suave
    carouselInner.style.transform = `translateX(-${currentIdx * 100}%)`;
    
    // Atualiza as bolinhas indicadoras em tempo real
    dots.forEach((dot, index) => {
        if (index === currentIdx) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function moveSlide(direction) {
    currentIdx += direction;
    
    // Sistema infinito: vai do último pro primeiro e vice-versa
    if (currentIdx >= totalSlides) {
        currentIdx = 0; 
    } else if (currentIdx < 0) {
        currentIdx = totalSlides - 1; 
    }
    updateCarousel();
}

function currentSlide(index) {
    currentIdx = index;
    updateCarousel();
}

/* ==========================================================================
   REDIRECIONAMENTO - LINK DO SEU MERCADO PAGO
   ========================================================================== */
function checkout() {
    const linkMercadoPago = "https://mpago.la/1sAse96";
    window.location.href = linkMercadoPago;
}

function addCart() {
    checkout();
}
