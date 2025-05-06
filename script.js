// Loader
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);
});

// ScrollReveal Animations
ScrollReveal().reveal('.section-header', {
    delay: 300,
    distance: '50px',
    origin: 'top',
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.card-item', {
    delay: 400,
    interval: 100,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out'
});

// Menu Mobile
const menuBtn = document.querySelector('.menu-mobile');
const nav = document.querySelector('.nav-desktop');

menuBtn.addEventListener('click', function() {
    nav.classList.toggle('active');
    this.classList.toggle('open');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});