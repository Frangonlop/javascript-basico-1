// Ejercicio 1
var edad = prompt("¿Cuál es tu edad?")
if (Number(edad) == edad) {
    if (edad >= 18) {
        document.write("Eres mayor de edad, ya puedes conducir")
    }
    else {
        document.write("Todavía no eres mayor de edad, no puedes conducir")
    }
}
else {
    alert("No has introducido un número")
}