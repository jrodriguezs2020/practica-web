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
        <button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" onclick=addTicket();>Añadir
            evento</button>
    </div>`;
}

function showEvent() {
    let events = document.getElementById('showEvents');
    //control de eventos (si no hay eventos)
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
function showTicketsEvent() {
    let pass = document.getElementById('showPass');
    //control de entradas (si no hay entradas)
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
}

function showportfolio2() {
    let portf = document.getElementById("portfolio2");
    portf.innerHTML = `<div class="container"> <!--meter en metodo y llamar en showInfo-->
    <div class="row justify-content-center">
        <div class="col-lg-8">
            <div class="modal-body">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase" id="titleEvent"></h2>
                    <br></br> <!-- salto de línea-->
                </div>
                <!-- Portfolio item 1-->
                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                <br />
                <div class="text-center">
                    <p class="text-center" id="descriptionEvent"></p>
                    <!--<p><strong>Price:</strong>€€</p>-->
                </div>
                <!-- ENTRADAS DE EVENTO -->
                <section class="page-section bg-light" id="portfolio">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">Entradas disponibles</h2>
                            <br></br> <!-- salto de línea-->
                        </div>
                        <div class="row" id="showPass">
                            <!--muestra el array de eventos-->
            
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>
<!-- Botón añadir evento-->
        <div class="btnAdd" id="buttons">
            
        </div>`
}


/* none = ocultar, block = mostrar */
function goback() {
    let content1 = document.getElementById('portfolio');
    let content2 = document.getElementById('portfolio2');
    let content3 = document.getElementById('buyPass');
    let content4 = document.getElementById("addEvent2");
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
    if(content4.style.display == 'block'){
        content4.style.display = 'none';
        content1.style.display = 'block';
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
    showportfolio2();
    let titulo = document.getElementById("titleEvent");
    titulo.innerHTML = eventos[i].titleEvento;
    let description = document.getElementById("descriptionEvent");
    description.innerHTML = eventos[i].descriptionEvento;
    showTicketsEvent();
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
let estado = false;
function addPass() {
    estado = true;
    let element = document.getElementById('subelementos');
    element.innerHTML = `<br />
                        <div class="form-group">
                            <input class="form-control" id="titlePass" type="text"
                                placeholder="Título de la entrada *"
                                data-sb-validations="required" />
                            <div class="invalid-feedback" data-sb-feedback="pass:required">
                                Es necesario un título</div>
                        </div>
                        <div class="form-group">
                            <input class="form-control" id="pricePass" type="int"
                                placeholder="Precio de la entrada *"
                                data-sb-validations="required" />
                            <div class="invalid-feedback" data-sb-feedback="price:required">
                                Es necesario un precio</div>
                        </div>`;
    //return 1;
}

function addTicket() {
    let content1 = document.getElementById('portfolio');
    let content2 = document.getElementById('addEvent2');
    content1.style.display = 'none';
    content2.style.display = 'block';
    showForm();
    let boton = document.getElementById("botones")
    boton.innerHTML = `
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" onclick="goback();">Volver atrás</button>
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" onclick="saveEvent();">Crear evento</button>
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" id="addEvent" onclick="addPass();">Añadir entrada</button>`;
}

function showForm() {
    let content = document.getElementById("addEvent2");
    content.innerHTML =
        `<div class="container"> <!--meter en metodo y llamar en showInfo-->
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="modal-body">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">Nuevo evento</h2>
                            <section class="page-section" id="contact" style="background-color:#ffffff">
                                <!--page-section define el espacio entre el titulo y las cajas del form-->
                                <div class="container">
                                    <form id="contactForm">
                                        <div class="row align-items-stretch mb-5">
                                            <!-- mb-5 define el espacio entre los botones y principio/final-->
                                                <div class="form-group">
                                                    <!-- Title input-->
                                                    <input class="form-control" id="titleEvent" type="text"
                                                        placeholder="Título del evento *"
                                                        data-sb-validations="required" />
                                                </div>
                                                <div class="form-group form-group-textarea mb-md-0">
                                                    <!-- Description input-->
                                                    <textarea class="form-control" id="descriptionEvent"
                                                        placeholder="Descripción *"
                                                        data-sb-validations="required"></textarea>
                                                </div>
                                            <div id="subelementos">
                                                <!--Campos del subelemento-->
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btnAdd" id="botones">
            <!-- botones volver, añadir entrada y crear -->
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

function saveEvent() {
    console.log(estado);
    let message = "¿Está seguro que quiere crear este evento?"
    let option = alerta(message);
    if (option == 1) {
        //recojo información
        /*meter en subprogramas por un lado evento y por otro entrada*/
        /*sin entrada en una section y con en otra */
        let titulo = document.getElementById("titleEvent").value;
        let descripcion = document.getElementById("descriptionEvent").value;
        
        if (titulo == "") {
            titulo = "Sin título";
        }
        if (descripcion == "") {
            descripcion = "Sin descripción";
        }
        console.log(titulo);
        let evento = { titleEvento: titulo, descriptionEvento: descripcion, entradas };
        eventos.push(evento);

        if (estado == true){
            let tituloEntrada = document.getElementById("titlePass").value;
            let precio = document.getElementById("pricePass").value;
            let entradaEvent = {titleEntrada: tituloEntrada, price: precio }
            entradas.push(entradaEvent);
            

        }
        loadPage();
        showEvent();
        goback();
        estado = false;
        console.log(estado);
    }
    else {
        goback();
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