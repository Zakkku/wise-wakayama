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

