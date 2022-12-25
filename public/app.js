const NUM_RESULTS = 3;

let loadMoreRequests = 0;

async function loadMore(){

    const from = (loadMoreRequests+1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/events?from=${from}&to=${to}`);

    const newEvents = await response.text();
  
    const EventsDiv = document.getElementById("events");

    EventsDiv.innerHTML += newEvents;

    loadMoreRequests++;
}

async function addTicketForm(){
    let info = 1;
    const response = await fetch(`/eventNew?info=${info}`);

    const infoCheck = await response.json();

    const ticketsDiv = document.getElementById("subelementosForm");

    ticketsDiv.innerHTML = `<br />
    <div class="form-group">
        <input class="form-control" name="titleT" type="text"
            placeholder="Título de la entrada *" />
    </div>
    <div class="form-group">
        <input class="form-control" name="price" type="int"
            placeholder="Precio de la entrada *" />
    </div>`;
}

async function deleteTicket(id){

    console.log(id);
    const styleTitle = document.getElementById("titlePass" + id);
        styleTitle.style = "color:red";
        styleTitle.ariaDisabled;
        styleTitle.disabled = true;
    const stylePrice = document.getElementById("pricePass" + id);
        stylePrice.style = "color:red";
        stylePrice.disabled = true;
}

//----- NavBar -----//
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
