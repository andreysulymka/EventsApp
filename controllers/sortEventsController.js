import EventModel from '../models/Event.js';

export const getEventsSortedByTitle = async (req, res) => {
    try {
        const events = await EventModel.find().sort({ title: 'asc' });
        res.status(200).json(events);
    } catch (error) {
        console.error('Error fetching events sorted by title', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getEventsSortedByEventDate = async (req, res) => {
    try {
        const events = await EventModel.find().sort({ eventDate: 'asc' });
        res.status(200).json(events);
    } catch (error) {
        console.error('Error fetching events sorted by event date', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getEventsSortedByOrganizer = async (req, res) => {
    try {
        const events = await EventModel.find().sort({ organizer: 'asc' });
        res.status(200).json(events);
    } catch (error) {
        console.error('Error fetching events sorted by organizer', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
