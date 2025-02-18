var cantidadDeGatos = 10;
const iconosGatos = ["😺", "😸", "😹"];
let contadorGato = 0;

for(i = 1; i <= cantidadDeGatos; i++) {
  if (i % 3 === 0) {
    console.log("Gato #" + i + ": " + iconosGatos[contadorGato]);
    contadorGato = 0;
  } else if (i % 2 === 0) {
    console.log("Gato #" + i + ": " + iconosGatos[contadorGato]);
    contadorGato++;
  } else {
    console.log("Gato #" + i + ": " + iconosGatos[contadorGato]);
    contadorGato++;
  }
}
