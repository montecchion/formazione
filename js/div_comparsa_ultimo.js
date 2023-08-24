/*========================== SCRIPT PER GESTIRE I TESTI A SCOMPARSA CON I BOTTONI =========================== */
function inizia() {
  var testi = document.getElementsByClassName('comparsa'); //prende tutti i div con i testi e li assegna all'array testi
  for (var i = 0; i < testi.length; i++) { //se il primo non deve essere oscurato allora non deve avere la classe "comparsa" ma la stesse regole CSS della classe
    testi[i].classList.add("nascondi");
    //trova se esistono dei form in questo div
    var modulo = testi[i].getElementsByTagName('form');
    if (modulo.length !== 0) {
    //console.log("c'è uno o più moduli!");
    //toglie il bottone per andare avanti dai div di testo che hanno un form
    bottone_testo = testi[i].getElementsByClassName('bottone_scomparsa')[0];
    bottone_testo.style.display = "none";
    //Prende tutti i moduli che ci sono nel documento
    moduli = document.forms;
    //console.log("Nel testo ci sono " + moduli.length + " moduli.");
    //Per ogni modulo prende tutti i bottoni
    for (var j = 0; j < moduli.length; j++) {
      var bottoni_moduli = moduli[j].getElementsByTagName('button');
      //console.log("Bottoni " + bottoni_moduli.length);
        // Per tutti i bottoni di ciascun modulo inserisce un listener di eventi per chiamare la funzione di verifica
        for (var k = 0; k < bottoni_moduli.length; k++) {
          bottoni_moduli[k].addEventListener("click", verifica, false);
        }
      }
    }
  }
  var bottoni = document.getElementsByClassName('bottone_scomparsa'); //prende tutti i bottoni
  for (var i = 0; i < bottoni.length; i++) {
    bottoni[i].addEventListener("click", controlla, false);
  }
}

function controlla() {
  //console.log(this.parentElement.nextElementSibling);
  var successivo = this.parentElement.nextElementSibling; //assegna alla variabile successivo il div
  if (successivo !== null) { //se il successivo non è nullo cioè esiste un successivo
    successivo.classList.toggle("vedi"); // mostra il successivo
  }
/*  else {
    alert("Ricomincia!");
  }*/
}

/*============== PER MODULI ===================*/
function verifica (e) {
  //console.log("Verifica!" + this.parentElement.type);
  //Prende tutti gli elementi input che sono presenti nel tad <fieldset>
var scritte =  this.parentElement.getElementsByTagName("input");
for (var i = 0; i < scritte.length; i++) {
  if (scritte[i].checked == true && scritte[i].value == "true" ) {
    //chiama la funzione giusto() inviando  il form che ha rilevato l'input vero
    giusto(scritte[i].form);
    //console.log("Form è " + scritte[i].form);
    e.preventDefault(); //impedisce di togliere la spunta
    return ; //ferma il flusso successivo tornando all'inizio ma lasciando la spunta
    // WARNING: È importante lasciare l'ordine com'è altrimenti non funziona perché spostando return toglie la spunta
  }
}
//console.log("Sbagliato!");
e.preventDefault(); //impedisce di togliere la spunta
//console.log("Scritte " + scritte[0].form);
sbagliato(scritte[0].form); //invoca la funzione sbagliato con argomento il form di riferimento
}

function giusto (modulo_vero) {
   //dal form torna con parentElement al div per trovare al suo interno il bottone che permette di andare avanti
   var bottone_modulo_vero = modulo_vero.parentElement.getElementsByClassName('bottone_scomparsa')[0];
   //console.log("Il bottone del modulo_vero è " + bottone_modulo_vero.type);
   //trovato il bottone lo rende visibile in modo da continuare
   bottone_modulo_vero.style.display = "inherit";
   //prende la parte finale con i commenti, il contenitore chiamato nascondi_popup che prima era nascosto
   contenitore_popup = modulo_vero.getElementsByClassName("nascondi_popup")[0];
	 //console.log("contenitore pop up = " + contenitore_popup);
   //prende la X che serve per chiudere
   chiudi = modulo_vero.getElementsByClassName("chiudi")[0];
	 //console.log("chiudi = " + chiudi);
   //Assegna alla X la funzione che chiude il popup quando è stato letto
	chiudi.addEventListener("click", chiudi_popup, false);
  //Mostra il testo da far vedere con i complimenti e toglie quello per le risposte sbagliate
	testo_inserire = modulo_vero.getElementsByClassName("bravo")[0]; //trova il testo per le risposte giuste
  testo_togliere = modulo_vero.getElementsByClassName("scarso")[0]; //trova il testo per le risposte sbagliate
  testo_inserire.style.display = "block";
	testo_togliere.style.display = "none";
  //assegna una classe che permette al contenitore di mostrarsi
  contenitore_popup.className = 'contenitore_popup';
}



function sbagliato (modulo_vero2) {
   //console.log(modulo_vero2);
   //alert("Giusto! La risposta era " + posizione.name + modulo_vero);
   //dal form torna con parentElement al div per trovare al suo interno il bottone che permette di andare avanti
   var bottone_modulo_vero = modulo_vero2.parentElement.getElementsByClassName('bottone_scomparsa')[0];
   //console.log("Il bottone del modulo_vero è " + bottone_modulo_vero.type);
   //trovato il bottone lo rende visibile in modo da continuare
   //bottone_modulo_vero.style.display = "inherit"; → questo si toglie per non far vedere il bottone per andare avanti
   //prende la parte finale con i commenti, il contenitore chiamato nascondi_popup che prima era nascosto
   contenitore_popup = modulo_vero2.getElementsByClassName("nascondi_popup")[0];
	 //console.log("contenitore pop up = " + contenitore_popup);
   //prende la X che serve per chiudere
   chiudi = modulo_vero2.getElementsByClassName("chiudi")[0];
	 //console.log("chiudi = " + chiudi);
   //Assegna alla X la funzione che chiude il popup quando è stato letto
	chiudi.addEventListener("click", chiudi_popup, false);
  //Mostra il testo da far vedere con i complimenti e toglie quello per le risposte sbagliate
	testo_inserire = modulo_vero2.getElementsByClassName("bravo")[0]; //trova il testo per le risposte giuste
  testo_togliere = modulo_vero2.getElementsByClassName("scarso")[0]; //trova il testo per le risposte sbagliate
  testo_inserire.style.display = "none";
	testo_togliere.style.display = "block";
  //assegna una classe che permette al contenitore di chiudersi
  contenitore_popup.className = 'contenitore_popup';
}



function chiudi_popup () {
	contenitore_popup.className = "nascondi_popup";
}



window.addEventListener("load", inizia, false); //per chiamare la funzione
