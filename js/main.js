var costo = num_km * 0.21;

if (eta < 18) {
    costo = costo * 0.8;
} else if (eta >= 65) {
    costo = costo * 0.6;
} 
costo = costo.toFixed(2);