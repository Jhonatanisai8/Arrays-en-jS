const arr1 = ["Emil", "Tobias", "Linus"];
console.log(arr1)
const newArray = arr1.concat("Jhonatan")
console.log(newArray)

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
console.log(fruits)
// copyWithin
fruits.copyWithin(2, 1)
console.log(fruits)
console.log("")
const fruits01 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits01)
fruits01.copyWithin(2, 0, 2);
console.log(fruits01)

const numbers = new Array(2, 4, 6, 8, 10)
const number = numbers.flatMap(x => [x, x * 10])
console.log(number)

const arrFrutas = ["mango", "limon", "papaya", "kiwi", "durazno", "platano"]
console.log(arrFrutas.filter(x => x === "mango"))

const arrNumbers = [1,2,3,4,5,6,7,8,9,10]

const numberPares = arrNumbers.filter(x => x % 2 === 0)
console.log(numberPares)