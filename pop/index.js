var audio = document.getElementById("audio");
var fish = document.getElementById("img");

function toggle() {
    if(audio.paused) {
        audio.play();
        fish.setAttribute("src", "pufferfish_heart.png");
    } else {
        audio.pause();
        fish.setAttribute("src", "pufferfish.png");
    }
}

document.onclick = toggle;