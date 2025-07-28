// Animación de carga y previsualización de imágenes
// Modal para mostrar imagen en grande
document.addEventListener('DOMContentLoaded', () => {
    // Corazones animados en el fondo
    const heartsBg = document.querySelector('.hearts-bg');
    if (heartsBg) {
        for (let i = 0; i < 18; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = (Math.random() * 7) + 's';
            heart.style.animationDuration = (5 + Math.random() * 5) + 's';
            heartsBg.appendChild(heart);
        }
    }

    // Modal de imágenes
    const galleries = document.querySelectorAll('.img-gallery img');
    const modal = document.createElement('div');
    modal.className = 'modal-img';
    modal.innerHTML = '<button class="close-btn" title="Cerrar">&times;</button><img src="" alt="Imagen ampliada">';
    document.body.appendChild(modal);
    const modalImg = modal.querySelector('img');
    const closeBtn = modal.querySelector('.close-btn');

    galleries.forEach(img => {
        img.addEventListener('click', () => {
            modal.classList.add('active');
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        });
    });
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        modalImg.src = '';
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            modalImg.src = '';
        }
    });
});
