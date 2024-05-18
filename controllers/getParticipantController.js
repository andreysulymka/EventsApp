import EventModel from '../models/Event.js';

const getParticipantController = async (req, res) => {
    try {
        const eventId = req.params.eventId;
        // Знайдіть лише одну подію з відповідним eventId
        const event = await EventModel.findOne({ _id: eventId }).populate(
            'participants'
        );
        if (!event) {
            return res.status(404).json({ message: 'Подія не знайдена' });
        }
        res.json(event.participants);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не вдалося отримати учасників події',
        });
    }
};

export default getParticipantController;
