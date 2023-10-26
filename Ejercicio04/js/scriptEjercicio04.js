// cambiar el color de los iconos del menú.
document.querySelectorAll('header object').forEach(element => {
	element.addEventListener("load", function () {
		var doc = this.getSVGDocument().querySelector('path');
		doc.style.fill = "white";
	});
});