function loginToRouter() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "Password123") {
        alert("Login successful!");
        document.getElementById("video-section").style.display = "block";
        loadManualVideoList();
    } else {
        alert("Invalid login.");
    }
}

function loadManualVideoList() {
    const videos = [
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

    const videoMenu = document.getElementById("videoMenu");
    videoMenu.innerHTML = "";

    videos.forEach(url => {
        const name = url.split("/").pop();
        const li = document.createElement("li");
        li.innerHTML = `<a href="#" onclick="addVideoToPage('${url}')">${name}</a>`;
        videoMenu.appendChild(li);
    });
}

function addVideoToPage(url) {
    const videoContainer = document.getElementById("videoContainer");

    const wrapper = document.createElement("div");
    wrapper.classList.add("video-wrapper");
    wrapper.innerHTML = `
        <video controls>
            <source src="${url}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    videoContainer.appendChild(wrapper);
}

function checkURLs() {
    const inputs = document.querySelectorAll(".video-url");
    const submitBtn = document.getElementById("submitVideos");
    let hasURL = false;

    inputs.forEach(input => {
        if (input.value.trim()) hasURL = true;
    });

    submitBtn.disabled = !hasURL;
}

function loadVideos() {
    const inputs = document.querySelectorAll(".video-url");
    inputs.forEach(input => {
        const url = input.value.trim();
        if (url) addVideoToPage(url);
    });

    alert("Custom video URLs loaded.");
}
