
/*Scripe che mostra o nasconde immagini con numeri */
var mostrare =
{
 figura:function () {
	//cont_img = document.getElementsByClassName("contenitore_immagini");
	cont_num = document.getElementsByClassName("contenitore_numeri");
  //console.log(cont_num + cont_num.length);
	for (var j = 0; j < cont_num.length; j++) {
    num = cont_num[j].getElementsByClassName("numeri");
    //console.log(num);
      for (var i = 0; i < num.length; i++) {
        //console.log(num[i]);
        num[i].addEventListener("click", mostrare.numero, false)
        num[i].position = i; //crea una nuova proprietà che definisce dove si trova l'elemento
      }
    }
  },

  numero:function () {
    this.classList.toggle("num_evid");
    n = this.position;  //richiama la posizione
    //console.log(this.position);
    padre = this.parentNode; // NOTE: prende il padre per risalire il documento
    //console.log("padre classe " + padre.className);
    nonno = padre.parentElement;
    //console.log("nonno classe " + nonno.className);
    cont_img = nonno.getElementsByClassName("contenitore_immagini")[0]; // NOTE: Essendoci un solo contenitore bisogn indicate [0]
    img = cont_img.getElementsByTagName("img")[n]; // NOTE: del contenitore prende l'immagine definita da n cioè la stessa passata dalla funzione
    //console.log(img);
    img.classList.toggle("most_img");
    // IDEA:img.classList.remove("nasc_img");img.classList.add("most_img");
  }
};

window.addEventListener("load", mostrare.figura, false);
/*========================*/
