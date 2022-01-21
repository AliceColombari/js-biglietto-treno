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

// sconto applicato in base all'età
// prezzo
let price = '';
// sconto 20% per i minorenni
let sale20 = (priceTicket * 20/ 100);
// sconto 40% per over 65
let sale40 = (priceTicket * 40/ 100);
// nessuno sconto per maggiorenni
let noSale = 0;

// condizione sconto applicato in base all'età
if (userAge < 18) {
    price = sale20;
    console.log('Sconto Minorenne: ' + price);
   
} else if (userAge > 65) {
    price = sale40;
    console.log('Sconto Over65: ' + price);

} else {
    price = noSale;
    console.log('Sconto Maggiorenne: ' + price);
}


// prezzo finale = prezzo biglietto - sconto applicato
let finalPrice = (priceTicket - price);
// arrotondamento del prezzo con massimo due decimali
const roundedPrice = finalPrice.toFixed(2);


// calcolo finale in base ai dati
let totalPrice = 'Il costo del tuo biglietto è: ' + roundedPrice + ' €';
console.log(totalPrice);


// ciò che vedrà l'utente in schermata
document.getElementById('prezzo').innerHTML = totalPrice;


