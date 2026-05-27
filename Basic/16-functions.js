// Funciones
// Simple
function myFunc() {
    console.log("¡Hola, función!")
}
myFunc() // Llamada a la función, se ejecuta el código dentro de ella
for (let i = 0; i < 5; i++) {
    myFunc()
}


//CON PARAMETROS
function myFuncWithParams(name, surname) {
    console.log(`¡Hola, ${name} ${surname}!`)
}
//se manda a llamar la función con los parametros 
//si no se le pasan seria undefined
myFuncWithParams("Eder","Vega") //se le pasan parametros


//FUNCION ANONIMA
//se asigna a una variable, no tiene nombre
const myFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)
}
//se llama a la función con el nombre de la variable 
myFunc2("Brais Moure");

// ARROW FUNCTION

const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

myFunc3("Joel vega")
myFunc4("joel vega")

//o tambien 
const saludar = nombre => "Hola " + nombre
console.log(saludar("Eder"))

//o 
const suma=(a,b)=>a+b

console.log(suma(5,3))
/* 
1 parámetro → parentesis opcionales
2 o más → parentesis obligatorios
{} → necesita return
Sin {} → return automático */

// o sin variable
//sin variable 
setTimeout(() => {
   console.log("Hola")
},1000)
console.log("================arrow funcion =========================")

// Parámetros
//2 parametros a,b
function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)//NaN
sum()//NaN

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

// Por defecto

defaultSum()//0
defaultSum(5)//5
defaultSum(5, 10)//15
defaultSum(undefined, 5)//5
defaultSum(b=5)//5

// Retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)//50

//FUNCIONES ANIDADAS
function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}

extern()// Función externa Y llama a las 2
// intern() Error: fuera del scope, SOLO ESTA DENTRO


// FUNCIONES DE ORDEN SUPERIOR

function applyFunc(func, param) {
    func(param)//se le pasa la funcion de arriba myFunc4
}
//name recibe o toma el valor enviado y queda reemplazado temporalmente por ese valor durante la ejecución.
applyFunc(myFunc4, "función de orden superior")
//SALIDA: ¡Hola, función de orden superior!

/* Entra el primer parámetro, que es una función.
Dentro de applyFunc se ejecuta esa función.
Como esa función necesita un parámetro, se le pasa el segundo parámetro recibido por applyFunc.
Luego la función ejecutada hace lo que tenga definido. */



// forEach

const myArray = [1, 2, 3, 4]

const mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

const myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))