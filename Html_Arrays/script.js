const lenguajesProgramacion = ["Java", "JS", "Python"]
document.getElementById('demo').innerHTML = lenguajesProgramacion

const frutas = new Array("Mango", "Limon", "Pera", "Durazno", "Papaya")

let text = "<ul>"
for (let i = 0; i < frutas.length; i++) {
    text += "<li>" + frutas[i] + "</li>"
}
text += "</ul>"

document.getElementById('frutas').innerHTML = text