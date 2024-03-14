
//AREA Y VOLUMEN DE UN CILINDRO
let radioCilindro = 5;
let alturaCilindro = 10;
let areaBase = 3.14159 * (radioCilindro * radioCilindro);
let areaLateral = 2 * 3.14159 * radioCilindro * alturaCilindro;
let areaTotal = 2 * areaBase + areaLateral;
let volumenCilindro = 3.14159 * (radioCilindro * radioCilindro) * alturaCilindro;

console.log("Área del cilindro:", areaTotal);
console.log("Volumen del cilindro:", volumenCilindro);
