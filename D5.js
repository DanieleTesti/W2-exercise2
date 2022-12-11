/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

console.log("\nExercise 1 \n");
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("\nExercise 2\n");
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("\nExercise 3\n");
pets.sort();
pets.reverse();
for (let i = 0; i < pets.length; i++) console.log(pets[i]);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("\nExercise 4\n");
pets.push(pets.shift());
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
console.log("\nExercise 5\n");
letter = "aa";
count = 99;
for (i = 0; i < cars.length; i++) {
  cars[i].licensePlate = count;
  count++;
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("\nExercise 6\n");
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

console.log("\nExercise 7 \n");

const justTrims = [];
for (i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("\nExercise 8 \n");
for (let i = 0; i < cars.length; i++) {
  str = cars[i];
  if (str.color[0] === "b") console.log("FIZZ");
  else console.log("BUZZ");
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

console.log("\nExercise 9 \n");

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

// let newNumericArray = numericArray.sort((a, b) => a - b);
// let n = 0;
// while (n < 6) {
//   console.log(newNumericArray[i]);
//   n++;
// }
// console.log("fermati prima di 32");
while (i < numericArray.length) {
  console.log(numericArray[i]);
  i++;
  if (numericArray[i] === 32) {
    console.log("numero trovato");
    break;
  }
}
console.log("fermati prima di 32");

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["c", "n", "e", "t", "i"];

console.log("\nExercise 10\n");
console.log(charactersArray);

const lettOrdinate = [];
for (i = 0; i < charactersArray.length; i++) {
  arrayDicaratteri = charactersArray[i];
  switch (arrayDicaratteri) {
    case "a":
      lettOrdinate.push(1);
      break;
    case "b":
      lettOrdinate.push(2);
      break;
    case "c":
      lettOrdinate.push(3);
      break;
    case "d":
      lettOrdinate.push(3);
      break;
    case "e":
      lettOrdinate.push(5);
      break;
    case "f":
      lettOrdinate.push(6);
      break;
    case "g":
      lettOrdinate.push(7);
      break;
    case "h":
      lettOrdinate.push(8);
      break;
    case "i":
      lettOrdinate.push(9);
      break;
    case "l":
      lettOrdinate.push(10);
      break;
    case "m":
      lettOrdinate.push(11);
      break;
    case "n":
      lettOrdinate.push(12);
      break;
    case "o":
      lettOrdinate.push(13);
      break;
    case "p":
      lettOrdinate.push(14);
      break;
    case "q":
      lettOrdinate.push(15);
      break;
    case "r":
      lettOrdinate.push(16);
      break;
    case "s":
      lettOrdinate.push(17);
      break;
    case "t":
      lettOrdinate.push(18);
      break;
    case "u":
      lettOrdinate.push(19);
      break;
    case "v":
      lettOrdinate.push(20);
      break;
    case "z":
      lettOrdinate.push(21);
      break;
    default:
      console.log(
        "la lettera",
        charactersArray[i],
        "non inserita nell'alfabeto italiano"
      );
  }
}
console.log(lettOrdinate);

//  OOOOOOK!
