let currentIdx = 0; 
const totalSlides = 3;

function updateCarousel() {
    const carouselInner = document.getElementById('carouselInner');
    const dots = document.querySelectorAll('.dot');
    
    if (!carouselInner) return;

    carouselInner.style.transform = `translateX(-${currentIdx * 100}%)`;
    
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

function checkout() {
    const linkMercadoPago = "https://mpago.la/1sAse96";
    window.location.href = linkMercadoPago;
}

function addCart() {
    checkout();
}
