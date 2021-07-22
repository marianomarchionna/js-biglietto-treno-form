// var btnGenera = document.getElementById('genera');
// btnGenera.addEventListener('click',
//     function() {
//         var nome = document.getElementById('nome').value;
//         var km = document.getElementById('km').value;
//         var eta = document.getElementById('fascia-eta').value;
//     }
// )

// var costo = km * 0.21;

// if (eta == minorenne) {
//     costo = costo * 0.8;
// } else if (eta == sover65) {
//     costo = costo * 0.6;
// } 
// costo = costo.toFixed(2);

var numCarrozza = Math.floor(Math.random() * 15) + 1;
document.getElementById('numero-carrozza').innerHTML = numCarrozza;

var codTreno = Math.floor(Math.random() * 9999) + 90000;
document.getElementById('codice-treno').innerHTML = codTreno;