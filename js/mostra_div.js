
/*Script che mostra o nasconde div contenenti testi o immagini */
var mostra_div =
{
 inizio:function () {
	//cont_img = document.getElementsByClassName("contenitore_immagini");
	cont_div = document.getElementsByClassName("contenitore_div"); // NOTE: Prende tutti i div e li mette in cont_div
  //console.log(cont_div.length);
  cont_puls = document.getElementsByClassName("pulsante_apre"); // NOTE: Prende tutti i pulsanti e li mette in cont_puls
  //console.log(cont_puls.length);
	for (i = 0; i < cont_div.length; i++) {
    cont_div[i].classList.add("nascondi");
    // NOTE: Nasconde tutti i div tranne il primo
    cont_div[0].classList.remove("nascondi"); // WARNING: non si può fare cont_div[i+1]
    cont_div[0].classList.add("mostra"); // WARNING: bisogna togliere "nascondi" altrimenti rimane uno spazio dovuto ad line-height
    cont_puls[i].addEventListener("click", mostra_div.appari, false);
    // NOTE: Assegna ad ogni pulsante la funione appari
    cont_puls[i].posizione = i; // WARNING: Trova il posto assegnando una proprietà all'elemento cont_puls[i]
    }
  },

  appari:function () {
    pos = this.posizione;
    cont_div[pos+1].classList.add("mostra");
    // NOTE: Anche cont_div[pos+1].classList.toggle("mostra");  per mostrare e togliere il lavoro.
  }
};

window.addEventListener("load", mostra_div.inizio, false);
/*========================*/