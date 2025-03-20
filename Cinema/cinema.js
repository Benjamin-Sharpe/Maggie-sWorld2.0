document.addEventListener("DOMContentLoaded", function() {
    fetchVideoList(); // Fetch available USB media videos on page load
});

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
            addVideoToPage(url);
        }
    });
}

// ✅ Function to add a video dynamically to the page
function addVideoToPage(url) {
    let videoContainer = document.getElementById("videoContainer");

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

    videoContainer.appendChild(videoWrapper);
}

// ✅ Fetch video list from USB media share
function fetchVideoList() {
    let videoMenu = document.getElementById("videoMenu");

    // Change this URL to match your router's media share location
    let mediaShareURL = "http://192.168.0.1/USB/movies/";

    fetch(mediaShareURL)
        .then(response => response.text()) 
        .then(data => {
            let videoFiles = parseVideoFiles(data); 

            videoFiles.forEach(video => {
                let listItem = document.createElement("li");
                listItem.innerHTML = `<a href="#" onclick="addVideoToPage('${mediaShareURL + video}')">${video}</a>`;
                videoMenu.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching video list:", error));
}

// ✅ Function to parse video filenames from the media share response
function parseVideoFiles(data) {
    let videoFiles = [];
    let regex = /href="([^"]+\.mp4)"/g;
    let match;

    while ((match = regex.exec(data)) !== null) {
        videoFiles.push(match[1]);
    }

    return videoFiles;
}
