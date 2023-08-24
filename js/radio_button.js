function prendi () {
var  bottoni = document.getElementsByTagName('button');
//console.log(bottoni.length);
for (var i = 0; i < bottoni.length; i++) {
  bottoni[i].addEventListener("click", verifica, false);
}
}

function verifica () {
  //console.log("Verifica!" + this.parentElement);
var scritte =  this.parentElement.getElementsByTagName("input");
for (var i = 0; i < scritte.length; i++) {
  if (scritte[i].checked == true && scritte[i].value == "true" ) {
    giusto(scritte[i]);
    event.preventDefault(); //impedisce di togliere la spunta
    return ; //ferma il flusso successivo tornando all'inizio ma lasciando la spunta
    // WARNING: È importante lasciare l'ordine com'è altrimenti non funziona perché spostando return toglie la spunta
  }
}
console.log("Sbaliato!");
event.preventDefault(); //impedisce di togliere la spunta
sbagliato(scritte[0]);
}

function giusto (posizione) {
   alert("Giusto! La risposta era " + posizione.name);
}

function sbagliato (errore) {
   alert("No!! Riguarda la pagina 66 sul " + errore.name);
}

window.addEventListener("load", prendi, false); //per chiamare la funzione
