// Generatore di “nomi cognomi” casuali del grande gatsby:
// Abbiamo una lista di nomi e una lista di cognomi, e da queste 
// vogliamo generare una "falsa" lista di invitati, dove ogni invitato 
// nella lista, è l'unione di un "nome" e un "cognome" delle liste 
// precedentemente dette, scelti in modo casuale

let listaNomi = ['paolo', 'ilario', 'andrea'];
let listaNomiN = listaNomi.length;

let listaCognomi = ['rossi', 'verdi', 'bianchi'];
let listaCognomiN = listaCognomi.length;

console.log(listaNomi[Math.round(Math.random()* (listaNomiN -1))] + ' ' + listaCognomi[Math.round(Math.random() * (listaCognomiN -1))])