const edadesPromedio = [34, 67, 87, 22, 45]
console.log(edadesPromedio)
let longitudArreglo = edadesPromedio.length
edadesPromedio.sort()
console.log(edadesPromedio)
console.log(longitudArreglo)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
fruits.pop() //elimina el ultimo elemento
console.log(fruits)
fruits.push("Limones")
console.log(fruits) //agrega un elemento
console.log(fruits.at(2)) //accde un elemento del arreglo
fruits.shift() //elimina el ultimo elemento
console.log(fruits)
fruits.unshift("Kiwi") //agrega un elemento al inicio
fruits.unshift("Frambuesa")
console.log(fruits)

const jovenes = ["Jhonatan", "Samir", "Alejandro"]
const señoritas = ["Sofia", "Elena", "Fresia"]

//crea un nuevo arreglo a partir de los demas arreglos
const participantes = jovenes.concat(señoritas)
console.log(participantes)

const numeroPares = new Array(2,4,6,8,10)
const numeroImpares = new Array(3,5,7,9,11)
const numerosBinarios = new Array(0,1)

const numerosO = numeroPares.concat(numeroImpares,numerosBinarios)
console.log(numerosO)
