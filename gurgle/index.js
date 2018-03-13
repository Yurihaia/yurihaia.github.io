var audio = document.getElementById("audio");
var fish = document.getElementById("img");

function toggle() {
    if(audio.paused) {
        audio.play();
        fish.setAttribute("src", "drowned_heart.png");
    } else {
        audio.pause();
        fish.setAttribute("src", "drowned.png");
    }
}

document.onclick = toggle;