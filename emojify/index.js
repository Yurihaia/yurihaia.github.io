const replace = {
	".": "black_circle",
	"?": "question",
	"!": "exclamation",
	"#": "hash",
	"0": "zero",
	"1": "one",
	"2": "two",
	"3": "three",
	"4": "four",
	"5": "five",
	"6": "six",
	"7": "seven",
	"8": "eight",
	"9": "nine"
}

function update() {
	const end = document.getElementById("zws").checked? "\u200b": " ";
	var out = "";
	const text = document.getElementById("in").value;
	for(const s of text) {
		if(/[A-Za-z]/.test(s)) {
			out += `:regional_indicator_${s.toLowerCase()}:${end}`;
		} else if(replace[s] !== undefined) {
			out += ":" + replace[s] + ":" + end;
		}
		else {
			out += s;
		}
	}
	document.getElementById("out").value = out.trim();
}