import { validationResult } from 'express-validator';
import ParticipantModel from '../models/Participant.js';

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
        const foundThrowValue = req.body.foundThrow
            ? req.body.foundThrow
            : undefined;

        const participant = new ParticipantModel({
            eventId,
            fullName,
            email,
            birthDay,
            foundThrow: foundThrowValue,
        });
        const savedParticipant = await participant.save();
        res.status(201).json(savedParticipant);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не вдалось зареєструватись',
        });
    }
};

export default postParticipantController;
