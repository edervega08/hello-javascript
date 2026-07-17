// Desestructuración y propagación

let myArray = [1, 2, 3, 4]

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

// Acceso tradicional a un elemento del array mediante su índice
let myValue = myArray[1]
console.log(myValue)

// Acceso tradicional a una propiedad del objeto
// y almacenamiento de su valor en una variable
let myName = person.name
console.log(myName)

// ====================
// DESESTRUCTURACIÓN
// ====================

// Sintaxis de desestructuración de arrays
// Cada variable recibe el valor de la posición correspondiente del array

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray

// Equivale a:
// let myValue0 = myArray[0]
// let myValue1 = myArray[1]
// let myValue2 = myArray[2]
// let myValue3 = myArray[3]
// let myValue4 = myArray[4]

console.log(myValue0) // 1
console.log(myValue1) // 2
console.log(myValue2) // 3
console.log(myValue3) // 4
console.log(myValue4) // undefined (no existe posición 4)



// Desestructuración con valores predeterminados
// Si el array no tiene un elemento en esa posición,
// se asigna el valor por defecto indicado
//valores por defecto no se cambiaran en el array original
let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray

console.log(myValue5) // 1
console.log(myValue6) // 2
console.log(myValue7) // 3
console.log(myValue8) // 4
console.log(myValue9) // 0 (valor por defecto)

//Cuando el valor no existe
let ejemplovacio = [1, 2]

let [a, b, c = 9, d = 8] = ejemplovacio

console.log(c, d)
// Ignorar elementos del array
// Las comas vacías indican que no queremos guardar
// esos elementos en ninguna variable

let [myValue10, , , myValue13] = myArray

// myValue10 recibe myArray[0]
// se ignoran myArray[1] y myArray[2]
// myValue13 recibe myArray[3]

console.log(myValue10) // 1
console.log(myValue13) // 4

// Sintaxis objects

//en objetos por defecto debe coincidir con el nombre de la propiedad.
let { name, age, alias } = person //persona guarda una referencia al objeto completo(osea mismo nombre)
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis objects con valores predeterminados

let { name2, age2, alias2, email = "email@email.com" } = person
console.log(name2) // No existe
console.log(age2)  // No existe
console.log(alias2)  // No existe
console.log(email)

// Sintaxis objects con nuevos nombres de variables
//no importa el orden
let { alias: alias3, name: name3, age: age3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Objects anidados

let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}

// Desestructuración de objetos anidados

// Se extrae la propiedad name de person3
// y se guarda en la variable name4

// Se entra al objeto job y se extrae su propiedad name
// guardándola en la variable jobName

let { name: name4,job: { name: jobName } } = person3
// Muestra el nombre de la persona
console.log(name4) // Brais
// Muestra el nombre de la profesión
console.log(jobName) // Programador

// Propagación (...)
//Expande todos los elementos de un array o todas las propiedades de un objeto aquí.

// Sintaxis arrays
//let myArray = [1, 2, 3, 4]

let myArray2 = [...myArray, 5, 6]

console.log(myArray2)//[1, 2, 3, 4,5,6]

// Copia de arrays

let myArray3 = [...myArray] //copia el original 

console.log(myArray3)//[1, 2, 3, 4]

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4) //[1, 2, 3, 4, 1, 2, 3, 4,5,6,1, 2, 3, 4]

// Sintaxis objects

let person4 = { ...person, email: "braismoure@mouredev.com" }

console.log(person4)// copia y le pone mas propiedades

// Copia de objects

let person5 = { ...person }

console.log(person5)