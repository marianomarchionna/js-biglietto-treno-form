var btnGenera = document.getElementById('genera');
var nome, km, eta, titolo, biglietto, costo, sconto;
btnGenera.addEventListener('click',
    function() {
        // prendiamo i valori in input
        nome = document.getElementById('nome').value;
        km = document.getElementById('km').value;
        eta = document.getElementById('fascia-eta').value;

        //facciamo visualizzare il biglietto
        titolo = document.getElementById('titolo');
        biglietto = document.getElementById('ticket');
        titolo.style.display = "block";
        biglietto.style.display = "block";
        
        //calcoliamo il costo del biglietto
        costo = km * 0.21;
        if (eta == 'minorenne') {
            costo = costo * 0.8;
            sconto = 'Sconto Minorenne';
        } else if (eta == 'over65') {
            costo = costo * 0.6;
            sconto = 'Sconto Over 65';
        } else {
            sconto = 'Biglietto Standard';
        }
        costo = costo.toFixed(2);

        //Iniziali maiuscole del nome 
        var arr = nome.split(' ');
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        var nome_def = arr.join(' ');
        //stampa nome passeggero
        document.getElementById('nome-pass').innerHTML = nome_def;

        //stampa offerta biglietto
        document.getElementById('offerta').innerHTML = sconto;

        //generiamo e stampiamo il numero della carrozza
        var numCarrozza = Math.floor(Math.random() * 15) + 1;
        document.getElementById('numero-carrozza').innerHTML = numCarrozza;

        //generiamo e stampiamo il codice del treno
        var codTreno = Math.floor(Math.random() * 9999) + 90000;
        document.getElementById('codice-treno').innerHTML = codTreno;

        //stampa costo biglietto
        document.getElementById('costo-biglietto').innerHTML = costo + ' €';
    }
)

var btnAnnulla = document.getElementById('annulla');
btnAnnulla.addEventListener('click',
    function() {
        titolo = document.getElementById('titolo');
        biglietto = document.getElementById('ticket');
        titolo.style.display = "none";
        biglietto.style.display = "none";

        document.getElementById('nome').value = '';
        document.getElementById('km').value = '';
        document.getElementById('fascia-eta').value = '';
    }
)