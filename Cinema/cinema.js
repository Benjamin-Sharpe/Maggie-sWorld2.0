document.addEventListener("DOMContentLoaded", function () {
    loadManualVideoList();
});

function loadManualVideoList() {
    let videoMenu = document.getElementById("videoMenu");

    // ✅ Use HTTP paths instead of SMB
    let videos = [
        "http://192.168.0.1/g/AriaLeewFriends.mp4",
        "http://192.168.0.1/g/BiggerThanWeTalkedAbout.mp4",
        "http://192.168.0.1/g/Brickzilla.flv",
        "http://192.168.0.1/g/Bunny1.mp4",
        "http://192.168.0.1/g/BWC1.mp4",
        "http://192.168.0.1/g/Comp1.mp4",
        "http://192.168.0.1/g/Comp2.mp4",
        "http://192.168.0.1/g/Comp3.mp4",
        "http://192.168.0.1/g/TwitterCum.mp4",
        "http://192.168.0.1/g/yeet.mp4",
        "http://192.168.0.1/g/FlipFlibbgooner.mp4"
    ];

    videos.forEach(video => {
        let videoName = video.split("/").pop(); // Extract filename
        let listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#" onclick="addVideoToPage('${video}')">${videoName}</a>`;
        videoMenu.appendChild(listItem);
    });
}

function addVideoToPage(videoPath) {
    let videoContainer = document.getElementById("videoContainer");

    let videoWrapper = document.createElement("div");
    videoWrapper.classList.add("video-wrapper");

    videoWrapper.innerHTML = `
        <video controls>
            <source src="${videoPath}" type="video/mp4">
            Your browser does not support this video format.
        </video>
    `;

    videoContainer.appendChild(videoWrapper);
}
