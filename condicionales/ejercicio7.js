let año = 2023;
let esBisiesto = (año % 4 === 0 && año % 100 !== 0) || año % 400 === 0;

console.log(esBisiesto ? `${año} es un año bisiesto.` : `${año} no es un año bisiesto.`);
