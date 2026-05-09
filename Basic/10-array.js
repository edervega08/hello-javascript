// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)  // [] → array vacío
console.log(myArray2) // [] → array vacío

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)  // [3] → array con un valor
console.log(myArray2) // [ <3 empty items> ] → 3 huecos vacíos

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)  // [1, 2, 3, 4]
console.log(myArray2) // [1, 2, 3, 4]

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)  // ["Brais", "Moure", "mouredev", 37, true]
console.log(myArray2) // ["Brais", "Moure", "mouredev", 37, true]

// Se llenan los espacios especificando la posición (puede ser intercalado)
myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2) // [ <1 empty item>, "mouredev", "Brais", <1 empty item>, "mouredev" ]



myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"
myArray[5] = "ESPACIO EXTRA" // RESERVA los índices 0,3,4 vacíos

console.log(myArray) // [ <1 empty item>, "mouredev", "Brais", <2 empty items>, "ESPACIO EXTRA" ]

//join('')
/* .join(''): Une todos los elementos del array en una sola cadena de texto. En el ejemplo, transforma [11, 2, 3, 55] en "112355". */
let numeros = [11, 2, 3, 55];
let totalCaracteres = numeros.join('').length;

console.log(totalCaracteres); // Salida: 6


// ------------------- Métodos comunes -------------------

myArray = [] //aqui se inicia el array vacio nuevamente
// push y pop

myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray) // ["Brais", "Moure", "mouredev", 37]

console.log(myArray.pop()) // 37 → elimina y devuelve el último
myArray.pop()              //otra forma, aqui elimina "mouredev"
//elimina el ultimo y solo quedan 2
console.log(myArray) // ["Brais", "Moure"]

// shift y unshift
// shift elimina el primer elemento y lo devuelve
// unshift agrega uno o más elementos al inicio
console.log("shift y unshift++++++++++++++++++++")
console.log(myArray.shift()) // "Brais" //elimina el primero y lo regresa
console.log(myArray)         // ["Moure"]

myArray.unshift("Brais", "mouredev")
console.log(myArray) // ["Brais", "mouredev", "Moure"]

// length

console.log(myArray.length) // 3 → tamaño del array

// clear
// varias formas
// 1. Inicializarlo vacío
myArray = []    // forma más común
myArray.length = 0 // alternativa (menos clara)
console.log(myArray) // [] vacio

// ----- SLICE -----
// slice(inicio EMPIEZA EN 0, fin) → copia un rango sin modificar el original
let arr = [10, 20, 30, 40, 50];
console.log(arr.slice(1, 3)); // [20, 30]
console.log(arr);             // [10, 20, 30, 40, 50] → no cambia

// ----- SPLICE -----
// splice(inicio EMPIEZA EN 0, cantidad, ...elementos) → modifica el array
let arr2 = [10, 20, 30, 40, 50];

// Eliminar 2 elementos desde índice 1
console.log(arr2.splice(1, 2)); // [20, 30]
console.log(arr2);              // [10, 40, 50]

// Insertar elementos en índice 1
// [10, 40, 50] SALIDA ANTERIOR Y DE AQUI SE PARTE
arr2.splice(1, 0, 25, 26);
console.log(arr2); // [10, 25, 26, 40, 50]

//remplazar "posicion(1), cantidad a eliminar(3), valores a remplazar agregar(2)"
arr2.splice(1,3,20,30)
console.log(arr2)// [10, 20, 30, 40, 50]

// fill
/* Rellena todas las posiciones con el mismo valor
Modifica el array original */
let arr1 = new Array(5);   // [ <5 empty items> ]
arr1.fill(0);              // llena todos con 0
console.log(arr1);         // [0, 0, 0, 0, 0]

// map 
/* Qué es: Es un método propio de los arrays, no tiene relación con Map.
Uso: Sirve para recorrer un array y devolver un nuevo array transformado. */
/* Recorre cada elemento y devuelve un nuevo array
No modifica el original */
let arr_2 = [1, 2, 3];
let nuevoArr = arr_2.map(function(valor, indice){
    return valor * 2; // multiplica cada valor por 2
});
/* let nuevoArr = arr_2.map(valor => valor * 2); */
console.log(nuevoArr); // [2, 4, 6]
console.log(arr_2);    // [1, 2, 3] → original intacto

//valor recibe CADA ELEMENTO del array
//indice recibe LA POSICIÓN de ese elemento

// ejemplo fill + map
/* Cuando creas un array con new Array(n) son huecos,
map no los recorre, por eso se suele usar fill primero */
let ejemplo = new Array(5);   // [ <5 empty items> ]
ejemplo.fill(0);              // [0, 0, 0, 0, 0]
let result = ejemplo.map(function(v,i){
    return i + 1; // reemplaza cada valor con índice+1
});
//let nuevo = array.map((valor, indice) => indice + 1);
console.log(result); // [1, 2, 3, 4, 5]


let array_ejemplo = [3]
let array_ejemplo2 = new Array(3)

console.log("array_ejemplo:", array_ejemplo)   // [3]// MENSAJE Y VALOR DEL ARRAY
console.log("array_ejemplo2:", array_ejemplo2) // [ <3 empty items> ] 3 VACIOS

// forEach con [3]
console.log("Recorriendo array_ejemplo:")
//RECORRE EL INDICE 0 Y VALOR 3
array_ejemplo.forEach(function(valor, indice) { 
  console.log("Índice:", indice, "Valor:", valor)
})

// forEach con new Array(3)
console.log("Recorriendo array_ejemplo2:")
//RECORRE EL INDICE Y VALOR, PERO ESTAN VACIOS
array_ejemplo2.forEach(function(valor, indice) { 
  console.log("Índice:", indice, "Valor:", valor)
})