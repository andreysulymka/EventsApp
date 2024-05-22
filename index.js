import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import participantValidator from './validations/participantValidator.js';
import postParticipantController from './controllers/postParticipantController.js';
import getEvents from './controllers/eventsController.js';
import getParticipantController from './controllers/getParticipantController.js';
import {
    getEventsSortedByTitle,
    getEventsSortedByEventDate,
    getEventsSortedByOrganizer,
} from './controllers/sortEventsController.js';

import {
    searchParticipantsByName,
    searchParticipantsByEmail,
} from './controllers/searchParticipants.js';

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('DB ok');
    })
    .catch((err) => {
        console.log('DB error', err);
    });

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', getEvents);

app.post('/:eventId/register', participantValidator, postParticipantController);
app.get('/:eventId/participants', getParticipantController);

app.get('/events/sort/title', getEventsSortedByTitle);
app.get('/events/sort/eventDate', getEventsSortedByEventDate);
app.get('/events/sort/organizer', getEventsSortedByOrganizer);

app.get('/:eventId/participants/searchByName', searchParticipantsByName);
app.get('/:eventId/participants/searchByEmail', searchParticipantsByEmail);

const PORT = process.env.PORT || 4444;

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server Ok');
});
