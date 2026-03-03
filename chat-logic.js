(function() {
    const NGROK_URL = "YOUR_NGROK_URL"; // Example: https://1234-abcd.ngrok-free.app
    const VISION_MODEL = "valkyriesys/eudaimonia-dryad3-vision:8b"; 

    const thread = document.getElementById('chat-thread');
    const msgInput = document.getElementById('msg-input');
    const sendBtn = document.getElementById('send-trigger');
    const fileInput = document.getElementById('file-upload');
    const previewBox = document.getElementById('attachment-preview');
    const previewImg = document.getElementById('preview-img');

    let selectedBase64 = null;

    fileInput.onchange = (e) => {
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
    };

    document.getElementById('clear-file').onclick = () => {
        selectedBase64 = null;
        previewBox.style.display = 'none';
        fileInput.value = '';
    };

    async function sendMessage() {
        const text = msgInput.value.trim();
        if (!text && !selectedBase64) return;

        appendMessage('user', text || "Sent an image.");
        const activeImg = selectedBase64;
        
        msgInput.value = '';
        selectedBase64 = null;
        previewBox.style.display = 'none';

        const aiBubble = appendMessage('ai', "...");

        try {
            const response = await fetch(`${NGROK_URL}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({
                    model: VISION_MODEL,
                    messages: [{ role: "user", content: text, images: activeImg ? [activeImg] : [] }],
                    stream: false
                })
            });
            const data = await response.json();
            aiBubble.innerText = data.message.content;
        } catch (e) {
            aiBubble.innerText = "Error: Check OLLAMA_ORIGINS in PowerShell.";
        }
    }

    function appendMessage(role, text) {
        const div = document.createElement('div');
        div.className = `message ${role === 'user' ? 'outgoing' : 'incoming'}`;
        div.innerHTML = `<div class="bubble">${text}</div>`;
        thread.appendChild(div);
        thread.scrollTop = thread.scrollHeight;
        return div.querySelector('.bubble');
    }

    sendBtn.onclick = sendMessage;
    msgInput.onkeypress = (e) => { if(e.key === 'Enter') sendMessage(); };
})();
