// -----------------------------
// Tipos de datos primitivos
// -----------------------------

// Cadenas de texto (string)
let myName = "Brais Moure"      // <-- string con comillas dobles
let alias = 'MoureDev'          // <-- string con comillas simples
let email = `braismoure@mouredev.com` // <-- string con template literals (backticks)

// Números (number)
let age = 37     // <-- número entero
let height = 1.77 // <-- número decimal

// Booleanos (boolean)
let isTeacher = true   // <-- booleano verdadero
let isStudent = false  // <-- booleano falso

// -----------------------------
// Undefined
// -----------------------------
// Una variable declarada SIN valor → su valor es "undefined"
// Representa que aún no tiene nada asignado
let undefinedValue
console.log(undefinedValue) // imprime: undefined

// -----------------------------
// Null
// -----------------------------
// Null se usa cuando queremos indicar que la variable está VACÍA intencionalmente
let nullValue = null
console.log(nullValue) // imprime: null

// -----------------------------
// Symbol
// -----------------------------
// Symbol crea un valor ÚNICO e INMUTABLE
// Aunque dos símbolos tengan la misma descripción, NUNCA serán iguales
let mySymbol = Symbol("mysymbol")
let mySymbol2 = Symbol("mysymbol")
console.log(mySymbol === mySymbol2) // false (aunque tengan mismo texto, son distintos)

// Se usa en casos especiales para crear identificadores únicos
console.log(mySymbol) // imprime: Symbol(mysymbol)

// -----------------------------
// BigInt
// -----------------------------
// Tipo especial para trabajar con números MUY grandes sin perder precisión
let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n

// -----------------------------
// Mostramos los tipos de datos con typeof
// -----------------------------

console.log(typeof myName)   // string
console.log(typeof alias)    // string
console.log(typeof email)    // string

console.log(typeof age)      // number
console.log(typeof height)   // number

console.log(typeof isTeacher) // boolean
console.log(typeof isStudent) // boolean

console.log(typeof undefinedValue) // undefined

console.log(typeof nullValue) // "object" (esto es un bug histórico de JS)

console.log(typeof mySymbol) // symbol

console.log(typeof myBigInt)  // bigint
console.log(typeof myBigInt2) // bigint
