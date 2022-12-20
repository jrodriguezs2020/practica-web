const events = new Map();
const tickets1 = new Map();
const tickets2 = new Map();

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

    let t1 = new Entrada("Abono General", 37);
    addTicket(t1);
    
}

loadSampleData();

export function addEvent(event) {
    event.id = idd.toString();
    events.set(event.id, event);
    idd++;
}

export function addEvent2(title, description, tickets) {
    let event = new Event(title, description, tickets);
    event.id = idd.toString();
    events.set(event.id, event);
    idd++;
}
/*
export function getEvents(){
    return [...events.values()];
}
*/
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

export function addTicket(ticket) {
    let event = events.get(0);
    ticket.id = idt.toString();

    //event.ticketsEvent.set(ticket.id, ticket);
    //console.log(event.ticketsEvent.size);
    tickets1.set(ticket.id, ticket);
    idt++;
}

export function addTicket1(ticket) {
    ticket.id = idt.toString();
    tickets1.set(ticket.id, ticket);
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

/* como tener solo un addticket para todos los eventos */