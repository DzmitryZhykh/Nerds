var open = document.querySelector(".write-us");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var username = form.querySelector("[name=name]");
var email = form.querySelector("[name=email]");

open.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	username.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!username.value || !email.value) {
		evt.preventDefault();
		popup.classList.add("modal-error");
	} 
});
