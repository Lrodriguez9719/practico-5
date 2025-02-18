var cantidadDeGatos = 10;
var cantidadDePasos = 4;

const iconosGatos = ["🐈", "🐈‍⬛"];
const iconoPasos = "🐾";
let stringPasos = "";

for (let i = 1; i <= cantidadDePasos; i++) {
  stringPasos += iconoPasos;
}

for (let i = 1; i <= cantidadDeGatos; i++) {
  if (i % 2 === 0) {
    console.log("Gato #" + i + ": " + iconosGatos[1] + " " + stringPasos);
  } else {
    console.log("Gato #" + i + ": " + iconosGatos[0] + " " + stringPasos);
  }
}