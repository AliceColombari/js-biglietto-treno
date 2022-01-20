// chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).



// chiedo all'utente quanti chilometri vuole percorrere
let trip = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
console.log(trip);

// chiedo all'utente l'età
let userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);

// calcolo il prezzo del biglietto
// prezzo per km
let pricePerKm = 0.21;
console.log(pricePerKm);
// prezzo biglietto = km inseriti * prezzo per km
const priceTicket = (trip * pricePerKm);
console.log(priceTicket);