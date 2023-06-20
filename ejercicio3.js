// Ejercicio 3
var resultado = "";
var entrada;
do {
    entrada = prompt("Ingresa una palabra (presiona 'cancelar' para salir):");

    if (entrada !== null) {
        if (resultado !== "") {
            resultado += "-";
        }
        resultado += entrada;
    }
} while (entrada !== null);

document.write("Palabras concatenadas:", resultado);
