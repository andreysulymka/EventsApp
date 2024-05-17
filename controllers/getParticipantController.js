import ParticipantModel from '../models/Participant.js';

const gettParticipantController = async (req, res) => {
    try {
        const participantId = req.params.eventId;

        const participants = await ParticipantModel.findOne({
            eventId: participantId,
        });

        res.json(participants);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не вдалось зареєструватись',
        });
    }
};

export default gettParticipantController;
