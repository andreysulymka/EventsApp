import { validationResult } from 'express-validator';
import ParticipantModel from '../models/Participant.js';
import EventModel from '../models/Event.js';

const postParticipantController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }
    try {
        const eventId = req.params.eventId;
        const { fullName, email, birthDay, foundThrow } = req.body;

        if (!fullName || !email || !birthDay) {
            return res
                .status(400)
                .json({ message: "Потрібно передати всі обов'язкові поля" });
        }
        const foundThrowValue = foundThrow || undefined;

        const participant = new ParticipantModel({
            fullName,
            email,
            birthDay,
            foundThrow: foundThrowValue,
        });
        const savedParticipant = await participant.save();

        const fullParticipant = await ParticipantModel.findById(
            savedParticipant._id
        );

        const event = await EventModel.findOne({ _id: eventId });
        if (!event) {
            return res.status(404).json({ message: 'Подія не знайдена' });
        }
        event.participants.push(fullParticipant);
        await event.save();

        res.status(201).json(fullParticipant);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Не вдалось зареєструватись' });
    }
};

export default postParticipantController;
