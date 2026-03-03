(function() {
    "use strict";

    // Update this URL whenever you restart ngrok
    const NGROK_URL = ""; 
    const VISION_MODEL = "valkyriesys/eudaimonia-dryad3-vision:8b"; 

    const thread = document.getElementById('chat-thread');
    const msgInput = document.getElementById('msg-input');
    const sendBtn = document.getElementById('send-trigger');
    const fileInput = document.getElementById('file-upload');
    const previewBox = document.getElementById('attachment-preview');
    const previewImg = document.getElementById('preview-img');
    const clearBtn = document.getElementById('clear-file');

    let selectedBase64 = null;

    fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                // Extracts only the Base64 data part for the Ollama API
                selectedBase64 = ev.target.result.split(',')[1];
                previewImg.src = ev.target.result;
                previewBox.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    };

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

        addBubble('user', text || "(Image Sent)");
        
        const activeText = text;
        const activeImg = selectedBase64;

        // Reset input immediately for UX
        msgInput.value = '';
        selectedBase64 = null;
        previewBox.style.display = 'none';

        const thinkingBubble = addBubble('ai', "...");

        try {
            const response = await fetch(`${NGROK_URL}/api/chat`, {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'text/plain' }, // Standard header for compatibility
                body: JSON.stringify({
                    model: VISION_MODEL,
                    messages: [{
                        role: "user",
                        content: text,
                        images: activeImg ? [activeImg] : []
                    }],
                    stream: false
                })
            });

            if (!response.ok) throw new Error('Network response was not ok');
            
            const data = await response.json();
            thinkingBubble.innerText = data.message.content;

        } catch (err) {
            console.error("Fetch Error:", err);
            thinkingBubble.innerText = "Error connecting to Ollama. Check CORS and ngrok.";
            thinkingBubble.style.color = "#ff3b30";
        }
    }

    sendBtn.onclick = sendMessage;
    msgInput.onkeypress = (e) => { if (e.key === 'Enter') sendMessage(); };
})();
