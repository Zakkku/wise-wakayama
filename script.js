// Hamburger Menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// Photo Gallery Scroll
// const galleryContainer = document.querySelector('.gallery-container');
// const galleryImages = galleryContainer.querySelectorAll('.gallery-image');

// let currentImageIndex = 0;

// function showImage(index) {
//     galleryImages.forEach((image, idx) => {
//         if (idx === index) {
//             image.style.opacity = '1';
//         } else {
//             image.style.opacity = '0';
//         }
//     });
// }

// function nextImage() {
//     currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
//     showImage(currentImageIndex);
// }

// setInterval(nextImage, 3000); // Auto-scroll every 3 seconds