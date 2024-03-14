//SI A ES MAYOR, SUMAR, PERO SI B ES MAYOR RESTAR
let a = 28;
let b = 15;
let resultado;

if (a > b) {
    resultado = a + b;
    console.log("a es mayor que b, la suma es: " + resultado);
} else {
    resultado = a - b;
    console.log("a es menor o igual que b, la resta es: " + resultado);
}