
/*----- Muestra los eventos en la página principal -----*/
/* Habrá que hacer el for con la longitud de la lista */
let events = document.getElementById('showEvents');
for (let i = 0; i < 5; i++) {
    events.innerHTML +=
        `<div class="col-lg-4 col-sm-6 mb-4">
        <div class="portfolio-item">
            <a class="portfolio-link" onclick="showInfo();">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
            </a>
            <div class="portfolio-caption">
                <div class="portfolio-caption-heading">Título del evento</div>
            </div>
        </div>
    </div>`
};

let pass = document.getElementById('showPass');
for (let i = 0; i < 3; i++) {
    pass.innerHTML +=
        `<div class="col-lg-4 col-sm-6 mb-4">
        <div class="portfolio-item">
            <a class="portfolio-link" href="#buyPass"> 
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
            </a>
            <div class="portfolio-caption">
                <div class="portfolio-caption-heading">Título de la entrada</div>
            </div>
        </div>
    </div>`
}


/* Se puede unir goback con showInfo */
function goback() {
    let content1 = document.getElementById('portfolio');
    let content2 = document.getElementById('portfolio2');
    content1.style.display = 'block';
    content2.style.display = 'none';
}

function showInfo() {
    let content1 = document.getElementById('portfolio');
    let content2 = document.getElementById('portfolio2');
    content1.style.display = 'none';
    content2.style.display = 'block';
}

function addPass() {
    let element = document.getElementById('subelementos');
    element.innerHTML += `<div class="form-group">
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

/* MENSAJE DE CONFIRMACIÓN */
function alerta() {
    var mensaje;
    var opcion = confirm("Clicka en Aceptar o Cancelar");
    if (opcion == true) {
        /* SE GUARDARÁ LA INFORMACIÓN DE LA ENTRADA*/
    } else {
        /* SALDRÁ AL MENÚ PRINCIPAL */
    }
}