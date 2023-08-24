/*Script che apre e chiude un testo di un articolo*/

var aprire =
{
	pulsante:function () {
		pulsante_apri = document.getElementsByClassName("apri_articolo"); //Prende tutti i pulsanti con la classe .apri_articolo
		//testo = document.getElementsByClassName("articolo_apre"); //Prende tutti i testi con classe .articolo_apre
		//console.log(pulsante_apri.length);
		for (var i = 0; i < pulsante_apri.length; i++) { //per tutti i pulsanti
			pulsante_apri[i].addEventListener("click", aprire.apri, false); //inserisce un Listener di eventi
		}
		/*for (var j = 0; j < testo.length; j++) { //SOLO NEL CASO SI VOGLIA APRIRE SOLO UN <ARTICLE>
			testo[j].addEventListener("click", aprire.cascata, false); //inserisce un Listener anche a tutti i testi che hanno la classe .contenitore_testo
			console.log(testo.length);
		}*/
	},

	apri:function () {
		this.classList.toggle("chiudi_articolo"); //inserisce e toglie la classe "chiudi_articolo" al pulsante che ruota di 45°
		//console.log(this.parentNode);
		this.parentNode.classList.toggle("apri");//inserisce e toglie la classe "apri" al testo che così scende con i CSS
	}
/*
	cascata:function(){
		this.classList.toggle("apri_testo");
		console.log("apre");
	}*/
};

window.addEventListener("load", aprire.pulsante, false);
/*=======================*/
