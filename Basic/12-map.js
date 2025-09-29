/* Qué es: Es un objeto especial de JavaScript que guarda pares clave-valor.
Uso: Se crea con el constructor new Map(). */
// Map
// Declaración

let myMap = new Map()

console.log(myMap)
// Map(0) {} → Map vacío

// Inicialiación

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)
// Map(3) {"name" => "Brais", "email" => "braismoure@mouredev.com", "age" => 37}

// Métodos y propiedades
/* Una propiedad es un valor que pertenece a un objeto, array o set, mientras que un método es una función que pertenece a ese mismo objeto y se usa para realizar acciones o modificarlo. */

// set
//con set se le agrega
//si la clave no existe la crea y si ya exisste actualiza valor
myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure") //usando la misma clave solo se actualiza el valor, la clave no se debe repetir

console.log(myMap)
// Map(4) {"name" => "Brais Moure", "email" => "braismoure@mouredev.com", "age" => 37, "alias" => "mouredev"}

// get
//para recupera valor (osea imprime lo que tiene la clave y si no existe da undefined)
console.log(myMap.get("name"))    // "Brais Moure"
console.log(myMap.get("surname")) // undefined

// has
//verifica si existe tal clave 
console.log(myMap.has("surname")) // false
console.log(myMap.has("age"))     // true
console.log(myMap) // Map(4) {"name" => "Brais Moure", "email" => "braismoure@mouredev.com", "age" => 37, "alias" => "mouredev"}

// delete

myMap.delete("email") //Se le especifica la clave a eliminar

console.log(myMap)
// Map(3) {"name" => "Brais Moure", "age" => 37, "alias" => "mouredev"}

// keys, values y entries

console.log("keys", myMap.keys())     // keys MapIterator {"name", "age", "alias"}
console.log("values", myMap.values()) // values MapIterator {"Brais Moure", 37, "mouredev"}
console.log("entries", myMap.entries()) 
// entries MapIterator {"name" => "Brais Moure", "age" => 37, "alias" => "mouredev"}

// size

console.log(myMap.size) // 3 → el tamaño actual del Map

// clear

myMap.clear() //borra todo el contenido del map

console.log(myMap) 
// Map(0) {}
