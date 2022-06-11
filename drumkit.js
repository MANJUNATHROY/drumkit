window.addEventListener("keydown", (e) => {
	var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (audio) {
		audio.play();
		audio.currentTime = 0;
		key.classList.add("playing");
	}
	return;
}
);

var press = document.querySelectorAll(".key");
press.forEach((e) => {
	e.addEventListener('transitionend', remove);
});
function remove(k) {
	if (k.propertyName = "transform") {
		this.classList.remove("playing");
	}
	return;
}
