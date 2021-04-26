$(document).ready(function(){

    var studente = {
        nome : 'gianluca',
        cognome : 'rossi',
        età :'25'
    }

    for( var key in studente){
        console.log( key + ' :' + studente[key]);
    }

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

    for(var studente of studenti){
        console.log( 'nome: ' + studente['nome'] + ' cognome: ' + studente['cognome']);
        
    }

    var newName = prompt("inserisci un nome");
    var newSurname = prompt("inserisci un cognome");
    var newAge = parseInt(prompt("inserisci l'età"));

    addStudente(studenti,newName,newSurname,newAge);

    console.log('---------------------------');
    
    for(var studente of studenti){
        for(var dati in studente){
            console.log(dati + ': ' + studente[dati]);
            console.log('---------------------------');
        }
        
    }

})

function addStudente(target,name,surname,age){
    target.push(
        {
            nome : name,
            cognome : surname,
            età : age
        }
    );
}