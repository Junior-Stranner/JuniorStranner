document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    menuIcon.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
});
