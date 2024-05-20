import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import participantValidator from './validations/participantValidator.js';
import postParticipantController from './controllers/postParticipantController.js';
import getEvents from './controllers/eventsController.js';
import getParticipantController from './controllers/getParticipantController.js';

mongoose
    .connect(
        'mongodb+srv://asulymka89:wwwwww@eventsappcluster.ceawd8i.mongodb.net/'
    )
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

const PORT = process.env.PORT || 4444;

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server Ok');
});
