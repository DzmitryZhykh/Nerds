var open = document.querySelector(".write-us");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");

open.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});