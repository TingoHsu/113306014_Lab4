function start() {
	document.getElementsByClassName("w")[0].addEventListener("click", wClicked);
	document.getElementsByClassName("a")[0].addEventListener("click", aClicked);
	document.getElementsByClassName("s")[0].addEventListener("click", sClicked);
	document.getElementsByClassName("d")[0].addEventListener("click", dClicked);
	document.getElementsByClassName("j")[0].addEventListener("click", jClicked);
	document.getElementsByClassName("k")[0].addEventListener("click", kClicked);
	document.getElementsByClassName("l")[0].addEventListener("click", lClicked);
	document.body.addEventListener('keydown', (e) => {
		if(e.key == "w") {
			wClicked();
		}
		if(e.key == "a") {
			aClicked();
		}
		if(e.key == "s") {
			sClicked();
		}
		if(e.key == "d") {
			dClicked();
		}
		if(e.key == "j") {
			jClicked();
		}
		if(e.key == "k") {
			kClicked();
		}
		if(e.key == "l") {
			lClicked();
		}
	});
}

function wClicked() {
	const w = new Audio('sounds/crash.mp3');
	w.play();
	document.getElementsByClassName("w")[0].classList.add("pressed");
	btnPressed("w");
}

function aClicked() {
	const a = new Audio('sounds/kick-bass.mp3');
	a.play();
	btnPressed("a");
}

function sClicked() {
	const s = new Audio('sounds/snare.mp3');
	s.play();
	btnPressed("s");
}

function dClicked() {
	const d = new Audio('sounds/tom-1.mp3');
	d.play();
	btnPressed("d");
}

function jClicked() {
	const j = new Audio('sounds/tom-2.mp3');
	j.play();
	btnPressed("j");
}

function kClicked() {
	const k = new Audio('sounds/tom-3.mp3');
	k.play();
	btnPressed("k");
}

function lClicked() {
	const l = new Audio('sounds/tom-4.mp3');
	l.play();
	btnPressed("l");
}

function btnPressed(key) {
	switch(key) {
		case "w":
			timeout = setTimeout(wPressedRemove, 100);
			break;
		case "a":
			timeout = setTimeout(aPressedRemove, 100);
			break;
		case "s":
			timeout = setTimeout(sPressedRemove, 100);
			break;
		case "d":
			timeout = setTimeout(dPressedRemove, 100);
			break;
		case "j":
			timeout = setTimeout(jPressedRemove, 100);
			break;
		case "k":
			timeout = setTimeout(kPressedRemove, 100);
			break;
		case "l":
			timeout = setTimeout(lPressedRemove, 100);
			break;
	}
	document.getElementsByClassName(key)[0].classList.add("pressed");
}

function wPressedRemove() {
	document.getElementsByClassName("w")[0].classList.remove("pressed");
}

function aPressedRemove() {
	document.getElementsByClassName("a")[0].classList.remove("pressed");
}

function sPressedRemove() {
	document.getElementsByClassName("s")[0].classList.remove("pressed");
}

function dPressedRemove() {
	document.getElementsByClassName("d")[0].classList.remove("pressed");
}

function jPressedRemove() {
	document.getElementsByClassName("j")[0].classList.remove("pressed");
}

function kPressedRemove() {
	document.getElementsByClassName("k")[0].classList.remove("pressed");
}

function lPressedRemove() {
	document.getElementsByClassName("l")[0].classList.remove("pressed");
}

window.addEventListener("load", start);