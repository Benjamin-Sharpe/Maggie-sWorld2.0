(function() {
    "use strict";

    // PASTE YOUR NGROK URL HERE (e.g., https://abcd-123.ngrok-free.app)
    const NGROK_URL = "YOUR_NGROK_URL_HERE"; 
    
    // Defaulting to the Valkyrie model you requested
    const VISION_MODEL = "valkyriesys/eudaimonia-dryad3-vision:8b"; 

    const thread = document.getElementById('chat-thread');
    const msgInput = document.getElementById('msg-input');
    const sendBtn = document.getElementById('send-trigger');
    const fileInput = document.getElementById('file-upload');
    const previewBox = document.getElementById('attachment-preview');
    const previewImg = document.getElementById('preview-img');
    const clearBtn = document.getElementById('clear-file');

    let selectedBase64 = null;

    // Handle Image Selection
    fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                // Strip the metadata prefix (data:image/png;base64,) for Ollama
                selectedBase64 = ev.target.result.split(',')[1];
                previewImg.src = ev.target.result;
                previewBox.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    };

    // Clear Image
    clearBtn.onclick = () => {
        selectedBase64 = null;
        previewBox.style.display = 'none';
        fileInput.value = ''; 
    };

    function addBubble(role, text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${role === 'user' ? 'outgoing' : 'incoming'}`;
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.innerText = text;
        msgDiv.appendChild(bubble);
        thread.appendChild(msgDiv);
        thread.scrollTop = thread.scrollHeight;
        return bubble;
    }

    async function sendMessage() {
        const text = msgInput.value.trim();
        if (!text && !selectedBase64) return;

        // UI Update
        addBubble('user', text || "Sent an image.");
        const currentImg = selectedBase64;
        
        msgInput.value = '';
        selectedBase64 = null;
        previewBox.style.display = 'none';

        const thinkingBubble = addBubble('ai', "...");

        try {
            const response = await fetch(`${NGROK_URL}/api/chat`, {
                method: 'POST',
                // Using text/plain avoids "Preflight" CORS issues with ngrok
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({
                    model: VISION_MODEL,
                    messages: [{
                        role: "user",
                        content: text || "What is in this image?",
                        images: currentImg ? [currentImg] : []
                    }],
                    stream: false
                })
            });

            const data = await response.json();
            thinkingBubble.innerText = data.message.content;

        } catch (err) {
            thinkingBubble.innerText = "Error: Make sure OLLAMA_ORIGINS='*' is set in PowerShell.";
            thinkingBubble.style.color = "#ff3b30";
        }
    }

    sendBtn.onclick = sendMessage;
    msgInput.onkeypress = (e) => { if (e.key === 'Enter') sendMessage(); };
})();
