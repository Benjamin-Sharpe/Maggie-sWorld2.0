function checkURLs() {
    let inputs = document.querySelectorAll(".video-url");
    let submitButton = document.getElementById("submitVideos");

    let hasURL = Array.from(inputs).some(input => input.value.trim() !== "");
    
    if (hasURL) {
        submitButton.classList.add("active");
        submitButton.disabled = false;
    } else {
        submitButton.classList.remove("active");
        submitButton.disabled = true;
    }
}

function loadVideos() {
    let inputs = document.querySelectorAll(".video-url");
    let videoContainer = document.getElementById("videoContainer");

    videoContainer.innerHTML = ""; // Clear previous videos

    inputs.forEach(input => {
        let url = input.value.trim();
        if (url !== "") {
            let videoWrapper = document.createElement("div");
            videoWrapper.classList.add("video-wrapper");

            // Detect YouTube, Vimeo, or direct MP4
            if (url.includes("youtube.com") || url.includes("youtu.be")) {
                let embedUrl = url.replace("watch?v=", "embed/");
                videoWrapper.innerHTML = `<iframe src="${embedUrl}" allowfullscreen></iframe>`;
            } else if (url.includes("vimeo.com")) {
                let vimeoID = url.split("/").pop();
                videoWrapper.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoID}" allowfullscreen></iframe>`;
            } else if (url.endsWith(".mp4")) {
                videoWrapper.innerHTML = `<video controls><source src="${url}" type="video/mp4"></video>`;
            } else {
                videoWrapper.innerHTML = `<p style="color: red;">Invalid video format: ${url}</p>`;
            }

            // Add resize controls
            let resizeControls = document.createElement("div");
            resizeControls.classList.add("resize-controls");
            resizeControls.innerHTML = `
                <button onclick="resizeVideo(this, true)">🔍 Expand</button>
                <button onclick="resizeVideo(this, false)">🔍 Shrink</button>
            `;
            videoWrapper.appendChild(resizeControls);

            videoContainer.appendChild(videoWrapper);
        }
    });
}

// Function to resize videos
function resizeVideo(button, expand) {
    let videoWrapper = button.closest(".video-wrapper");
    if (expand) {
        videoWrapper.classList.add("resized");
    } else {
        videoWrapper.classList.remove("resized");
    }
}
