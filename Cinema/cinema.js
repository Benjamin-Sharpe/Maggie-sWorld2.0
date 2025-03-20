document.addEventListener("DOMContentLoaded", function() {
    fetchVideoList(); // Fetch available videos when the page loads
});

function fetchVideoList() {
    let videoMenu = document.getElementById("videoMenu");

    // Change this to match your router's USB media share location
    let mediaShareURL = "http://192.168.0.1/Cinema/movies/";

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

// ✅ Function to add a video dynamically to the page
function addVideoToPage(url) {
    let videoContainer = document.getElementById("videoContainer");

    let videoWrapper = document.createElement("div");
    videoWrapper.classList.add("video-wrapper");

    videoWrapper.innerHTML = `<video controls><source src="${url}" type="video/mp4"></video>`;

    videoContainer.appendChild(videoWrapper);
}
