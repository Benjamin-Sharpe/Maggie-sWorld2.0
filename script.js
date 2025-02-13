// script.js
document.addEventListener("DOMContentLoaded", function () {
    const mediaLinks = [
        "https://www.dropbox.com/scl/fi/38dxuic1j6vbijwmo7j76/IMG_2510.HEIC?raw=1",
        "https://www.dropbox.com/scl/fi/11umyjmb3x9rlw9k1qrtf/IMG_2508.HEIC?raw=1",
        "https://www.dropbox.com/scl/fi/dvikaequtlemv4mev5bwx/IMG_2300_Original.JPG?raw=1",
        "https://www.dropbox.com/scl/fi/w132vniajp5ppiw3245am/filtered-D1EC8BBA-F674-41F3-865F-5A846199492F.mp4?raw=1",
        "https://www.dropbox.com/scl/fi/sphjbz4lyy1j2pgn079rs/EF618D1D-50DA-4C84-88D4-0B92A244CA00.jpg?raw=1"
    ];

    const gallery = document.getElementById("gallery");

    mediaLinks.forEach(link => {
        const mediaElement = document.createElement(
            link.includes(".mp4") || link.includes(".mov") ? "video" : "img"
        );

        if (mediaElement.tagName === "VIDEO") {
            mediaElement.controls = true;
            const source = document.createElement("source");
            source.src = link;
            source.type = "video/mp4";
            mediaElement.appendChild(source);
        } else {
            mediaElement.src = link;
        }

        mediaElement.classList.add("media-item");
        gallery.appendChild(mediaElement);
    });
});
