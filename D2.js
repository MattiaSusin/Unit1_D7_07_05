/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = 10 
const num2 = 15  

console.log("il num1 è più piccolo del num2?", num1<num2)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const x = 2
const z = 5

console.log("x è diverso da z?", x!=z)

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

//--------------------------------------------NON SO RISOLVERLO-------------------------------------------------------------------

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const a = 6 
const b = 2

if(a === 8 || b === 8){
  const ris1 = 8
  console.log("uno dei due numeri è uguale a 8")
} else{
  console.log("nessuno dei due numeri è pari a 8")
}

if(a + b === 8){
  console.log("il risultato è 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 40
let costoSpedizione = 10

console.log("Costo Carrello:",totalShoppingCart,"€")

if(totalShoppingCart > 50){
  console.log("Spedizione gratuita",)
}else{
  console.log("Totale con spedizione:", + costoSpedizione + totalShoppingCart,"€")
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

 totalShoppingCart
 let BlackFriday = totalShoppingCart * 0.8 
 
 console.log("Promo Black Friday:",BlackFriday,"€")

 if(totalShoppingCart > 50){
  console.log("Spedizione gratuita",)
}else{
  console.log("Totale con spedizione:", + costoSpedizione + BlackFriday,"€")
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let nr1 = 15
let nr2 = 25
let nr3 = 10

if()

const Numeri = [4,3,5,7,2] 

console.log(Numeri[0])
console.log(Numeri[1])
console.log(Numeri[2])
console.log(Numeri[3])

console.log(Numeri)

Numeri.sort()

console.log(Numeri)


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const nota = 1

console.log(typeof nota)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const pari = 10 

if(pari % 2 === 1){
  console.log("il numero è pari")
}else{
  console.log("il numero è dispari")
}

if( pari % 2 === 0){
  console.log("il numero è pari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 11
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto" 

console.log("i miei dati",me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName

console.log(me.lastName)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
delete me.skills[2];

console.log(me.skills)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let numeri = null

numeri = []
numeri [0] = 1 
numeri [1] = 2
numeri [2] = 3
numeri [3] = 4
numeri [4] = 5
numeri [5] = 6
numeri [6] = 7 
numeri [7] = 8
numeri [8] = 9
numeri [9] = 10

console.log(numeri)




/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numeri.pop()

console.log(numeri)

numeri.push(100)

console.log(numeri)