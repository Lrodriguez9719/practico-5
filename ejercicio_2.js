var cantidadDeGatos = 5;
var cantidadDePasos = 3;

const iconoGato = "🐈";
const iconoPasos = "🐾";
let stringPasos = "";

for (let i = 1; i <= cantidadDePasos; i++) {
  stringPasos += iconoPasos;
}

for (let i = 1; i <= cantidadDeGatos; i++) {
  console.log("Gato #" + i + ": " + iconoGato + " " + stringPasos);
}
