// genero il primio numero casuale da 1 a 6
var dadoUno = Math.floor(Math.random() * 6)+1;
console.log(dadoUno);
// genero il secondo numero casuale da 1 a 6
var dadoDue = Math.floor(Math.random() * 6)+1;
console.log(dadoDue);

// sommo i due nomeri casuali
var risultatoLancio = dadoDue + dadoUno;
document.getElementById('dado').innerHTML = risultatoLancio;

// numero inserito dall'utente
var lancioUtente = parseInt(prompt('inserisci un numero da 2 a 12'));
document.getElementById('utente').innerHTML = lancioUtente;

// numero inserito dall'utente
if (risultatoLancio == lancioUtente ) {
  document.getElementById('par').innerHTML = 'HAI VINTO :)';
}
else {
  document.getElementById('par').innerHTML = 'HAI PERSO :(';
}
//
