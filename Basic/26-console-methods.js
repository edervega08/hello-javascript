// ==========================
// MÉTODOS DE LA CONSOLA
// ==========================


// --------------------------
// console.log()
// Muestra información o mensajes normales en la consola.
// Es el método más utilizado para probar el código.
// --------------------------
console.log("¡Hola, JavaScript!")


// --------------------------
// console.error()
// Muestra mensajes de error en color rojo.
// Se usa para indicar que ocurrió un problema.
// --------------------------
console.error("Este es un mensaje de error.")
console.error("Error al conectarse a la base de datos:", new Error("Conexión fallida."))




// --------------------------
// console.warn()
// Muestra advertencias en color amarillo.
// Indica que hay algo que revisar, pero no es un error grave.
// --------------------------
console.warn("Este es un mensaje de advertencia.")




// --------------------------
// console.info()
// Muestra información adicional.
// Funciona parecido a console.log(), pero indica que es informativa.
// --------------------------
console.info("Este es un mensaje de información adicional.")


// --------------------------
// console.table()
// Muestra arreglos u objetos en forma de tabla.
// Facilita leer los datos.
// --------------------------
let data = [
    ["Brais", 37],
    ["Sara", 21]
]

console.table(data)//muestra indice por que es un array

data = [
    { name: "Brais", age: 37 },
    { name: "Sara", age: 21 }
]

console.table(data)


// --------------------------
// console.group()
// Agrupa varios mensajes bajo un mismo título.
//los muestra con sangría (indentación) para ordenarlos
// console.groupEnd() finaliza el grupo.
// --------------------------
console.group("Usuario:")
console.log("Nombre: Brais")
console.log("Edad: 37")
console.groupEnd()


// --------------------------
// console.time()
// Inicia un cronómetro con un nombre.
// console.timeEnd() detiene el cronómetro y muestra el tiempo transcurrido.
// Se usa para medir el rendimiento del código.
// --------------------------
console.time("Tiempo de ejecución 1") //inicia
for (let i = 0; i < 10000; i++) {
}

console.time("Tiempo de ejecución 2") //inicia
for (let i = 0; i < 10000; i++) {
}

console.timeEnd("Tiempo de ejecución 1")//termina
for (let i = 0; i < 10000; i++) {
}

console.timeEnd("Tiempo de ejecución 2")//termina


// --------------------------
// console.assert()
// Comprueba si una condición es verdadera.
// Si es falsa, muestra el mensaje de error.
// Si es verdadera, no muestra nada.
// --------------------------
let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad.")


// --------------------------
// console.count()
// Cuenta cuántas veces se ha ejecutado una línea.
// console.countReset() reinicia el contador.
// --------------------------
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

console.log("++++++++++++++++++++++++++++++++++++++++")
// --------------------------
// console.trace()
// Muestra el recorrido de las funciones que llevaron hasta ese punto.
// Es útil para saber desde dónde se llamó una función.
// --------------------------
function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución.")
}

funcA()

console.log("++++++++++++++++++++++++++++++++++++++++")
// --------------------------
// console.clear()
// Limpia todo el contenido de la consola.
// Está comentado para que no se ejecute.
// --------------------------
// console.clear()