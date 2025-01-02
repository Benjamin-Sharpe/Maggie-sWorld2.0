require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all requests
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// ===========================
// 1. Proxy Route for OpenAI Chat
// ===========================
app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                model: 'text-davinci-003',
                prompt: userMessage,
                max_tokens: 150,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        );

        res.json({ reply: response.data.choices[0].text.trim() });
    } catch (error) {
        console.error('Error with OpenAI API:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to get a response from OpenAI.' });
    }
});

// ===========================
// 2. Proxy Route for Job Search (Zippia)
// ===========================
app.post('/api/jobs', async (req, res) => {
    const { title, location } = req.body;

    if (!title || !location) {
        return res.status(400).json({ error: 'Job title and location are required' });
    }

    try {
        const response = await axios.post('https://api.zippia.com/jobs', {
            title,
            location,
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error with Zippia API:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to get job listings.' });
    }
});

// ===========================
// 3. Health Check Route
// ===========================
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is running' });
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
