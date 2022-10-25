// Inserisci un numero, se è pari stampa il numero, se è dispari 
// stampa il numero successivo ( del numero inserito dall'utente: esempio 
// se il numero dell'utente è 2, il numero successivo è 3 )

let numero = parseInt(prompt('inserisci un numero'))

if(numero % 2 == 0){
    document.getElementById('contenitore').innerHTML = numero
} else {
    document.getElementById('contenitore').innerHTML = numero + 1
}