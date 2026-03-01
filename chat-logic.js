(function() {
    "use strict";

    // --- CONFIGURATION ---
    const NGROK_URL = "https://87fd-68-53-169-71.ngrok-free.app"; 
    const VISION_MODEL = "huihui_ai/qwen3-vl-abliterated:8b";

    // --- DOM ELEMENTS ---
    const thread = document.getElementById('chat-thread');
    const msgInput = document.getElementById('msg-input');
    const sendBtn = document.getElementById('send-trigger');
    const fileInput = document.getElementById('file-upload');
    const previewBox = document.getElementById('attachment-preview');
    const previewImg = document.getElementById('preview-img');
    const clearBtn = document.getElementById('clear-file');

    let selectedBase64 = null;

    // --- 1. FILE HANDLING (UPLOAD & DELETE) ---
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                // Store base64 without the prefix for Ollama
                selectedBase64 = ev.target.result.split(',')[1];
                // Show the official preview
                previewImg.src = ev.target.result;
                previewBox.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    // The "X" Button logic to remove file
    clearBtn.onclick = () => {
        selectedBase64 = null;
        previewBox.style.display = 'none';
        fileInput.value = ''; // Reset input so same file can be re-selected
        previewImg.src = '';
    };

    // --- 2. BUBBLE GENERATOR ---
    function addBubble(role, text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${role === 'user' ? 'outgoing' : 'incoming'}`;
        
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.innerText = text;
        
        msgDiv.appendChild(bubble);
        thread.appendChild(msgDiv);
        
        // Auto-scroll to bottom
        thread.scrollTop = thread.scrollHeight;
        return bubble; // Return for updating "Thinking..."
    }

    // --- 3. SEND LOGIC ---
    async function sendMessage() {
        const text = msgInput.value.trim();
        if (!text && !selectedBase64) return;

        // Show user message
        addBubble('user', text || "[Image Sent]");
        
        // Cache data and reset UI
        const activeImg = selectedBase64;
        const activeText = text;
        msgInput.value = '';
        clearBtn.onclick(); // Hide preview after sending

        // Add "Thinking" bubble
        const thinkingBubble = addBubble('ai', "...");

        try {
            const response = await fetch(`${NGROK_URL}/api/chat`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true' 
                },
                body: JSON.stringify({
                    model: VISION_MODEL,
                    messages: [{
                        role: "user",
                        content: `[Persona: Naughty/Flirtatious iMessage Companion] ${activeText}`,
                        images: activeImg ? [activeImg] : []
                    }],
                    stream: false
                })
            });

            if (!response.ok) throw new Error('Offline');

            const data = await response.json();
            thinkingBubble.innerText = data.message.content;

        } catch (err) {
            thinkingBubble.innerText = "Error: AI Core Offline. Ensure Ngrok & Ollama are running.";
            thinkingBubble.style.color = "#ff3b30";
        }
    }

    // --- 4. EVENT LISTENERS ---
    sendBtn.onclick = sendMessage;
    msgInput.onkeypress = (e) => { if (e.key === 'Enter') sendMessage(); };

})();
