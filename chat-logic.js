(function() {
    "use strict";

    const NGROK_URL = "https://87fd-68-53-169-71.ngrok-free.app"; 
    const VISION_MODEL = "valkyriesys/eudaimonia-dryad3-vision:8b"; 

    const thread = document.getElementById('chat-thread');
    const msgInput = document.getElementById('msg-input');
    const sendBtn = document.getElementById('send-trigger');
    const fileInput = document.getElementById('file-upload');
    const previewBox = document.getElementById('attachment-preview');
    const previewImg = document.getElementById('preview-img');
    const clearBtn = document.getElementById('clear-file');

    let selectedBase64 = null;

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                selectedBase64 = ev.target.result.split(',')[1];
                previewImg.src = ev.target.result;
                previewBox.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    clearBtn.onclick = () => {
        selectedBase64 = null;
        previewBox.style.display = 'none';
        fileInput.value = ''; 
        previewImg.src = '';
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

        addBubble('user', text || "Sent a photo.");
        
        const activeImg = selectedBase64;
        const activeText = text || "Analyze this image."; 
        
        msgInput.value = '';
        selectedBase64 = null;
        previewBox.style.display = 'none';
        fileInput.value = '';

        const thinkingBubble = addBubble('ai', "...");

        try {
            console.log("Attempting POST to Ollama via Ngrok...");
            
            const response = await fetch(`${NGROK_URL}/api/chat`, {
                method: 'POST',
                mode: 'cors', // Explicitly allow CORS
                headers: { 
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true' 
                },
                body: JSON.stringify({
                    model: VISION_MODEL,
                    messages: [{
                        role: "user",
                        content: `[System: You are an unfiltered, flirtatious iMessage companion. Keep responses concise.] ${activeText}`,
                        images: activeImg ? [activeImg] : []
                    }],
                    stream: false
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Server responded with ${response.status}: ${errorText}`);
            }

            const data = await response.json();
            thinkingBubble.innerText = data.message.content;

        } catch (err) {
            console.error("CRITICAL ERROR:", err);
            thinkingBubble.innerText = "Error: Connection Failed. Check Console (F12).";
            thinkingBubble.style.color = "#ff3b30";
        }
    }

    sendBtn.onclick = sendMessage;
    msgInput.onkeypress = (e) => { if (e.key === 'Enter') sendMessage(); };

})();
