// ✅ Function to Handle Login
function loginToRouter() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Debugging: Check login function is running
    console.log("Attempting login with:", username);

    // ✅ Replace with your actual router login process if required
    if (username === "admin" && password === "Password123") {
        alert("Login successful! Loading videos...");
        loadManualVideoList();  // Load video list after login
    } else {
        alert("Invalid login. Try again.");
    }
}

// ✅ Function to Load All Available Videos From Router Share
function loadManualVideoList() {
    let videoMenu = document.getElementById("videoMenu");

    let videos = [
        "http://192.168.0.1/Cinema/AriaLeewFriends.mp4",
        "http://192.168.0.1/Cinema/Badquality.mp4",
        "http://192.168.0.1/Cinema/BiggerThanWeTalkedAbout.mp4",
        "http://192.168.0.1/Cinema/Brickzilla.flv",
        "http://192.168.0.1/Cinema/Bunny1.mp4",
        "http://192.168.0.1/Cinema/BWC1.mp4",
        "http://192.168.0.1/Cinema/Comp1.mp4",
        "http://192.168.0.1/Cinema/Comp2.mp4",
        "http://192.168.0.1/Cinema/Comp3.mp4",
        "http://192.168.0.1/Cinema/FlipFlibbgooner.mp4",
        "http://192.168.0.1/Cinema/HusbandWatchingHisWifeFuckABigCock.mp4",
        "http://192.168.0.1/Cinema/InterracialCompilation4.mp4",
        "http://192.168.0.1/Cinema/LikeAVirgin.mp4",
        "http://192.168.0.1/Cinema/meh.mp4",
        "http://192.168.0.1/Cinema/PassionMusic.mp4",
        "http://192.168.0.1/Cinema/pawgAmirahAdara_HD.mp4",
        "http://192.168.0.1/Cinema/RealLifeWhiteGirlsOnlyWantBBC4.mp4",
        "http://192.168.0.1/Cinema/ShelesthImwatch.mp4",
        "http://192.168.0.1/Cinema/Strangercomesbackhomenewcouple.mp4",
        "http://192.168.0.1/Cinema/TikTokBBCSplitscreenPMVMegaCompilation1.mp4",
        "http://192.168.0.1/Cinema/tmpq4h58iwg.mp4",
        "http://192.168.0.1/Cinema/tmpd2jim16f.mp4",
        "http://192.168.0.1/Cinema/tmvy6vhulye.mp4",
        "http://192.168.0.1/Cinema/TwitterCum.mp4",
        "http://192.168.0.1/Cinema/yeet.mp4"
    ];

        videos.forEach(video => {
        let vidName = video.split("/").pop(); // Extract filename
        let listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#" onclick="addVideoToPage('${video}')">${vidName}</a>`;
        videoMenu.appendChild(listItem);
    });
}

// ✅ Function to Add Video to Page When Clicked
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
