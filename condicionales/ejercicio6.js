//DADOS A Y B, SI UNO ES NEGATIVO SUMARLOS, EN CASO CONTRARIO MULTIPLICAR
let num1 = 8;
let num2 = -5;

let resultado

if (num1 <0 || num2<0) {
  resultado = num1+num2;
    console.log("Se sumo, y el total es: " +resultado);
} else if (num1>0 || num2>0) {
    resultado=num1*num2;
    console.log("Se multiplico, el resultado es: " +resultado);
   
}
