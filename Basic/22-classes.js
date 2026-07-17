//Clases

class Person {//Es la definición de una clase, es decir, un molde para crear objetos.

    constructor(name, age, alias) {
        //El this.nombre de la izquierda es una propiedad del objeto que se está creando.
        //el de la derecha es el parámetro recibido
        this.name = name
        this.age = age
        this.alias = alias
    }

}

// Sintaxis
//Crea un nuevo objeto usando la clase Persona y guarda ese objeto en la variable persona1.
let person = new Person("Brais", 37, "MoureDev") //se crea una variable y dentro se crea el objeto y los parametros
let person2 = new Person("Brais", 37, "MoureDev")//se crea una variable y dentro se crea el objeto

console.log(person)//tiene un objeto
console.log(person2)//tiene un objeto

console.log(typeof person) //es de tipo objeto

// Valores por defecto

class DefaultPerson {
//Si no recibo un valor para alguno de estos parámetros, usaré este valor por defecto."
    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }

}
//solo se le pansan 2 parametros 
let person3 = new DefaultPerson("Brais", 37)

console.log(person3)//DefaultPerson { name: 'Brais', age: 37, alias: 'Sin alias' }

// Acceso a propiedades

console.log(person3.alias)//sin alias
console.log(person3["alias"])//sin alias

person3.alias = "MoureDev"//MoureDev (modifica)

console.log(person3.alias)//MoureDev 


// Funciones en clases
class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }

}

let person4 = new PersonWithMethod("Brais", 37, "MoureDev")
person4.walk()


// Propiedades privadas
class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }

}

let person5 = new PrivatePerson("Brais", 37, "MoureDev", "IBAN123456789")

// No podemos acceder
// console.log(person5.bank) 
// person5.bank = "new IBAN123456789" // bank no es #bank
//4.54.00
console.log(person5)

/* Getter → sirve para leer u obtener el valor de una propiedad (normalmente privada).
Setter → sirve para modificar o asignar el valor de una propiedad (normalmente privada). */

// Getters y Setters
class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    } 

    set bank(parametro) {//setter
        this.#bank = parametro
    }
    get bank() {
        return this.#bank
    } 

}

person6 = new GetSetPerson("Brais", 37, "MoureDev", "IBAN123456789")

console.log(person6)//NO MUESTRA NADA, SI ESTAN GUARDADAS PERO PRIVADAS
console.log(person6.name)

person6.bank = "new IBAN123456789"
console.log(person6.bank)
console.log("++++++++++++++vamos aqui+++++++++++")



// Herencia de clases
class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

class Dog extends Animal {

    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {

    constructor(name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

let myDog = new Dog("MoureDog")
myDog.run()
myDog.sound()

let myFish = new Fish("MoureFish", 10)
myFish.swim()
myFish.sound()

// Métodos estáticos

class MathOperations {

    static sum(a, b) {
        return a + b
    }
}

console.log(MathOperations.sum(5, 10))
console.log("++++++++++++++vamos aqui+++++++++++")