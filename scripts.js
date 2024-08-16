// Toggle mobile menu
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('open');
});

// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
