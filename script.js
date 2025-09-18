let currentImage = 0;
let images = document.querySelectorAll('.gallery-item img');

function openLightbox(img) {
    currentImage = Array.from(images).indexOf(img);
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function nextImage(event) {
    event.stopPropagation();
    currentImage = (currentImage + 1) % images.length;
    document.getElementById('lightbox-img').src = images[currentImage].src;
}

function prevImage(event) {
    event.stopPropagation();
    currentImage = (currentImage - 1 + images.length) % images.length;
    document.getElementById('lightbox-img').src = images[currentImage].src;
}

function filterImages(category) {
    images.forEach(img => {
        if(category === 'all') {
            img.parentElement.style.display = 'block';
        } else {
            img.parentElement.style.display = img.parentElement.classList.contains(category) ? 'block' : 'none';
        }
    });
}
