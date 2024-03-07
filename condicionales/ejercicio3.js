let num1 = 8;
let num2 = 15;
let num3 = 25;

let mayor = num1;
let menor = num1;

if (num2 > mayor) {
    mayor = num2;
} else if (num2 < menor) {
    menor = num2;
}


if (num3 > mayor) {
    mayor = num3;
} else if (num3 < menor) {
    menor = num3;
}

console.log("El mayor número es: " + mayor);
console.log("El menor número es: " + menor);