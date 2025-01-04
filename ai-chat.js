
// ===========================
// AI Chat Tool
// ===========================

// Elements
const chatThread = document.getElementById('chat-thread');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-btn');

// Event Listener for Send Button
sendButton.addEventListener('click', async () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) {
        alert('Please enter a message!');
        return;
    }

    // Display User Message
    addMessageToThread(userMessage, 'user');

    // Clear Input Field
    chatInput.value = '';

    try {
        // Send Message to AI
        const response = await fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage }),
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        const aiReply = data.reply || 'Sorry, I couldn't process that.';

        // Display AI Response
        addMessageToThread(aiReply, 'ai');
    } catch (error) {
        console.error('Error communicating with AI:', error);
        addMessageToThread('Error: Unable to fetch response. Try again later.', 'error');
    }
});

// Function to Add Message to Chat Thread
function addMessageToThread(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = message;
    chatThread.appendChild(messageDiv);

    // Scroll to the Latest Message
    chatThread.scrollTop = chatThread.scrollHeight;
}
