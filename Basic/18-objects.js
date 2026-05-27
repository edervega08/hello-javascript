// Objetos
// Sintaxis
let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

// Acceso a propiedades
// Notación punto
console.log(person.name)

// Notación de corchetes
console.log(person["name"])

// Modificación de propiedades

person.name = "Brais Moure"
console.log(person.name)

console.log(typeof person.age)//tipo de dato de la propiedad
person.age = "37"//se cambia a strin
console.log(person.age)//37
console.log(typeof person.age)


// Eliminación de propiedades
delete person.age
console.log(person)//ya sin age

// Nueva propiedad
person.email = "braismoure@mouredev.com"//nueva propiedad email
person["age"] = 37//se agrega otra vez el age
console.log(person)//

// Métodos (funciones)

let person2 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    }
}
person2.walk()
console.log("vamos aqui++++++++++++++++++")
// Anidación de objetos

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

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objetos

let person4 = {
    name: "Brais Moure",
    alias: "MoureDev",
    email: "braismoure@mouredev.com",
    age: 37
}

console.log(person)
console.log(person4)

//false ambas por que se compara el valor de en memeria
console.log(person == person4)//false
console.log(person === person4)//false

console.log(person.name == person4.name)//true

// Iteración

for (let key in person4) {
    console.log(key + ": " + person4[key])//imprime cada clave y su valor
}//metodo de acceso por [] por que con el punto no se puede acceder a la clave de forma dinamica

// Funciones como objetos

function Person(name, age) { // Debería ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Brais", 37)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)