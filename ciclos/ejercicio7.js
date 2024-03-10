let suma = 0;

// Obtener los argumentos de la línea de comandos
const args = process.argv.slice(2);

// Iterar sobre los argumentos y sumar los números
for (let i = 0; i < args.length; i++) {
  let numero = parseFloat(args[i]);

  // Verificar si la entrada es 0, en ese caso, salir del bucle
  if (numero === 0 || isNaN(numero)) {
    break;
  }

  // Sumar el número a la suma acumulada
  suma += numero;
}

// Mostrar el resultado
console.log("La suma de los números ingresados es: " + suma);
