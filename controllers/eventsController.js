import EventModel from '../models/Event.js';

const getEvents = async (req, res) => {
    try {
        const events = await EventModel.find();
        res.json(events)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Не вдалось отримати події'})
    }
};

export default getEvents;