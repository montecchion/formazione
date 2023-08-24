
function inizia() {
  var testi = document.getElementsByClassName('comparsa'); //prende tutti i div con i testi e li assegna all'array testi
  for (var i = 1; i < testi.length; i++) { //partendo dal secondo testo li oscura tutti
    testi[i].classList.add("nascondi");
  }
  var bottoni = document.getElementsByClassName('bottone_scomparsa'); //prende tutti i bottoni
  for (var i = 0; i < bottoni.length; i++) {
    bottoni[i].addEventListener("click", controlla, false);
  }
}

function controlla() {
  console.log(this.parentElement.nextElementSibling);
  var successivo = this.parentElement.nextElementSibling; //assegna alla variabile successivo il div
  if (successivo !== null) { //se il successivo non è nullo cioè esiste un successivo
    successivo.classList.toggle("vedi");
  }
/*  else {
    alert("Ricomincia!");
  }*/
}


window.addEventListener("load", inizia, false); //per chiamare la funzione
