/* 
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
 */

// Difficoltà 1

// funzione Math.random
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const difficoltàUno = getRndInteger(1, 100);
console.log(difficoltàUno);

document.getElementById("one").addEventListener("click", function () {
  document.getElementById("risultatoUno").innerHTML = difficoltàUno;
});

// Difficoltà 2
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const difficoltàDue = getRndInteger(1, 81);
console.log(difficoltàDue);

document.getElementById("two").addEventListener("click", function () {
  document.getElementById("risultatoDue").innerHTML = difficoltàDue;
});

// Difficoltà 3

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const difficoltàTre = getRndInteger(1, 49);
console.log(difficoltàTre);

document.getElementById("three").addEventListener("click", function () {
  document.getElementById("risultatoTre").innerHTML = difficoltàTre;
});
