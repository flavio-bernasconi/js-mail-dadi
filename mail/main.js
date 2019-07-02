var elemento = document.getElementById("mio_id");

// mail inserita dall'utente
var mailUtente = prompt('inserisci la tua mail');
console.log(mailUtente);

// lista mail esistenti
var mail = ['mail1','mail2','mail3','mail4'];
console.log(mail);

// ciclo la lista SE uno dei valori combacia con la mail inserita
// dall'utente esco dal loop e scrivo che la mail esiste ALTRIMENTI
// scrivo non esiste
for (var i = 0; i < mail.length; i++) {

  if (mail[i] == mailUtente) {
    elemento.innerHTML = 'esiste';
    break;
  }
  else {
    console.log('non va bene');
    elemento.innerHTML = 'non esiste';
  }
}




//
