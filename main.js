function onToggleMenu(e) {
	let menu = document.getElementById("mobile-menu");

	menu.classList.toggle("top-[110px]");

	e.src = menu.classList.contains("top-[110px]")
		? "./images/icon-close.svg"
		: "./images/icon-hamburger.svg";
}
