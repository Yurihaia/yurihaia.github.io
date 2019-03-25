var audio = document.getElementById("audio");
var fish = document.getElementById("img");

let tongue = new URLSearchParams(location.search).has("tongue");

if(tongue) {
    fish.classList.add("tonguefish");
}

function toggle() {
    if(audio.paused) {
        audio.play();
        fish.setAttribute("src", tongue? "pufferfish_tongue.png": "pufferfish_heart.png");
    } else {
        audio.pause();
        fish.setAttribute("src", "pufferfish.png");
    }
}

document.onclick = toggle;