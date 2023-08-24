Sottolinea =  {

inizio: function () {
pulsanti_gialli = document.getElementsByClassName("giallo"); //prende tutti i pulsanti gialli di colori diversi
pulsanti_verdi = document.getElementsByClassName("verde");
pulsanti_arancio = document.getElementsByClassName("arancio");
pulsanti_azzurri = document.getElementsByClassName("azzurro");
pulsanti_rossi = document.getElementsByClassName("rosso");
pulsanti_marrone = document.getElementsByClassName("marrone");
pulsanti_viola = document.getElementsByClassName("viola");
for (var p = 0; p < pulsanti_gialli.length; p++) {  //assegna ad ogni pulsanti una funzione
	pulsanti_gialli[p].addEventListener("click", Sottolinea.prendi, false);
}
for (var q = 0; q < pulsanti_verdi.length; q++) {
	pulsanti_verdi[q].addEventListener("click", Sottolinea.prendi, false);
}
for (var k = 0; k < pulsanti_arancio.length; k++) {
	pulsanti_arancio[k].addEventListener("click", Sottolinea.prendi, false);
}
for (var l = 0; l < pulsanti_azzurri.length; l++) {
	pulsanti_azzurri[l].addEventListener("click", Sottolinea.prendi, false);
}
for (var m = 0; m < pulsanti_rossi.length; m++) {
	pulsanti_rossi[m].addEventListener("click", Sottolinea.prendi, false);
}
for (var n = 0; n < pulsanti_marrone.length; n++) {
	pulsanti_marrone[n].addEventListener("click", Sottolinea.prendi, false);
}
for (var o = 0; o < pulsanti_viola.length; o++) {
	pulsanti_viola[o].addEventListener("click", Sottolinea.prendi, false);
}
},

prendi: function (evt) { //la funzione ha una variabile e come evento
evt = this; //all'evento viene assegnato quello su cui è stato cliccato in modo da agire solo su di esso
sottolineare = document.getElementsByClassName(evt.id); //prende le parti di testo da sottolineare
for (var i = 0; i < sottolineare.length; i++) {
	sottolineare[i].classList.toggle("mostra_"+evt.classList); //ad ogni testo assegna o toglie la classe mostra_
}
}

// NOTE: Se si usa la funzione prendi bisogna assegnare ai testi da sottolineare la stessa classe che ha l'id del bottone che deve sottolineare quei testi.

};
window.addEventListener("load", Sottolinea.inizio, false);
