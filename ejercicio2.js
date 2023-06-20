// Ejercicio 2
do {
var nota = prompt("Dame la nota obtenida")
if (Number(nota) == nota) {
    if (nota >= 0 && nota <= 10) {
        if (nota <= 3)
            alert("Muy insuficiente")
        if (nota > 3 && nota < 5)
            alert("Insuficiente")
        if (nota == 5)
            alert("Suficiente")
        if (nota == 6)
            alert("Bien")
        if (nota > 6 && nota < 9)
            alert("Notable")
        if (nota >= 9)
            alert("Sobresaliente")
}
else {
alert("El número introducido no es válido debe ser entre 1 y 10")
}
}
else {
alert("No has introducido un número")
}
} while (nota != undefined)