// JavaScript for responsive menu toggle
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.navbar .menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Sticky Navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 20);
});
