console.log("Manipulación de Arreglos en JS");

// Método filter → Filtra elementos según una condición y devuelve un nuevo array.
const numeros = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// Solo dejará los números impares en el nuevo arreglo.
const numerosImpares = numeros.filter(n => n % 2 !== 0);
console.log(numerosImpares); // [1, 3, 5, 7, 9]

// Método map → Transforma los elementos del arreglo y devuelve un nuevo array.
const newArray = numeros.map(n => n * 10);
console.log(newArray); // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// Método fill → Rellena el array con un valor en un rango específico.
const arrNumbers = numeros.fill(1, 0, 4); // Rellena del índice 0 al 3 con "1".
console.log(arrNumbers); // [1, 1, 1, 1, 5, 6, 7, 8, 9, 10]

// Método find → Devuelve el primer elemento que cumple la condición.
let valorBuscado = numeros.find(x => x % 2 === 0);
console.log(valorBuscado); // 6 (el primer número par encontrado)

// Método findIndex → Devuelve el índice del primer elemento que cumple la condición.
console.log(numeros.findIndex(x => x > 3)); // 4 (el primer número mayor a 3)

// Método some → Devuelve true si al menos un elemento cumple la condición.
const verduras = new Array("Lechuga", "Apio", "Tomate", "Cebolla");
console.log(verduras.some(x => x === "Tomate")); // true (existe "Tomate" en el array)

// Método every → Devuelve true si TODOS los elementos cumplen la condición.
console.log(verduras.every(x => x === "Tomate")); // false (no todos son "Tomate")

// Método pop → Elimina el último elemento del arreglo y lo devuelve.
console.log(verduras.pop()); // "Cebolla" (se elimina el último elemento)

// Método shift → Elimina el primer elemento del arreglo y lo devuelve.
console.log(verduras.shift()); // "Lechuga" (se elimina el primer elemento)
