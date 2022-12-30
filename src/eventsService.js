const events = new Map();
const tickets1 = new Map();
const tickets2 = new Map();
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
//let tickets = new Map();
//let events = new Map();

export function loadSampleData() {
    /*addEvent({titleEvent: "Madrid", descriptionEvent: "Prueba", ticketsEvent: new Map()});
    addEvent({titleEvent: "Weekend", descriptionEvent: "beach", ticketsEvent: new Map()});

    addTicket({titleTicket: "Abono General + Acampada", price: 80});
    addTicket({titleTicket: "abc", price: 80});

    addEvent({titleEvent: "paco", descriptionEvent: "Prueba", ticketsEvent: tickets2});
    addEvent({titleEvent: "manolo", descriptionEvent: "beach", ticketsEvent: tickets2});

    addTicket({titleTicket: "Abono General + Acampada", price: 80});*/

    let e1 = new Evento("Madrid Salvaje", "Si eres uno de los nuestros, este es tu sitio.", tickets1);
    addEvent(e1);

    let e2 = new Evento("Madrid", "Si eres uno de los nuestros, este es tu sitio.", tickets2);
    addEvent(e2);

    let t3 = new Entrada("Manolo", 137);
    addTicket(e2, t3);

    let t1 = new Entrada("Abono General", 37);
    addTicket(e1, t1);

    let t2 = new Entrada("VIP", 137);
    addTicket(e1, t2);
    addTicket(e1, t3);
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
    let ticket = new Entrada (titleT, price);
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

export function changeValuesTickets(event, title, priceT, id) {
    let ticket = event.ticketsEvent.get(id);
    if(ticket != undefined){
        ticket.titleTicket = title;
        ticket.price = priceT;
    }  
}

export function ola(event, key) {
    let k = event.ticketsEvent.keys();
    for(let value of k.values()){
        console.log(value);
    }
}


export function deleteTicket(event, id) {
    return event.ticketsEvent.delete(id);
}
