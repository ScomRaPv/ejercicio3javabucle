/* ejercicio 1 */
/*
let numeroIngresado = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

for (let i = 1; i <= 10; i++) {
    let resultado = numeroIngresado * i;
    console.log(`${numeroIngresado} x ${i} = ${resultado}`);
}
console.log(`Tabla de multiplicar del número ${numeroIngresado}:`);

/* ejercicio 2 */
/*
let numero;

do {
    numero = parseFloat(prompt("Ingrese un número (Ingrese 0 para terminar):"));
    console.log(numero);
} while (numero !== 0);

/* ejercicio 3 */
/*
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinado = true;

    while (adivinado) {
        let numeroIngresado = parseInt(prompt("Adivina el número secreto "));
        if (numeroIngresado === numeroSecreto) {
            intentos++;
            adivinado = true;
            console.log(`¡Felicitaciones! Adivinaste el número secreto ${numeroSecreto} en ${intentos} intentos.`);
        } else if (numeroIngresado < numeroSecreto) {
            intentos++;
            console.log("El número ingresado es menor. Intenta nuevamente.");
        } else if (numeroIngresado > numeroSecreto) {
            intentos++;
            console.log("El número ingresado es mayor. Intenta nuevamente.");
        } else {
            console.log("Por favor, ingresa un número válido.");
        }
    }

    /* ejercicio 4 */






/* ejercio 5 */
/*
let numeroIngresado = parseInt(prompt("Ingrese un numero a dividir:"));

for (let i = 1; i <= 10; i++) {
let resultado = numeroIngresado / i;
console.log(`${numeroIngresado} / ${i} = ${resultado}`);
}
console.log(`Tabla de divisores ${numeroIngresado}:`);
 
/* ejercicio 6 */
/*
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
    console.log(`Elemento ${i + 1}: ${array[i]}`);
}
/* ejercicio 7 */
/*
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    console.log(`El doble del elemento ${i + 1} es: ${numeros[i] * 2}`);
}
/* ejercicio 8*/
/*
let familia = [
    { nombre: "Juan", edad: 35, relacion: "Padre", ciudad: "bogota" },
    { nombre: "María", edad: 32, relacion: "Madre", ciudad: "bogota" },
    { nombre: "Pedro", edad: 12, relacion: "Hijo", ciudad: "bogota" },
    { nombre: "Laura", edad: 8, relacion: "Hija", ciudad: "bogota" },
    { nombre: "Carlos", edad: 60, relacion: "Abuelo", ciudad: "cali" }
];
familia.forEach(persona => {
    console.log(`Hola, soy ${persona.nombre}, tengo ${persona.edad} años, soy el ${persona.relacion} y vivo en ${persona.ciudad}.`);
});

/* ejercicio 9 */
/*
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
 
  if (numeros[i] % 2 !== 0) {
   
    console.log(numeros[i])}
  }

  /* ejercicio 10 */



/* eejrcicio 11 */
/*
let numeros = [14, 27, 5, 8, 43, 20, 35, 10, 49, 16];


let grande = numeros[0]; 

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > grande) {
    grande = numeros[i];
  }
}
console.log("El número más grande es: " + grande);

/* ejercicio 12 */
/*
let numeros = [14, 27, 5, 8, 43, 20, 35, 10, 49, 16];


let chico = numeros[0]; 

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < chico) {
    chico = numeros[i];
  }
}
console.log("El número más chico es: " + chico);

/* ejercicio 13 */

/* ejercicio 14 */
for (let i = 1; i <= 5; i++) {
    
    let espacio = '';
    for (let j = 1; j <= i; j++) {
      espacio += '* ';
    }
    console.log(espacio);
  }
 /*ejercicio 15 */
 for (let i = 5; i >= 1; i--) {
    
    let espacio = '';
    for (let j = 1; j <= i; j++) {
      espacio += '* ';
    }
    console.log(espacio);
  }



