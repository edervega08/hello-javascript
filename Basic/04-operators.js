// ============================================================
// 1. OPERADORES ARITMÉTICOS
// ============================================================

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b)  // Módulo → resto de la división
console.log(a ** b) // Exponente

a++ // Incremento en +1
console.log(a)

b-- // Decremento en -1
console.log(b)


// ============================================================
// 2. OPERADORES DE ASIGNACIÓN
// ============================================================

let myVariable = 2
console.log(myVariable)

myVariable += 2  
console.log(myVariable) // 4  (2 + 2)

myVariable -= 2  
console.log(myVariable) // 2  (4 - 2)

myVariable *= 2  
console.log(myVariable) // 4  (2 * 2)

myVariable /= 2  
console.log(myVariable) // 2  (4 / 2)

myVariable %= 2  
console.log(myVariable) // 0  (2 % 2 → residuo es 0)

myVariable **= 2  
console.log(myVariable) // 0  (0 ** 2 → cero elevado a 2 sigue siendo 0)


// ============================================================
// 3. OPERADORES DE COMPARACIÓN
// ============================================================
// NOTA: "a" vale 6 porque se incrementó antes

console.log(a > b)   // Mayor que
console.log(a < b)   // Menor que
console.log(a >= b)  // Mayor o igual que
console.log(a <= b)  // Menor o igual que

// Comparación por valor
/* SOLO compara el valor
❌ Ignora el tipo */
console.log(a == b)   // Igualdad por valor
console.log(a == 6)   // true
console.log(a == "6") // true → convierte string a número
console.log(a == a)   // true

// Comparación estricta (valor y tipo)
//NO convierte tipos
console.log(a === a)   // true
console.log(a === 6)   // true
console.log(a === "6") // false (number vs string)

// Desigualdad
console.log(a != 6)       // false
console.log(a !== "6")    // true → distinto en tipo y valor
//En valor, son "iguales" pero no el tipo

// Casos especiales
console.log(0 == false)   // true (0 se considera falso)
console.log(1 == false)   // false
console.log(2 == false)   // false
console.log(0 == "")      // true un texto vacío se convierte mágicamente en un cero.
console.log(0 == " ")     // true
console.log(0 == '')      // true
console.log(0 == "Hola")  // false
console.log(0 === "")     // false, da falso por que compara estrictamente valor y tipo, aunque en valor son cero son diferentes en tipo 
console.log(undefined == null)  // true Caso ESPECIAL de JS, solo entre ellos son iguales
console.log(undefined === null) // false , Tipos diferentes


// ============================================================
// 3.1 Truthy y Falsy Values
// ============================================================

/* se devuelven los valores no boolean
Truthy values (valores verdaderos):
- Todos los números positivos y negativos (excepto 0)
- Todas las cadenas de texto (excepto vacías)
- El boolean true
*/

/*
con un == da true pero no son iguales
y el === simplemente no por que no son del mismo tipo
Falsy values (valores falsos):
- 0
- -0
- 0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías
*/

// ============================================================
// 4. OPERADORES LÓGICOS
// ============================================================

console.log('++++++++++++ Operadores lógicos ++++++++++++')
//prioridades, !, &&, ||

// AND (&&) → si una condición es falsa, todo es falso
/* Devuelve el primer falsy o el último valor si todos son truthy */
console.log(5 > 10 && 15 > 20)       // false (ambas falsas)
console.log(5 < 10 && 15 < 20)       // true  (ambas verdaderas)
console.log(5 < 10 && 15 > 20)       // false (una falsa)
console.log(5 > 10 && 15 > 20 && 30 > 40) // false (todas falsas)

// OR (||) → basta con que una condición sea verdadera
/* NO devuelve boolean
Devuelve el primer truthy */
console.log(5 > 10 || 15 > 20)       // false
console.log(5 < 10 || 15 < 20)       // true
console.log(5 < 10 || 15 > 20)       // true
console.log(5 > 10 || 15 > 20 || 30 > 40) // false

// Combinado
console.log(5 > 10 && 15 > 20 || 30 < 40) 
// true porque al menos una condición (30 < 40) se cumple

// NOT (!) → negación
console.log(!true)   // false
console.log(!false)  // true

console.log(!(5 > 10 && 15 > 20)) // true
console.log(!(5 > 10 || 15 > 20)) // true 
// Negamos el resultado: si era falso → se vuelve true


// ============================================================
// 5. OPERADOR TERNARIO
// ============================================================

const isRaining = false

isRaining 
  ? console.log("Está lloviendo") : console.log("No está lloviendo")
