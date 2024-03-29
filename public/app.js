const NUM_RESULTS = 5;

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

async function alerta(info) {
    let click;
    let opcion = confirm("¿Seguro que quiere borrar el evento?");
    if (opcion == true) {
        click = 1; //1 si pulsa aceptar
    } else {
        click = 0; //0 si pulsa cancelar
    }
    
    if(click == 1){
        const response = await fetch(`/eventDelete?info=${info}`);

        const infoCheck = await response.json();
        
        window.location.href = '/';
    }
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

async function deleteTicket(idd, id){

    let info = id;

    const response2 = await fetch(`/eventGet?info=${idd}`);
        
    const infoCheck2 = await response2.json();

    const response = await fetch(`/ticketDelete?info=${info}`);

    const infoCheck = await response.json();

    const styleTitle = document.getElementById("title" + id);
        styleTitle.style = "color:red";
        styleTitle.ariaDisabled;
        styleTitle.disabled = true;
        const stylePrice = document.getElementById("price" + id);
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
