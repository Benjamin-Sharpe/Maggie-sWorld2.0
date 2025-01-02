require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Environment Variable Check
if (!process.env.OPENAI_API_KEY) {
    console.error('Missing OpenAI API key in .env file');
    process.exit(1);
}

// AI Chat Endpoint
app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                model: 'gpt-4',
                prompt: userMessage,
                max_tokens: 150,
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        );

        res.json({ reply: response.data.choices[0].text.trim() });
    } catch (error) {
        console.error('Error with OpenAI API:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to get a response from AI' });
    }
});

// Health Check Endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is running' });
});

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
