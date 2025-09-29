// -----------------------------
// VAR
// -----------------------------
// Se puede volver a declarar en el mismo ámbito (NO recomendable)
// Se puede reasignar
// Su alcance (scope) es de función o global
// ↑ Esto puede causar errores si se usa en bloques como if o for

var helloWorld = "¡Hola, JavaScript!"; // <-- variable tipo STRING
console.log(helloWorld);

helloWorld = "¡Hola de nuevo, JavaScript!"; // <-- se reasigna sin problema
console.log(helloWorld);

// -----------------------------
// LET
// -----------------------------
// NO se puede volver a declarar en el mismo ámbito
// SÍ se puede reasignar
// Su alcance (scope) es de bloque { } → más seguro y predecible que var

let helloWorld2 = "¡Hola, JavaScript 2!"; // <-- variable tipo STRING
console.log(helloWorld2);

helloWorld2 = "¡Hola de nuevo, JavaScript 2!"; // <-- se reasigna sin problema
console.log(helloWorld2);

// -----------------------------
// CONST
// -----------------------------
// NO se puede volver a declarar
// NO se puede reasignar
// Scope de bloque (igual que let)
// Se usa para valores que NO cambian

const helloWorld3 = "¡Hola, JavaScript 3!"; // <-- variable tipo STRING
console.log(helloWorld3);

// helloWorld3 = "¡Hola de nuevo, JavaScript 3!" // ❌ ERROR → no se puede reasignar


//EJEMPLO
if (true) {
  var x = "Soy var";   // var ignora el bloque → se vuelve global o de función
  let y = "Soy let";   // let respeta el bloque → solo existe aquí dentro
}

console.log(x); // ✅ "Soy var"
console.log(y); // ❌ ERROR → y no está definida fuera del if
