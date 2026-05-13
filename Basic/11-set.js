// Set

// Declaración
let mySet = new Set()
console.log(mySet) 
//  Set(0) {}  → Set vacío


// Inicialización
mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])
console.log(mySet) 
//  Set(6) {"Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"}


// Métodos comunes

// add y delete
// add → lo agrega al final (no hay índices)
// delete → se le pasa el valor, no el índice
// devuelve un boolean: true si lo eliminó, false si no existe

mySet.add("https://moure.dev")
console.log(mySet) 
//  Set(7) {..., "https://moure.dev"}

mySet.delete("https://moure.dev")
console.log(mySet) 
//  Set(6) {"Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"}

console.log(mySet.delete("Brais")) 
//  true (se eliminó "Brais")

console.log(mySet.delete(4)) 
//  false (no existe el 4 en el Set)
//no elimina nada porque no existe el valor 4, por eso devuelve false o todo el set

console.log(mySet) 
//  Set(5) {"Moure", "mouredev", 37, true, "braismoure@mouredev.com"}


// has → verifica si un valor está dentro del Set
console.log(mySet.has("Moure")) 
//  true

console.log(mySet.has("Brais")) 
//  false (porque lo eliminamos)


// size → número de elementos
console.log(mySet.size) 
//  5


// Convertir un set a array
console.log("Convertir un set a array")
let ejemplo_set = new Set([1546, 28542, 375115, 445812]); 
let conv_array = Array.from(ejemplo_set)
console.log(conv_array) 
//  [1546, 28542, 375115, 445812]


// Convertir un array a set
//se eliminan los duplicados automáticamente al convertirlo a set
console.log("Convertir un array a set")
let ejemplo_array = [18457, 25548, 3964, 3177, 44575];
let conv_set = new Set(ejemplo_array)
// o así se crea un array con un set dentro:
// let conv_set = [new Set(ejemplo_array)];
console.log(conv_set) 
//  Set(5) {18457, 25548, 3964, 3177, 44575}


// No admite duplicados
mySet.add("braismoure@mouredev.com") // ya existía
mySet.add("braismoure@mouredev.com") // duplicado ignorado
mySet.add("braismoure@mouredev.com") // duplicado ignorado
mySet.add("BraisMoure@mouredev.com") // este sí es distinto
console.log(mySet) 
//  Set(6) {"Moure", "mouredev", 37, true, "braismoure@mouredev.com", "BraisMoure@mouredev.com"}


// el set muestra el número de elementos cuando se hace console.log
let eder = new Set(["Messi", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])
console.log(eder) 
//  Set(6) {"Messi", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"}
