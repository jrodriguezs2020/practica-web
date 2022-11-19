/* ESTRUCTURA DE LOS ELEMENTOS Y SUBELEMENTOS*/
let eventos = [];
let entradas = [];
let entrada1 = { titleEntrada: "VIP", price: 80 }
let entrada2 = { titleEntrada: "General", price: 50 }

entradas.push(entrada1);
entradas.push(entrada2);

let evento1 = { titleEvento: "Madrid Salvaje", descriptionEvento: "El mejor del país", entradas };
let evento2 = { titleEvento: "Weekend Beach", descriptionEvento: "El peor del país", entradas };

eventos.push(evento1);
eventos.push(evento2);
/*----------------------------------------------------------------------------------------------------*/

/*----- Métodos de inicio -----*/
loadPage();
showEvent();

/*----- Carga la página principal y muestra los eventos en la página principal -----*/
function loadPage() {
    let portf = document.getElementById("portfolio");
    portf.innerHTML = `<div class="container">
    <div class="text-center">
        <h2 class="section-heading text-uppercase">Eventos disponibles</h2>
        <br></br> <!-- salto de línea-->
    </div>
    <div class="row" id="showEvents">
        <!--muestra el array de eventos-->
    </div>
    </div>
    <!-- Botón añadir evento-->
    <div class="btnAdd">
        <button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" href="#addEvent">Añadir
            evento</button>
    </div>`;
}

function showEvent() {
    let events = document.getElementById('showEvents');
    for (let i = 0; i < eventos.length; i++) {
        events.innerHTML +=
            `<div class="col-lg-4 col-sm-6 mb-4">
        <div class="portfolio-item">
            <a class="portfolio-link" onclick="showInfo(${i});">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
            </a>
            <div class="portfolio-caption">
            <div class="portfolio-caption-heading">`+ eventos[i].titleEvento + `</div>
            </div>
        </div>
    </div>`
    };
}

/* Muestra las entradas de cada evento en su sección correspondiente */
/* necesitará cambios */
let pass = document.getElementById('showPass');
for (let i = 0; i < entradas.length; i++) {
    pass.innerHTML +=
        `<div class="col-lg-4 col-sm-6 mb-4">
        <div class="portfolio-item">
            <a class="portfolio-link" onclick="showTicket(${i})"> 
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
            </a>
            <div class="portfolio-caption">
                <div class="portfolio-caption-heading">` + entradas[i].titleEntrada + `</div>
            </div>
        </div>
    </div>`
}


/* none = ocultar, block = mostrar */
function goback() {
    let content1 = document.getElementById('portfolio');
    let content2 = document.getElementById('portfolio2');
    let content3 = document.getElementById('buyPass');
    if (content1.style.display == 'block') {
        content1.style.display = 'none';
        content2.style.display = 'block';
    }
    if (content2.style.display == 'block') {
        content2.style.display = 'none';
        content1.style.display = 'block';
    }
    if (content3.style.display == 'block') {
        content3.style.display = 'none';
        content2.style.display = 'block';
    }

    /*
        let content1 = document.getElementById('portfolio');
        let content2 = document.getElementById('portfolio2');
        content1.style.display = 'block';
        content2.style.display = 'none';*/
}

function showInfo(i) {
    let content1 = document.getElementById('portfolio');
    let content2 = document.getElementById('portfolio2');
    content1.style.display = 'none';
    content2.style.display = 'block';
    let titulo = document.getElementById("titleEvent");
    titulo.innerHTML = eventos[i].titleEvento;
    let description = document.getElementById("descriptionEvent");
    description.innerHTML = eventos[i].descriptionEvento;
    let buttons = document.getElementById("buttons");
    buttons.innerHTML = `<button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" onclick="deleteEvent(${i});">Borrar evento</button>
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" href="#addPass">Añadir
        entrada</button>
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal"
        href="#addEvent">Modificar</button>
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" onclick="goback();">Volver
        atrás</button>`
}

function showTicket(i) {
    let content1 = document.getElementById("buyPass");
    let content2 = document.getElementById("portfolio2");
    content2.style.display = 'none';
    content1.style.display = 'block';
    let titulo = document.getElementById("titleTicket");
    titulo.innerHTML = entradas[i].titleEntrada;
    let description = document.getElementById("priceTicket");
    description.innerHTML = `Precio: ` + entradas[i].price + `€`;
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

function deleteEvent(i) {
    let message = "¿Está seguro que quiere borrar el evento?"
    let option = alerta(message);
    if (option == 1) {
        eventos.splice(i, 1); //elimina el evento
        loadPage();
        showEvent();
        goback();
    }
    else {
        showInfo(i);
    }
}

/* MENSAJE DE CONFIRMACIÓN */
function alerta(message) {
    let click;
    let opcion = confirm(message);
    if (opcion == true) {
        click = 1; //1 si pulsa aceptar
    } else {
        click = 0; //0 si pulsa cancelar
    }
    return click;
}