import express from 'express';
import * as boardService from './eventsService.js';
import { getEvents } from './eventsService.js';

let p = 0;

const router = express.Router();

router.get('/', (req, res) => {

    const events = getEvents(0, 3);

    res.render('index', {
        events: events
    });

});

router.get('/events', (req, res) => {

    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);

    const events = getEvents(from, to);

    res.render('events', {
        events: events
    });
});

router.get('/event/:id', (req, res) => {

    let event = boardService.getEvent(req.params.id);

    let tickets = boardService.getTickets(event);

    res.render('show_event', { event, tickets });
});

router.get('/event/:id/showTicket/:idt', (req, res) => {

    let event = boardService.getEvent(req.params.id);

    let ticket = boardService.getTicket(event, req.params.idt);

    res.render('show_ticket', { event, ticket });
});

router.get('/event/:id/delete', (req, res) => {
    
    let event = boardService.getEvent(req.params.id);

    res.render('delete_event', {event});
});

router.get('/event/:id/deleted', (req, res) => {

    boardService.deleteEvent(req.params.id);

    res.render('saved_event');

});

router.post('/event/new', (req, res) => {

    let { title, descriptionn } = req.body;

    boardService.addEvent2(title, descriptionn);

    if (p == 1){
        let {titleT, price} = req.body;
        boardService.addTicket2(titleT, price);
        p = 0;
    }

    res.render('saved_event');
});

router.get('/event/:id/modify', (req, res) => {
    let event = boardService.getEvent(req.params.id);
    let tickets = boardService.getTickets(event);
    res.render('modify_event', {event, tickets});
});

router.post('/event/:id/modified', (req, res) => {

    let event = boardService.getEvent(req.params.id);
    let {title, descriptionn} = req.body;

    boardService.changeValues(event, title,descriptionn);

    if (p == 1){    
        let {titleT, price} = req.body;
        boardService.addTicket3(event, titleT, price);
        p = 0;
    }

    res.render('saved_event');
});

router.get('/event/:id/delete/:idt', (req, res) => {
    
    let event = boardService.getEvent(req.params.id);

    let idt = req.params.idt;

    boardService.deleteTicket(event, idt);
});

router.get('/eventNew', (req, res) => {
    let info = req.query.info;
    let response = {
        p : info
    }
    res.json(response);
    p = 1;
});

router.get('/ticketDelete', (req, res) => {
    let id = req.query.info;
    let event = boardService.getEvent("0");
    console.log(event);
    boardService.deleteTicket(event, id);
    let response = {
        "Borrao" :id
    }
    res.json(response);
});

export default router;