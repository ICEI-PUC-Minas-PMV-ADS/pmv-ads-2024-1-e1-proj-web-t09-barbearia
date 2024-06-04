document.addEventListener('DOMContentLoaded', () => {
    const menuMobile = document.getElementById('menu-mobile');
    const mobileMenu = document.getElementById('mobile-menu');

    menuMobile.addEventListener('click', () => {
        if (mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'block';
        }
    });
});