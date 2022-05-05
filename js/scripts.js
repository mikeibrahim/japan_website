window.addEventListener('DOMContentLoaded', event => {
    // Navbar Animation
    var animateNavBar = function () {
        const navBar = document.body.querySelector('#mainNav');
        if (!navBar) return;
        if (window.scrollY <= 0) navBar.classList.remove('navbar-shrink')
        else navBar.classList.add('navbar-shrink')
    };

    // Shrink the navbar 
    animateNavBar();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', animateNavBar);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});