
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


// elenco è l' UL presente nel html
var elenco = '';
// indice uguale al numero del primo dado
for (var i = dadoUno; i > 0; i--) {
    // elenco viene popolato con tanti LI
    // quanti il numero del dado indica.
    //la classe palla sarà colei che definirà lo stile dei pallini
     elenco += '<li>' + '<div class="palla blue"></div>' + '</li>';
}

//d richiama il primo elenco contenuto nel primo dado
// la struttura html sarà ul'elecnoUno' > li
var d = document.getElementById("elencoUno");

//se il lancio è pari > quindi se dividiamo in 2 il
// risultato del lancio il resto (%) sarà 0 allora aggiungo la classe pari
//all'elemto d (primo elenco). Queste due classi differenziano
// lo stile di distribuzione delle palline sui dadi
if (dadoUno % 2 == 0) {
  d.className += "pari";
}
else if  (dadoUno  == 5 || 3) {
  d.className += "pari strano";
}
else {
  d.className += "dispari";
}
//Infine stampo la variabile elenco all'interno dell'elemto elencoUno
// nella pagina HTML cosi da rendere visibili i pallini
document.getElementById('elencoUno').innerHTML = elenco;





//LEGGI COMMENTI SOPRA STESSO PROCEDIMENTO
var elenco = ''
for (var i = dadoDue; i > 0; i--) {
     elenco += '<li>' + '<div class="palla red"></div>' + '</li>';
}

var d = document.getElementById("elencoDue");

if (dadoDue % 2 == 0) {
  d.className += "pari";
}
else if  (dadoDue  == 5 || 3) {
  d.className += "pari strano";
}
else {
  d.className += "dispari";
}
document.getElementById('elencoDue').innerHTML = elenco;




//
