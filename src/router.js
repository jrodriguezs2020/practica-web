import express from 'express';
import * as boardService from './eventsService.js';
import { getEvents } from './eventsService.js';

const router = express.Router();
/*
router.get('/', (req, res) => {

    res.render('index', { 
        events: boardService.getEvents() 
    });
});
*/

router.get('/', (req, res) => {

    const events = getEvents(0,3);

    res.render('index', {
        events: events
    });
});

router.get('/events', (req, res) => {

    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);

    const events = getEvents(from,to);

    res.render('events', {
        events: events
    });
});

router.get('/event/:id', (req, res) => {

    let event = boardService.getEvent(req.params.id);
    let tickets = boardService.getTickets(event);

    res.render('show_event', { event , tickets});
});

router.get('/event/:id/showTicket/:id', (req, res) => {

    let ticket = boardService.getTicket(req.params.id);

    res.render('show_ticket', {ticket});
});


export default router;