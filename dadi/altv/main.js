
var primoDado = document.getElementById('primoNum');
var secondoDado = document.getElementById('secondoNum');

// numero inserito dall'utente
var lancioUtente = parseInt(prompt('inserisci un numero da 2 a 12'));
document.getElementById('utente').innerHTML = lancioUtente;


// genero il primio numero casuale da 1 a 6
var dadoUno = Math.floor(Math.random() * 6)+1;
console.log( dadoUno);
// stampo il risultato del primo dado
// primoDado.innerHTML = '<p>' + dadoUno + '</p>';


// genero il secondo numero casuale da 1 a 6
var dadoDue = Math.floor(Math.random() * 6)+1;
console.log(dadoDue);
// stampo il risultato del secondo dado
// secondoDado.innerHTML = '<p>' + dadoDue + '</p>';


// sommo i due nomeri casuali
var risultatoLancio = dadoDue + dadoUno;
document.getElementById('dado').innerHTML = risultatoLancio;


// numero inserito dall'utente
if (risultatoLancio == lancioUtente ) {
  document.getElementById('par').innerHTML = 'HAI VINTO :)';
}
else {
  document.getElementById('par').innerHTML = 'HAI PERSO :(';
}

// var data = [dadoUno,dadoDue];
// var myList = '<ul>';
// for (var i = dadoUno; i > 0; i--) {
//   myList += '<li>' + '<div class="palla"></div>' + '</li>';
// }
// myList += '</ul>';
// primoDado.innerHTML = myList;
//
// var myList = '<ul>';
// for (var i = dadoDue; i > 0; i--) {
//   myList += '<li>' + '<div class="palla"></div>' + '</li>';
// }
// myList += '</ul>';
// secondoDado.innerHTML = myList;

var elenco = ''
for (var i = dadoUno; i > 0; i--) {
     elenco += '<li>' + '<div class="palla blue"></div>' + '</li>';
}

var d = document.getElementById("elencoUno");

if (dadoUno % 2 == 0) {
  d.className += "pari";
}
else {
  d.className += "dispari";
}
document.getElementById('elencoUno').innerHTML = elenco;





var elenco = ''
for (var i = dadoDue; i > 0; i--) {
     elenco += '<li>' + '<div class="palla red"></div>' + '</li>';
}

var d = document.getElementById("elencoDue");

if (dadoDue % 2 == 0) {
  d.className += "pari";
}
else {
  d.className += "dispari";
}
document.getElementById('elencoDue').innerHTML = elenco;


// for (var i = dadoDue; i > 0; i--) {
//   if (dadoDue % 2 == 0) {
//      elenco += '<li>' + '<div class="palla red"></div>' + '</li>';
//   }
//   else {
//     elenco += '<li>' + '<div class="palla blue"></div>' + '</li>';
//   }
// }
// document.getElementById('elencoDue').innerHTML = elenco;
//





//
