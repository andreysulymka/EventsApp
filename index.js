import express from 'express';
import mongoose from 'mongoose';

import participantValidator from './validations/participantValidator.js';
import postParticipantController from './controllers/postParticipantController.js';
import getEvents from './controllers/eventsController.js';
import gettParticipantController from './controllers/getParticipantController.js';

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
app.use(express.json());

app.get('/', getEvents);

app.post('/:eventId/register', participantValidator, postParticipantController);


app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server Ok');
});
