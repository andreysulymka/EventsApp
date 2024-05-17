import mongoose from 'mongoose';

const ParticipantModel = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    birthDay: {
        type: String,
        required: true,
    },
    foundThrow: {
        type: String,
        enum: ['Social media', 'Friends', 'Found myself'],
        required: true,
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
    },
});
export default mongoose.model('Participant', ParticipantModel);
