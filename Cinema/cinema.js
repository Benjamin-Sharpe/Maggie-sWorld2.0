document.addEventListener("DOMContentLoaded", function () {
    loadManualVideoList();
});

function loadManualVideoList() {
    let videoMenu = document.getElementById("videoMenu");

    // ✅ Manually listing video filenames based on your screenshot
    let videos = [
        "\\\\192.168.0.1\\g\\AriaLeewFriends.mp4",
        "\\\\192.168.0.1\\g\\BiggerThanWeTalkedAbout.mp4",
        "\\\\192.168.0.1\\g\\Brickzilla.flv",
        "\\\\192.168.0.1\\g\\Bunny1.mp4",
        "\\\\192.168.0.1\\g\\BWC1.mp4",
        "\\\\192.168.0.1\\g\\Comp1.mp4",
        "\\\\192.168.0.1\\g\\Comp2.mp4",
        "\\\\192.168.0.1\\g\\Comp3.mp4",
        "\\\\192.168.0.1\\g\\EPORNER.COM - F19kRhYg8zI9b1.mp4",
        "\\\\192.168.0.1\\g\\HusbandWatchingHisWifeFuckABig.mp4",
        "\\\\192.168.0.1\\g\\InterracialCompilation4.mp4",
        "\\\\192.168.0.1\\g\\LikeVirgin.mp4",
        "\\\\192.168.0.1\\g\\meh.mp4",
        "\\\\192.168.0.1\\g\\PassionMusic.mp4",
        "\\\\192.168.0.1\\g\\pawgAmirahAdara_HD.mp4",
        "\\\\192.168.0.1\\g\\RealLifeWhiteGirlsOnlyWantBBC4.mp4",
        "\\\\192.168.0.1\\g\\SheLetsHimWatch.mp4",
        "\\\\192.168.0.1\\g\\StrangerComesBackHomeNewCouple.mp4",
        "\\\\192.168.0.1\\g\\TikTokBBCStretchScenePMVMegaComp.mp4",
        "\\\\192.168.0.1\\g\\tmpqd3i8iwg.mp4",
        "\\\\192.168.0.1\\g\\tmpqd2djm16f.mp4",
        "\\\\192.168.0.1\\g\\tmvoyfuhyle.mp4",
        "\\\\192.168.0.1\\g\\TwitterCum.mp4",
        "\\\\192.168.0.1\\g\\yeet.mp4",
        "\\\\192.168.0.1\\g\\FlipFlibbgooner.mp4"
    ];

    // ✅ Generate Video Selection List
    videos.forEach(video => {
        let videoName = video.split("\\").pop(); // Extract filename
        let listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#" onclick="addVideoToPage('${video}')">${videoName}</a>`;
        videoMenu.appendChild(listItem);
    });
}

// ✅ Function to Add Selected Video to Page
function addVideoToPage(videoPath) {
    let videoContainer = document.getElementById("videoContainer");

    let videoWrapper = document.createElement("div");
    videoWrapper.classList.add("video-wrapper");

    videoWrapper.innerHTML = `
        <video controls>
            <source src="${videoPath}" type="video/mp4">
            Your browser does not support SMB video playback.
        </video>
    `;

    videoContainer.appendChild(videoWrapper);
}
