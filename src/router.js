import express from 'express';
import * as boardService from './eventsService.js';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('index', { 
        events: boardService.getEvents() 
    });
});

router.get('/event/:id', (req, res) => {

    let event = boardService.getEvent(req.params.id);
    let tickets = boardService.getTickets(event);

    res.render('show_event', { event , tickets});
});

export default router;