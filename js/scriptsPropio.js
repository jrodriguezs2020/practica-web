/* ESTRUCTURA DE LOS ELEMENTOS Y SUBELEMENTOS */
class Evento {
    constructor(titleEvento, descriptionEvento, entradasEvento) {
        this.titleEvento = titleEvento;
        this.descriptionEvento = descriptionEvento;
        this.entradasEvento = entradasEvento;
    }
}

class Entrada {
    constructor(titleEntrada, price) {
        this.titleEntrada = titleEntrada;
        this.price = price;
    }
}
/*---------------------------------------------------------------*/
/* Datos de ejemplo */
let tickets = [];
let t1 = new Entrada("Abono General", 37);
let t2 = new Entrada("Abono General + Promo Bebida", 52);
tickets.push(t1);
tickets.push(t2);

let tickets2 = [];
let t12 = new Entrada("Abono General", 55);
let t22 = new Entrada("Abono General + Acampada", 80);
let t32 = new Entrada("Abono VIP", 100);
let t42 = new Entrada("Abono VIP + Acampada", 120);
tickets2.push(t12);
tickets2.push(t22);
tickets2.push(t32);
tickets2.push(t42);

let tickets3 = [];
let t13 = new Entrada("Abono General", 45);
let t23 = new Entrada("Abono Total Immersion", 110);
tickets3.push(t13);
tickets3.push(t23);

let eventos = [];
let e1 = new Evento("Madrid Salvaje", "Madrid Salvaje nació con el fin de derribar lo políticamente correcto, sin prejuicios. Nació como un espacio creado por y para los amantes de la música urbana, como un punto de encuentro entre los artistas más reconocidos y los nombres más emergentes de la escena underground del país. En muy poco tiempo nos hicimos grandes, conquistamos Madrid e hicimos que se nos escuchase. Madrid Salvaje es el punto de encuentro de la música urbana durante dos días de festival, con más de 35 de los artistas de rap y trap más importantes del país actuando en 3 escenarios. Todo ello acompañado de exhibiciones de skate, graffiti, foodtrucks y mucho más. Si eres uno de los nuestros, este es tu sitio.", tickets);
let e2 = new Evento("Weekend Beach Festival", "Uno de los grandes escenarios musicales en el calendario de verano. Un regreso que cumplirá las expectativas de público y organización. Con más de 80 artistas que pasarán por el recinto del festival en esta séptima edición destacando artistas internacionales como Bastille o Nicky Jam, que encabezarán esta edición del festival junto a muchos otros. Conciertos espectaculares en un entorno único con todos los accesos y comodidades harán del festival una de las citas musicales imprescindibles del verano en nuestro país.", tickets2);
let e3 = new Evento("The Juergas Rock Festival", "¡BOOM! Madrid está más que preparada para recibiros los días 02, 03, 04 y 05 de agosto del año que viene, como lo oyes, ¡4 pedazo de días de juerga! Y no va a ser una juerga cualquiera, porque además vamos a celebrar nuestro  X ANIVERSARIO. Se cumplen diez añazos de la primera vez que se celebró la primera edición del que ahora es uno de los mejores festivales de rock en nuestro país, así que, prepararos, que la vamos a liar bien fuerte. ¡APUNTATE YA!", tickets3);
eventos.push(e1);
eventos.push(e2);
eventos.push(e3);
/*---------------------------------------------------------------*/
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

/*----- Muestra los eventos en la PP -----*/
function showEvent() {
    let events = document.getElementById('showEvents');
    if (eventos.length == 0) {
        events.innerHTML = `<div class="text-center">
            <h3 class="section-heading text-uppercase">No hay eventos disponibles</h3>
            <br></br>
        </div>`;
    }
    else {
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
}

/*----- Muestra las entradas de cada evento en su sección correspondiente -----*/
let num;
function showTicketsEvent(i) {
    num = i;
    let entradas = eventos[i].entradasEvento;
    let pass = document.getElementById('showPass');
    if (entradas.length == 0) {
        pass.innerHTML = `<div class="text-center">
            <h3 class="section-heading text-uppercase">No hay entradas disponibles</h3>
            <br></br>
        </div>`;
    }
    else {
        for (let j = 0; j < entradas.length; j++) {
            pass.innerHTML +=
                `<div class="col-lg-4 col-sm-6 mb-4">
                    <div class="portfolio-item">
                        <a class="portfolio-link" onclick="showTicket(${j})"> 
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/2.jpg" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">` + entradas[j].titleEntrada + `</div>
                        </div>
                    </div>
                </div>`
        }
    }
}

/*----- Muestra la interfaz de info del evento -----*/
function showportfolio2() {
    let portf = document.getElementById("portfolio2");
    portf.innerHTML = `<div class="container"> <!--meter en metodo y llamar en showInfo-->
    <div class="row justify-content-center">
        <div class="col-lg-8">
            <div class="modal-body">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase" id="titleInfoEvent"></h2>
                    <br></br> <!-- salto de línea-->
                </div>
                <!-- Portfolio item 1-->
                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                <br />
                <div class="text-center">
                    <p class="text-center" id="descriptionInfoEvent"></p>
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
    if (content4.style.display == 'block') {
        content4.style.display = 'none';
        content1.style.display = 'block';
    }
}

/*----- Muestra la info del evento -----*/
function showInfo(i) {
    let content1 = document.getElementById('portfolio');
    let content2 = document.getElementById('portfolio2');
    content1.style.display = 'none';
    content2.style.display = 'block';
    showportfolio2();
    let titulo = document.getElementById("titleInfoEvent");
    titulo.innerHTML = eventos[i].titleEvento;
    let description = document.getElementById("descriptionInfoEvent");
    description.innerHTML = eventos[i].descriptionEvento;
    showTicketsEvent(i);
    let buttons = document.getElementById("buttons");
    buttons.innerHTML = `<button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" onclick="deleteEvent(${i});">Borrar evento</button>
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal"
        onclick="modifyTicket(${i})">Modificar</button>
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" onclick="goback();">Volver
        atrás</button>`
}

/*----- Botón modificar, muestra formulario -----*/
function modifyTicket(i) {
    num = i;
    let content1 = document.getElementById('portfolio2');
    let content2 = document.getElementById('addEvent2');
    content1.style.display = 'none';
    content2.style.display = 'block';
    let evento = eventos[i];
    let entradas = evento.entradasEvento;
    showForm();
    changesValues(evento);

    let element = document.getElementById('subelementos');
    for (let z = 0; z < entradas.length; z++) {
        element.innerHTML += `<br />
        <div class="form-group">
            <input class="form-control" id="titlePass`+ z + `" type="text"
                placeholder="Título de la entrada *" value="`+ entradas[z].titleEntrada + `"/>
        </div>
        <div class="form-group">
            <input class="form-control" id="pricePass`+ z + `" type="int"
                placeholder="Precio de la entrada *" value="`+ entradas[z].price + `"/>
        </div>
            <div><button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" onclick="deleteTicket(${z});">Borrar entrada 	&#9757;</button></div>
        <br />`;
        estado = false;
    }

    let boton = document.getElementById("botones");
    boton.innerHTML = `
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" onclick="goback();">Volver atrás</button>
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" onclick="saveInfo(${i});">Guardar</button>
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" id="addEvent" onclick="addPass();">Añadir entrada</button>`
}

/*----- Elimina una entrada -----*/
function deleteTicket(z) {
    let entradas = eventos[num].entradasEvento;
    let message = "¿Está seguro que quiere borrar esta entrada?"
    let option = alerta(message);
    if (option == 1) {
        entradas.splice(z, 1);
        let styleTitle = document.getElementById("titlePass" + z);
        styleTitle.style = "color:red";
        styleTitle.ariaDisabled;
        styleTitle.disabled = true;
        let stylePrice = document.getElementById("pricePass" + z);
        stylePrice.style = "color:red";
        stylePrice.disabled = true;
    }
}

/*----- Cambia valores en modificar -----*/
function changesValues(evento) {
    let titleInfoMod = document.getElementById("titleInfo");
    titleInfoMod.innerHTML = "Modificar evento";
    let titulo = document.getElementById("titleEvent");
    titulo.value = evento.titleEvento;
    let descripcion = document.getElementById("descriptionEvent");
    descripcion.value = evento.descriptionEvento;
}

/*----- Guarda info de modificar -----*/
function saveInfo(i) {
    let message = "¿Está seguro que quiere guardar la información modificada?"
    let option = alerta(message);
    if (option == 1) {
        let titulo = document.getElementById("titleEvent").value;
        let descripcion = document.getElementById("descriptionEvent").value;

        if (titulo == "") {
            titulo = "Sin título";
        }
        if (descripcion == "") {
            descripcion = "Sin descripción";
        }

        eventos[i].titleEvento = titulo;
        eventos[i].descriptionEvento = descripcion;

        let entradas = eventos[i].entradasEvento;
        if (entradas.length != 0) {
            for (let x = 0; x < entradas.length; x++) {
                let tituloTicket = document.getElementById("titlePass" + x).value;
                entradas[x].titleEntrada = tituloTicket;
                let precioTicket = document.getElementById("pricePass" + x).value;
                entradas[x].price = precioTicket;
            }
        }
        if (estado == true) {
            let tituloEntrada = document.getElementById("titlePass").value;
            let precioEntrada = document.getElementById("pricePass").value;
            let entradaEvent = new Entrada(tituloEntrada, precioEntrada)
            entradas.push(entradaEvent);
        }

        loadPage();
        showEvent();
        goback();
        estado = false;
    }
    else {
        modifyTicket(i);
    }
}

/*----- Muestra interfaz e info de la entrada -----*/
function showTicket(j) {
    let entrada = eventos[num].entradasEvento[j];
    let content1 = document.getElementById("buyPass");
    let content2 = document.getElementById("portfolio2");
    content2.style.display = 'none';
    content1.style.display = 'block';
    let titulo = document.getElementById("titleTicket");
    titulo.innerHTML = entrada.titleEntrada;
    let description = document.getElementById("priceTicket");
    description.innerHTML = `Precio: ` + entrada.price + `€`;
}

let estado = false;
/*----- Añadir entrada -----*/
function addPass() {
    if (estado == false) {
        let element = document.getElementById('subelementos');
        element.innerHTML += `<br />
                        <div class="form-group">
                            <input class="form-control" id="titlePass" type="text"
                                placeholder="Título de la entrada *"
                                data-sb-validations="required" />
                        </div>
                        <div class="form-group">
                            <input class="form-control" id="pricePass" type="int"
                                placeholder="Precio de la entrada *"
                                data-sb-validations="required" />
                        </div>`;
    }
    estado = true;
}

/*----- Interfaz añadir evento -----*/
function addTicket() {
    let content1 = document.getElementById('portfolio');
    let content2 = document.getElementById('addEvent2');
    content1.style.display = 'none';
    content2.style.display = 'block';
    showForm();
    let titleInformative = document.getElementById("titleInfo");
    titleInformative.innerHTML = "Nuevo evento";
    let boton = document.getElementById("botones")
    boton.innerHTML = `
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" onclick="goback();">Volver atrás</button>
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" onclick="saveEvent();">Crear evento</button>
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" id="addEvent" onclick="addPass();">Añadir entrada</button>`;
}

/*----- Muestra formulario -----*/
function showForm() {
    let content = document.getElementById("addEvent2");
    content.innerHTML =
        `<div class="container"> <!--meter en metodo y llamar en showInfo-->
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="modal-body">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase" id="titleInfo"></h2>
                            <section class="page-section" id="contact" style="background-color:#ffffff">
                                <!--page-section define el espacio entre el titulo y las cajas del form-->
                                <div class="container">
                                    <div id="contactForm">
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
                                    </div>
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

/*----- Borra evento -----*/
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

/*----- Guarda evento creado -----*/
function saveEvent() {
    let message = "¿Está seguro que quiere crear este evento?"
    let option = alerta(message);
    if (option == 1) {
        let titulo = document.getElementById("titleEvent").value;
        let descripcion = document.getElementById("descriptionEvent").value;

        if (titulo == "") {
            titulo = "Sin título";
        }
        if (descripcion == "") {
            descripcion = "Sin descripción";
        }

        let entradas = [];
        let evento = new Evento(titulo, descripcion, entradas);
        eventos.push(evento);

        if (estado == true) {
            let tituloEntrada = document.getElementById("titlePass").value;
            let precio = document.getElementById("pricePass").value;
            if (tituloEntrada == "") {
                tituloEntrada = "Sin título";
            }
            if (precio == "") {
                precio = 100; //precio por defecto
            }
            let entradaEvent = new Entrada(tituloEntrada, precio);
            entradas.push(entradaEvent);
        }
        loadPage();
        showEvent();
        goback();
        estado = false;
    }
    else {
        goback();
        estado = false;
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