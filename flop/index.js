var audio = document.getElementById("audio");
var fish = document.getElementById("img");

function toggle() {
    if(audio.paused) {
        audio.play();
        fish.setAttribute("src", "salmon_heart.png");
    } else {
        audio.pause();
        fish.setAttribute("src", "salmon.png");
    }
}

document.onclick = toggle;