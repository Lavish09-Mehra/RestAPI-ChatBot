import mongoose from 'mongoose';

const UserData = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Data = mongoose.model('Data', UserData)

const ChatResponse = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // optional user link if you later add authentication
        required: false
    },
    prompt: {
        type: String,
        required: true
    },
    response: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Conversation = mongoose.model('Conversation', ChatResponse);
