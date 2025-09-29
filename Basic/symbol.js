// -----------------------------
// 1. Symbol siempre crea valores ÚNICOS
// -----------------------------
let sym1 = Symbol("id")
let sym2 = Symbol("id")

console.log(sym1 === sym2) // false -> aunque tengan la misma descripción, son diferentes

// -----------------------------
// 2. Usar Symbol como clave de objeto
// -----------------------------
// Evita colisiones de nombres de propiedades
let ID1 = Symbol("id") // usamos ID1 para no chocar después
let user1 = {
  name: "Messi",
  [ID1]: 10  // propiedad oculta con Symbol
}

console.log(user1.name) // "Messi"
console.log(user1[ID1]) // 10 (solo accediendo con el symbol)

// -----------------------------
// 3. Symbol como propiedad "oculta"
// -----------------------------
for (let key in user1) {
  console.log(key) // imprime solo "name", NO muestra la propiedad Symbol
}
// O sea, Symbol sirve para "proteger" propiedades que no se iteran normalmente

// -----------------------------
// 4. Symbol.for y Symbol.keyFor
// -----------------------------
// Symbol.for crea símbolos en un registro global (compartidos)
let globalSym1 = Symbol.for("token")
let globalSym2 = Symbol.for("token")

console.log(globalSym1 === globalSym2) // true -> ahora sí son iguales porque vienen del registro global
console.log(Symbol.keyFor(globalSym1)) // "token"

// -----------------------------
// 5. Uso avanzado: Symbol como constantes únicas
// -----------------------------
const COLOR_RED = Symbol("red")
const COLOR_BLUE = Symbol("blue")

function getColorName(color) {
  switch (color) {
    case COLOR_RED:
      return "Rojo"
    case COLOR_BLUE:
      return "Azul"
    default:
      return "Color desconocido"
  }
}

console.log(getColorName(COLOR_RED)) // "Rojo"
console.log(getColorName("red"))     // "Color desconocido" (no sirve un string, solo el symbol)

// -----------------------------
// 6. Symbol.iterator (ejemplo especial)
// -----------------------------
// Algunos símbolos son "internos" y JS los usa para funcionalidades
let arr = [1, 2, 3]

// Symbol.iterator permite recorrer con for..of
let iterator = arr[Symbol.iterator]()

console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 2, done: false }
console.log(iterator.next()) // { value: 3, done: false }
console.log(iterator.next()) // { value: undefined, done: true }


// -----------------------------
// 7. SIN Symbol (problema de sobrescritura)
// -----------------------------
let user3 = {
  name: "Eder",
  role: "admin"
}

// Supongamos que alguien más agrega una propiedad "id"
user3.id = 123
console.log(user3.id) // 123

// Ahora llega otra parte del programa y también quiere usar "id"
user3.id = "XYZ" // ❌ ¡se sobreescribe sin querer!
console.log(user3.id) // "XYZ" (el valor anterior se perdió)


// -----------------------------
// 8. CON Symbol (solución)
// -----------------------------
let ID2 = Symbol("id")   // Creamos un identificador único
let user4 = {
  name: "Eder",
  role: "admin",
  [ID2]: 123             // Propiedad protegida con Symbol
}

console.log(user4[ID2]) // 123

// Ahora si alguien trata de usar "id" normal:
user4.id = "XYZ"
console.log(user4.id)   // "XYZ" (propiedad común)
console.log(user4[ID2]) // 123 (la propiedad con Symbol sigue intacta 🔒)

// -----------------------------
// 9. Comprobamos que no se sobreescribe
// -----------------------------
console.log(Object.keys(user4)) // ["name", "role", "id"] (NO muestra el Symbol)
console.log(Object.getOwnPropertySymbols(user4)) // [ Symbol(id) ]
