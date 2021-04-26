$(document).ready(function(){
    //creo un oggetto studente con valori all'interno
    var studente = {
        nome : 'gianluca',
        cognome : 'rossi',
        età :'25'
    }
    //ciclo for in per visualizzare le chiavi e i valori dell'oggetto
    for( var key in studente){
        console.log( key + ' :' + studente[key]);
    }
    //creo un array di oggetti
    var studenti = [
        {
            nome : 'gianluca',
            cognome : 'rossi',
            età :'25'
        },
        {
            nome : 'valerio',
            cognome : 'de santis',
            età :'30'
        },
        {
            nome : 'dario',
            cognome : 'bianchi',
            età :'44'
        },
        {
            nome : 'giuseppe',
            cognome : 'verdi',
            età :'18'
        }
    ]
    //ciclo for of per visualizzare gli oggetti dentro l'array e all'interno vado a chiamare i valori di nome e cognome
    for(var studente of studenti){
        console.log( 'nome: ' + studente['nome'] + ' cognome: ' + studente['cognome']);
        
    }
    //dichiaro varibili per chiedere all'utente i dati 
    var newName = prompt("inserisci un nome");
    var newSurname = prompt("inserisci un cognome");
    var newAge = parseInt(prompt("inserisci l'età"));
    //richiamo la funzione che andrà a pushare i dati del prompt
    addStudente(studenti,newName,newSurname,newAge);

    console.log('---------------------------');
    //ciclo for of
    for(var studente of studenti){
        //all'interno metto un ciclo for in per richiamare tutti i singoli dati
        for(var dati in studente){
            console.log(dati + ': ' + studente[dati]);
            console.log('---------------------------');
        }
        
    }

})
//funzione per pushare un nuovo oggetto in un array
function addStudente(target,name,surname,age){
    target.push(
        {
            nome : name,
            cognome : surname,
            età : age
        }
    );
}