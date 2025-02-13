document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon'); 
    const mobileMenu = document.getElementById('mobile-menu'); 
    const closeMenu = document.getElementById('close-menu'); 

    if (menuIcon && mobileMenu && closeMenu) {
        menuIcon.addEventListener('click', function() {
            mobileMenu.classList.add('active'); 
        });

        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('active'); 
        });
    } else {
        console.error("Erro: Um ou mais elementos não foram encontrados no DOM.");
    }
});
