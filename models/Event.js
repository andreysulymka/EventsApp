import mongoose from 'mongoose';

const EventModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    eventDate: {
        type: String,
        required: true,
    },
    organizer: {
        type: String,
        required: true,
    },
    participants: [
        {
            fullName: String,
            email: String,
        },
    ],
});
export default mongoose.model('Event', EventModel);
