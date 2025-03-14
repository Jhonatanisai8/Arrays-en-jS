const arrayPersonas = [
    { nombre: 'Pedro', apellido: 'Perez', edad: 23 },
    { nombre: 'Juan', apellido: 'Sanchez', edad: 23 },
    { nombre: 'Alberto', apellido: 'Ojeda', edad: 23 },
    { nombre: 'Lucas', apellido: 'Castillo', edad: 23 },
    { nombre: 'Diego', apellido: 'Peralta', edad: 23 },
]

// buscamos una persona por su nombre
const nombreBuscado = 'Pedro'
const personaBuscada = arrayPersonas.find( persona => persona.nombre == nombreBuscado )

console.log(personaBuscada)