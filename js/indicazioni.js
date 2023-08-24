/*Questo script interviene solo sulla proprietà display permettendo
quindi le animazioni e le transizioni*/
function inizio (event) {
suggerimento = document.getElementsByClassName("suggerimento");
//console.log("il suggerimento è: " + suggerimento);
	for (var i = 0; i<suggerimento.length; i++) {
		var testo = suggerimento[i].getElementsByTagName("span")[0];
		//console.log("l'elemento testo è: " + testo.textContent.length);
		//console.log("l'elemento suggerimento è: " + suggerimento);
		testo.style.display = "none";
			if (testo && testo.textContent.length > 0) {
				suggerimento[i].addEventListener("mouseover", mostra, false);
				suggerimento[i].addEventListener("mouseout", togli, false);
			}
		}
	event.preventDefault();
	}
function mostra () {
	testo = this.getElementsByTagName("span")[0];
	testo.style.display = "block";
}

function togli () {
	testo.style.display = "none";
}


window.addEventListener("load", inizio, false);
