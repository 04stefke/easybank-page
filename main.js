function onToggleMenu(e) {
	let menu = document.getElementById("mobile-menu");

	menu.classList.toggle("top-[10%]");

	e.src = menu.classList.contains("top-[10%]")
		? "./images/icon-close.svg"
		: "./images/icon-hamburger.svg";
}
