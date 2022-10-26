// snack 4 BONUS

// creare due array che hanno un numero di elementi diversi
// aggiungi elementi nell'array che ha meno elementi
// fino a quando ne avrà tanti quanto l'altro

let array1 = [2, 5, 7, 76, 88, 121, 1333, 45554];
let array2 = [10];

// variabile controlo
let arrayMaggiore;
let arrayMinore;

// trovare array con meno elementi
if( array1.length > array2.length ){
    arrayMaggiore = array1;
    arrayMinore = array2;
    console.log(arrayMaggiore);
} else if (array1.length == array2.length){
    console.log('gli array sono uguali');
} else{
    arrayMaggiore = array2;
    arrayMinore = array1;
}

let differenzaLunghezzaArray = arrayMaggiore.length - arrayMinore.length;

for( let i = 0; i < differenzaLunghezzaArray; i++ ){
    let numeroRandom =  Math.floor(Math.random() * 100);
    console.log(`numero ciclo: ${i} eil numero random è ${numeroRandom} `)

    arrayMinore.push(numeroRandom);
}

console.log(arrayMinore)