const events = new Map();
const tickets1 = new Map();
const tickets2 = new Map();
const tickets3 = new Map();
const tickets4 = new Map();
const tickets5 = new Map();
const tickets6 = new Map();
let last;

class Evento {
    constructor(titleEvent, descriptionEvent, ticketsEvent) {
        this.titleEvent = titleEvent;
        this.descriptionEvent = descriptionEvent;
        this.ticketsEvent = ticketsEvent;
    }
}

class Entrada {
    constructor(titleTicket, price) {
        this.titleTicket = titleTicket;
        this.price = price;
    }
}

let idd = 0;
let idt = 0;

export function loadSampleData() {

    let e1 = new Evento("Madrid Salvaje", "Madrid Salvaje nació con el fin de derribar lo políticamente correcto, sin prejuicios. Nació como un espacio creado por y para los amantes de la música urbana, como un punto de encuentro entre los artistas más reconocidos y los nombres más emergentes de la escena underground del país. En muy poco tiempo nos hicimos grandes, conquistamos Madrid e hicimos que se nos escuchase. Madrid Salvaje es el punto de encuentro de la música urbana durante dos días de festival, con más de 35 de los artistas de rap y trap más importantes del país actuando en 3 escenarios. Todo ello acompañado de exhibiciones de skate, graffiti, foodtrucks y mucho más. Si eres uno de los nuestros, este es tu sitio.", tickets1);
    addEvent(e1);
    let t11 = new Entrada("Abono General", 37);
    let t21 = new Entrada("Abono General + Promo Bebida", 52);
    addTicket(e1, t11);
    addTicket(e1, t21);

    let e2 = new Evento("Weekend Beach Festival", "Uno de los grandes escenarios musicales en el calendario de verano. Un regreso que cumplirá las expectativas de público y organización. Con más de 80 artistas que pasarán por el recinto del festival en esta séptima edición destacando artistas internacionales como Bastille o Nicky Jam, que encabezarán esta edición del festival junto a muchos otros. Conciertos espectaculares en un entorno único con todos los accesos y comodidades harán del festival una de las citas musicales imprescindibles del verano en nuestro país.", tickets2);
    addEvent(e2);
    let t12 = new Entrada("Abono General", 55);
    let t22 = new Entrada("Abono General + Acampada", 80);
    addTicket(e2, t12);
    addTicket(e2, t22);

    let e3 = new Evento("The Juergas Rock Festival", "¡BOOM! Madrid está más que preparada para recibiros los días 02, 03, 04 y 05 de agosto del año que viene, como lo oyes, ¡4 pedazo de días de juerga! Y no va a ser una juerga cualquiera, porque además vamos a celebrar nuestro  X ANIVERSARIO. Se cumplen diez añazos de la primera vez que se celebró la primera edición del que ahora es uno de los mejores festivales de rock en nuestro país, así que, prepararos, que la vamos a liar bien fuerte. ¡APUNTATE YA!", tickets3);
    addEvent(e3);
    let t13 = new Entrada("Abono Total Immersion", 110);
    addTicket(e3, t13);

    let e4 = new Evento("Guitar BCN", "En 2023 Guitar BCN continuará trayendo una programación ecléctica y cosmopolita a la ciudad de Barcelona, pivotando como siempre sobre artistas que tienen una pasión común por las guitarras y todo lo que tenga que ver con el mundo de las seis cuerdas. El evento, que abarca una gran variedad de estilos y generos, volvera a recorrer algunas de las salas y espacios más representativos de la ciudad condal. Apolo, Palau de la Música Catalana, Razzmattazz y Sala Paral·lel 62 son solo algunos de los lugares donde podrás disfrutar de estas descargas de música en directo.", tickets4);
    addEvent(e4);
    let t14 = new Entrada("Abono General", 38);
    addTicket(e4, t14);

    let e5 = new Evento("Mallorca Live Festival", "El festival internacional de música más importante de las Islas Baleares. Mallorca Live Festival regresa en 2022 a su formato original para que puedas disfrutar de tus artitas favoritos en la mejor compañía. ¡Vivirás una experiencia increíble!", tickets5);
    addEvent(e5);
    let t15 = new Entrada("Abono 3 días", 119);
    addTicket(e5, t15);

    let e6 = new Evento("City Festival", "City Festival será la primera edición de un evento que nunca antes se había hecho en Huelva. Un espacio multicultural donde dar cabida a diferentes actividades, conciertos, exposiciones, talleres, gastronomía, comercios artesanales... dando vida a uno de los parques más emblemáticos de Huelva, ubicado en el centro de la ciudad y con vistas inmejorables a la ría. Durante tres días disfrutaremos de un abanico musical muy amplio, desde los artistas y temas de la actualidad hasta los éxitos más conocidos de los años 80 en adelante, que seguro harán volver a la juventud a más de uno. Ven a vivir la primera edición de City Festival Huelva y que no te lo cuenten!!", tickets6);
    addEvent(e6);
    let t16 = new Entrada("Abono 3 días", 55);
    addTicket(e6, t16);

}

loadSampleData();

export function addEvent(event) {
    event.id = idd.toString();
    events.set(event.id, event);
    idd++;
}

export function addEvent2(title, descriptionn) {
    let tickets = new Map();
    let event = new Evento(title, descriptionn, tickets);
    event.id = idd.toString();
    events.set(event.id, event);
    idd++;
    last = event;
}

export function getEvents(from, to) {
    let values = [...events.values()];
    if (from !== undefined) {
        return values.slice(from, to);
    } else {
        return values;
    }
}

export function getEvent(id) {
    return events.get(id);
}

export function addTicket2(titleT, price) {
    let event = last;
    let ticket = new Entrada(titleT, price);
    ticket.id = idt.toString();
    event.ticketsEvent.set(ticket.id, ticket);
    idt++;
}

export function addTicket(event, ticket) {
    ticket.id = idt.toString();
    event.ticketsEvent.set(ticket.id, ticket);
    idt++;
}

export function addTicket3(event, titleT, price) {
    let ticket = new Entrada(titleT, price);
    ticket.id = idt.toString();
    event.ticketsEvent.set(ticket.id, ticket);
    idt++;
}

export function getTickets(event) {
    return [...event.ticketsEvent.values()];
}

export function getTicket(event, id) {
    return event.ticketsEvent.get(id);
}

export function deleteEvent(id) {
    return events.delete(id);
}

export function changeValues(event, title, descriptionn) {
    event.titleEvent = title;
    event.descriptionEvent = descriptionn;
}

export function changeValuesTickets(event, titleT, priceT, id) {
    let ticket = event.ticketsEvent.get(id);
    if (ticket != undefined) {
        ticket.titleTicket = titleT;
        ticket.price = priceT;
    }
}

export function deleteTicket(event, id) {
    return event.ticketsEvent.delete(id);
}
