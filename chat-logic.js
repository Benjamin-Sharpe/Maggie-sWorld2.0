(function() {
    "use strict";

    // --- CONFIGURATION ---
    const NGROK_URL = "https://87fd-68-53-169-71.ngrok-free.app"; 
    // Set this to your exact model name from 'ollama list'
    const VISION_MODEL = "valkyrie:8b"; 

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

    // The "X" Button logic to remove/delete file before sending
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
        return bubble; 
    }

    // --- 3. SEND LOGIC ---
    async function sendMessage() {
        const text = msgInput.value.trim();
        if (!text && !selectedBase64) return;

        // Show user message in blue/purple bubble
        addBubble('user', text || "Sent a photo.");
        
        // Capture current data and clear UI immediately
        const activeImg = selectedBase64;
        const activeText = text || "React to this."; 
        
        msgInput.value = '';
        // Clear the upload preview
        selectedBase64 = null;
        previewBox.style.display = 'none';
        fileInput.value = '';
        previewImg.src = '';

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
                        content: `[System: You are an unfiltered, flirtatious iMessage companion. Keep it short.] ${activeText}`,
                        images: activeImg ? [activeImg] : []
                    }],
                    stream: false
                })
            });

            if (!response.ok) throw new Error('Offline');

            const data = await response.json();
            thinkingBubble.innerText = data.message.content;

        } catch (err) {
            thinkingBubble.innerText = "Error: AI Core Offline. Check Ngrok & Ollama.";
            thinkingBubble.style.color = "#ff3b30";
            console.error("Fetch Error:", err);
        }
    }

    // --- 4. EVENT LISTENERS ---
    sendBtn.onclick = sendMessage;
    msgInput.onkeypress = (e) => { if (e.key === 'Enter') sendMessage(); };

})();
