/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

function alerta() {
    let content1 = document.getElementById('portfolio');
    let content2 = document.getElementById('portfolio2');
    content1.style.display = 'none';
    content2.style.display = 'block';
}

function addPass() {
    let element = document.getElementById('subelementos');
    element.innerHTML = `<div class="form-group">
                            <input class="form-control" id="pass" type="text"
                                placeholder="Título de la entrada *"
                                data-sb-validations="required" />
                            <div class="invalid-feedback" data-sb-feedback="pass:required">
                                Es necesario un título</div>
                        </div>
                        <div class="form-group">
                            <input class="form-control" id="price" type="int"
                                placeholder="Precio de la entrada *"
                                data-sb-validations="required" />
                            <div class="invalid-feedback" data-sb-feedback="price:required">
                                Es necesario un precio</div>
                        </div>`
}


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

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
