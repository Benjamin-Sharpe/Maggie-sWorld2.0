// ===========================
// 1. Interactive Piano Tool
// ===========================

// Piano Notes Array
const notes = [
    { note: 'C3', isSharp: false }, { note: 'C#3', isSharp: true }, { note: 'D3', isSharp: false }, { note: 'D#3', isSharp: true }, { note: 'E3', isSharp: false },
    { note: 'F3', isSharp: false }, { note: 'F#3', isSharp: true }, { note: 'G3', isSharp: false }, { note: 'G#3', isSharp: true }, { note: 'A3', isSharp: false },
    { note: 'A#3', isSharp: true }, { note: 'B3', isSharp: false },
    { note: 'C4', isSharp: false }, { note: 'C#4', isSharp: true }, { note: 'D4', isSharp: false }, { note: 'D#4', isSharp: true }, { note: 'E4', isSharp: false },
    { note: 'F4', isSharp: false }, { note: 'F#4', isSharp: true }, { note: 'G4', isSharp: false }, { note: 'G#4', isSharp: true }, { note: 'A4', isSharp: false },
    { note: 'A#4', isSharp: true }, { note: 'B4', isSharp: false },
    { note: 'C5', isSharp: false }, { note: 'C#5', isSharp: true }, { note: 'D5', isSharp: false }, { note: 'D#5', isSharp: true }, { note: 'E5', isSharp: false }
];

// Create Synth for Piano Sounds
const synth = new Tone.PolySynth(Tone.Synth).toDestination();
let recordedNotes = [];
let isRecording = false;

// Generate Piano Keys
const pianoContainer = document.getElementById('piano');
notes.forEach(({ note, isSharp }) => {
    const key = document.createElement('div');
    key.className = isSharp ? 'black-key' : 'white-key';
    key.dataset.note = note;

    // Play Note and Animate
    key.addEventListener('click', () => playNoteAndAnimate(note, key));
    pianoContainer.appendChild(key);
});

// Play Note and Animate Key
function playNoteAndAnimate(note, keyElement) {
    synth.triggerAttackRelease(note, '8n');
    keyElement.classList.add('pressed');
    setTimeout(() => keyElement.classList.remove('pressed'), 150);

    if (isRecording) {
        recordedNotes.push({ note, time: Tone.now() });
    }
}

// Record and Playback
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
// Job Search Tool
// ===========================

document.getElementById('search-jobs-btn').addEventListener('click', async () => {
    const jobTitle = document.getElementById('job-title').value;
    const jobLocation = document.getElementById('job-location').value;
    const jobResults = document.getElementById('job-results');

    // Clear previous results
    jobResults.innerHTML = '';

    // Validate inputs
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

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        if (data.jobs && data.jobs.length > 0) {
            jobResults.innerHTML = data.jobs
                .slice(0, 5) // Limit to top 5 results
                .map(
                    (job) =>
                        `<div class="job-result">
                            <h3>${job.title}</h3>
                            <p>${job.company} - ${job.location}</p>
                            <p><strong>Description:</strong> ${job.description || 'N/A'}</p>
                        </div>`
                )
                .join('');
        } else {
            jobResults.innerHTML = '<p>No jobs found. Please try another search.</p>';
        }
    } catch (error) {
        console.error('Error fetching job results:', error);
        jobResults.innerHTML = '<p>Failed to fetch job results. Please try again later.</p>';
    }
});
