// Ejercicio 4
var resultado = 0;
do {
    var entrada = prompt("Ingresa un número (presiona 'cancelar' para salir):");
    if (Number(entrada) == entrada) {
        if (entrada !== null) {
            resultado += Number(entrada);
        }
    }
    else {
        if (entrada != undefined)
            alert(entrada + " no es un número");
    }
} while (entrada !== null);

document.write("La suma de los números es: ", resultado);
