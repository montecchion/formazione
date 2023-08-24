Accordion =
{
inizio: function () {
	bottoni_titolo = document.getElementsByClassName("titolo_elenco");
	if (bottoni_titolo.length>0) {
	for (i=0; i<bottoni_titolo.length; i++) {
	bottoni_titolo[i].addEventListener("click", Accordion.apri, false);	
	}
	}
	/*bottone_titolo1 = document.getElementById("titolo1");
	if (bottone_titolo1) {
	bottone_titolo1.addEventListener("click", Accordion.apri, false);
	}
	bottone_titolo2 = document.getElementById("titolo2");
	if (bottone_titolo2) {
	bottone_titolo2.addEventListener("click", Accordion.apri, false);
	}
	bottone_titolo3 = document.getElementById("titolo3");
	if (bottone_titolo3) {
	bottone_titolo3.addEventListener("click", Accordion.apri, false);
	}
	bottone_titolo4 = document.getElementById("titolo4");
	if (bottone_titolo4) {
	bottone_titolo4.addEventListener("click", Accordion.apri, false);*/
},

apri: function () {
	if (this.firstElementChild.className == "nascondi") {
	this.className = "titolo_elenco girato";
	sottotitoli = this.firstElementChild.getElementsByTagName("li");	
	this.firstElementChild.className = "vista" + (sottotitoli.length);
	}
	else {
	this.firstElementChild.className = "nascondi";
	this.className = "titolo_elenco girare";
	}
}

};
window.addEventListener("load", Accordion.inizio, false);