import EventModel from '../models/Event.js';

export const searchParticipantsByName = async (req, res) => {
    const { eventId } = req.params;
    const { fullName } = req.query;
    try {
        const participants = await EventModel.findOne(
            {
                _id: eventId,
                'participants.fullName': { $regex: fullName, $options: 'i' },
            },
            { 'participants.$': 1 }
        );
        res.status(200).json(participants ? participants.participants : []);
    } catch (error) {
        console.error('Error searching participants by name', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const searchParticipantsByEmail = async (req, res) => {
    const { eventId } = req.params;
    const { email } = req.query;
    try {
        const participants = await EventModel.findOne(
            {
                _id: eventId,
                'participants.email': { $regex: email, $options: 'i' },
            },
            { 'participants.$': 1 }
        );
        res.status(200).json(participants ? participants.participants : []);
    } catch (error) {
        console.error('Error searching participants by email', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
