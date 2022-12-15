/*const posts = new Map();
let nextId = 0;

addPost({ user: "Pepe", title: "Vendo moto", text: "Barata, barata" });
addPost({ user: "Juan", title: "Compro coche", text: "Pago bien" });

export function addPost(post) {
    let id = nextId++; //por qué si id = 0+1=1 y el primer post es id = 0
    post.id = id.toString();
    posts.set(post.id, post);
}

export function deletePost(id){
    posts.delete(id);
}

export function getPosts(){
    return [...posts.values()];
}

export function getPost(id){
    return posts.get(id);
}*/

const events = new Map();
const tickets1 = new Map();
const tickets2 = new Map();

let idd = 0;
let idt = 0;

addTicket({titleEntrada: "Abono General + Acampada", price: 80});
addTicket1({titleEntrada: "abc", price: 80});

addEvent({titleEvent: "Madrid", descriptionEvent: "Prueba", ticketsEvent: tickets1});
addEvent({titleEvent: "Weekend", descriptionEvent: "beach", ticketsEvent: tickets2});

export function addEvent(event) {
    event.id = idd.toString();
    events.set(event.id, event);
    idd++;
}

export function getEvents(){
    return [...events.values()];
}

export function getEvent(id){
    return events.get(id);
}

export function addTicket(ticket) {
    ticket.id = idt.toString();
    tickets2.set(ticket.id, ticket);
    idt++;
}

export function addTicket1(ticket) {
    ticket.id = idt.toString();
    tickets1.set(ticket.id, ticket);
    idt++;
}

export function getTickets(event){
    return [...event.ticketsEvent.values()];
}

/* como tener solo un addticket para todos los eventos */