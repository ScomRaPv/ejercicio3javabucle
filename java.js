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


