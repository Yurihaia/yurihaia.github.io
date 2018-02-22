var audio = document.getElementById("audio");
var fish = document.getElementById("img");

var currentTimeout = null;

function runChainRec(func, time, i) {
    currentTimeout = window.setTimeout(() => {
        func[i]();
        runChain(func, time, i + 1);
    }, time[i]);
}

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