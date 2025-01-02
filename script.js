// ===========================
// 1. Interactive Piano Tool
// ===========================

// Expanded Notes Array for Piano
const notes = [
    'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3',
    'G3', 'G#3', 'A3', 'A#3', 'B3',
    'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4',
    'G4', 'G#4', 'A4', 'A#4', 'B4',
    'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5',
    'G5', 'G#5', 'A5', 'A#5', 'B5', 'C6'
];
const pianoContainer = document.getElementById('piano');
const synth = new Tone.PolySynth(Tone.Synth).toDestination();
let recordedNotes = [];
let isRecording = false;

// Generate Piano Keys
notes.forEach((note) => {
    const key = document.createElement('div');
    const isSharp = note.includes('#');
    key.className = isSharp ? 'black-key' : 'white-key';
    key.textContent = note;
    key.dataset.note = note;

    // Play Note on Click
    key.addEventListener('click', () => playNoteAndAnimate(note, key));
    pianoContainer.appendChild(key);
});

// Play Note and Animate Key
function playNoteAndAnimate(note, keyElement) {
    synth.triggerAttackRelease(note, '8n');
    keyElement.classList.add('pressed');
    setTimeout(() => {
        keyElement.classList.remove('pressed');
    }, 150);

    if (isRecording) {
        recordedNotes.push({ note, time: Tone.now() });
    }
}

// Record and Playback Buttons
document.getElementById('record-btn').addEventListener('click', () => {
    isRecording = !isRecording;
    if (isRecording) {
        recordedNotes = [];
        alert('Recording started. Play some keys!');
        document.getElementById('record-btn').textContent = 'Stop Recording';
    } else {
        alert('Recording stopped!');
        document.getElementById('record-btn').textContent = 'Record';
    }
});

document.getElementById('play-btn').addEventListener('click', () => {
    if (recordedNotes.length === 0) {
        alert('No notes recorded to play back!');
        return;
    }
    const startTime = recordedNotes[0].time;
    recordedNotes.forEach(({ note, time }) => {
        const keyElement = document.querySelector(`[data-note="${note}"]`);
        setTimeout(() => {
            playNoteAndAnimate(note, keyElement);
        }, (time - startTime) * 1000);
    });
});

// ===========================
// 2. Gallery Tool
// ===========================

document.getElementById('create-collage-btn').addEventListener('click', () => {
    const fileInput = document.getElementById('file-input');
    const galleryPreview = document.getElementById('gallery-preview');
    galleryPreview.innerHTML = '';

    Array.from(fileInput.files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = document.createElement('img');
            img.src = event.target.result;
            img.className = 'gallery-image';
            galleryPreview.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});

// ===========================
// 3. AI Chat Tool
// ===========================

document.getElementById('send-btn').addEventListener('click', async () => {
    const chatInput = document.getElementById('chat-input').value;
    const chatOutput = document.getElementById('chat-output');

    if (!chatInput) {
        alert('Please type a message!');
        return;
    }

    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'text-davinci-003',
                prompt: chatInput,
                max_tokens: 100,
            }),
        });

        const data = await response.json();
        const reply = data.choices[0]?.text.trim() || 'No response received.';
        chatOutput.innerHTML = `<p>${reply}</p>`;
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to communicate with AI. Please try again later.');
    }
});

// ===========================
// 4. Job Search Tool
// ===========================

document.getElementById('search-jobs-btn').addEventListener('click', async () => {
    const jobTitle = document.getElementById('job-title').value;
    const jobLocation = document.getElementById('job-location').value;
    const jobResults = document.getElementById('job-results');

    if (!jobTitle || !jobLocation) {
        alert('Please enter both job title and location!');
        return;
    }

    try {
        const response = await fetch('https://api.zippia.com/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: jobTitle,
                location: jobLocation,
            }),
        });

        const data = await response.json();
        jobResults.innerHTML = data.jobs
            .slice(0, 5)
            .map(
                (job) =>
                    `<div class="job-result"><h3>${job.title}</h3><p>${job.company} - ${job.location}</p></div>`
            )
            .join('');
    } catch (error) {
        console.error('Error:', error);
        jobResults.innerHTML = '<p>Failed to fetch job results. Please try again later.</p>';
    }
});

// ============================
// Helper: Placeholder Features
// ============================
console.log('All tools are active and ready!');

