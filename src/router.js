import express from 'express';
import * as boardService from './eventsService.js';
import { getEvents } from './eventsService.js';
import yesno from 'yesno';

const router = express.Router();
/*
router.get('/', (req, res) => {

    res.render('index', { 
        events: boardService.getEvents() 
    });
});
*/

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

    let tickets = new Map();

    let { title, description } = req.body;

    boardService.addEvent2(title, description, tickets);

    res.render('saved_event');
});

export default router;