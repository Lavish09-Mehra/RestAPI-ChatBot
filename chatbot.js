// Import Express and create the app instance
import express from 'express';
const app = express();

// Limit each user to 20 requests per minute
import { chatLimiter } from "./utils/ratelimit.js";
import 'dotenv/config'; // load environment variables from .env

// Import the AI helper that sends the prompt to Groq
import { generateResponse } from "./utils/ai.js";

// Import the user model for MongoDB storage
import { Data } from './data.js';
import mongoose from 'mongoose';

// Parse JSON request bodies so req.body contains the posted data
app.use(express.json());

import { Conversation } from './data.js';

// Connect the app to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('connected..');
        app.listen(3000, () => {
            console.log("server: http://localhost:3000");
        });
    }).catch((err) => {
        console.log(err);
    });

// Register a new user with username, email, and password
app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new Data({
            username,
            email,
            password
        });

        await user.save(); // save the new user in MongoDB

        res.status(201).json({
            message: "User registered successfully",
            user
        });
    } catch (err) {
        res.status(501).json({ message: err.message });
    }
});

// Get all saved users from the database
app.get('/api/users', async (req, res) => {
    try {
        const users = await Data.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
// Simple homepage to check whether the server is running
app.get('/', (req, res) => {
    res.end('Server started.. listening Now');
});

// Chat route: receive a prompt, send it to the AI, return the reply,
// and save the prompt + answer in MongoDB for later history review
app.post("/api/chat", chatLimiter, async (req, res) => {
    try {
        const { prompt } = req.body; // get the user message from the request body

        if (!prompt || prompt.length > 3000) { // reject empty or too-long prompts
            return res.status(400).json({
                message: "Prompt too long."
            });
        }

        const reply = await generateResponse(prompt); // call the AI helper

        // Save this chat message in the database so it can be shown later in chat history
        const chat = new Conversation({
            prompt,
            response: reply
        });

        await chat.save(); // store the prompt and AI response

        res.json({
            success: true,
            reply,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

// Get recent chat history from the database and return it as JSON
app.get('/api/chat-history', async (req, res) => {
    try {
        const chat = await Conversation.find().sort({
            createdAt: -1 // newest chat records first
        });

        res.json(chat); // send all chat records to the client
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});