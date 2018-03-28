const replace = {
	".": ":black_circle:",
	"?": ":question:",
	"!": ":exclamation:"
}

function update() {
	var out = "";
	const text = document.getElementById("in").value;
	for(const s of text) {
		if(/[A-Za-z]/.test(s)) {
			out += `:regional_indicator_${s.toLowerCase()}: `;
		} else if(replace[s] !== undefined) {
			out += replace[s] + " ";
		}
		else {
			out += s;
		}
	}
	document.getElementById("out").innerText = out;
}