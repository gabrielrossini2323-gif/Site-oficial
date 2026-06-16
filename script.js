let currentIdx = 0; 
const totalSlides = 2; // Trava estrita para apenas 2 imagens

function updateCarousel() {
    const carouselInner = document.getElementById('carouselInner');
    const dots = document.querySelectorAll('.dot');
    
    if (!carouselInner) return;

    // Move de 100% em 100% de acordo com a arquitetura padrão corrigida
    carouselInner.style.transform = `translateX(-${currentIdx * 100}%)`;
    
    // Atualiza o estado visual das bolinhas indicadoras
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
    
    // Impede fisicamente que o índice alcance o valor 2 (que seria o 3º slide vazio)
    if (currentIdx >= totalSlides) {
        currentIdx = 0; // Volta para o primeiro slide
    } else if (currentIdx < 0) {
        currentIdx = totalSlides - 1; // Vai para o último slide real (índice 1)
    }
    updateCarousel();
}

function currentSlide(index) {
    currentIdx = index;
    updateCarousel();
}

/* ==========================================================================
   FUNÇÃO DE REDIRECIONAMENTO COM LINK DO MERCADO PAGO
   ========================================================================== */
function checkout() {
    // IMPORTANTE: Substitua o link abaixo pelo link do produto gerado no seu painel do Mercado Pago
    const linkMercadoPago = "https://mpago.la/1sAse96";
    
    // Redireciona o cliente para o ambiente seguro de checkout do Mercado Pago
    window.location.href = linkMercadoPago;
}

function addCart() {
    checkout();
}
