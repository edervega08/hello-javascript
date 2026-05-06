// Strings (cadenas de texto)

// Concatenación

let myName = "Brais"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)
let name='eder';

// Longitud
console.log(greeting.length) //length es una propidad de los strings

// Acceso a caracteres
//SE ACCEDE AL CARACTER DE LA VARIABLE 
console.log(greeting[0])
console.log(greeting[11])


// Métodos comunes
console.log("Métodos comunes")
console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Hola")) // Índice Muestra 0 por que esta en el primero elemento 
console.log(greeting.indexOf(",")) // Índice Muestra 4 que esta en ese lugar
console.log(greeting.indexOf("Brais")) //Índice Muestra 6 por que esta en el elemento 6
console.log(greeting.indexOf("MoureDev"))//Menos -1 por que no lo encontro
console.log(greeting.includes("Hola")) // Incluye Muestra true por que solo confirma si esta o no
console.log(greeting.includes("Ho")) // Incluye Muestra true por que solo confirma si esta o no
console.log(greeting.includes("Brais"))// Incluye Muesra true por que solo confirma si esta o no
console.log(greeting.includes("MoureDev"))//muestra false por que no esta
console.log(greeting.slice(0, 10)) // Sección retorna los elemento que estan entre el indice 0 y 10 
console.log(greeting.replace("Brais", "MoureDev")) // Reemplazo- remplaza Brais por MoureDev
console.log("+++++++++++++++++++++++++++++++++++++++++++++++") // Reemplazo- remplaza Brais por MoureDev

// Template literals (plantillas literales)

// Strings en varias líneas
//acento invertido
let message = `Hola, este
es mi
curso de
JavaScript`
console.log(message)  //imprime en el orden que esta el string

// Interpolación de valores con usando backticks
let email = "braismoure@mouredev.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)

console.log("+++++++++++++++++++++++++++++++++")

// charAt(index) → posición
console.log("Hola".charAt(1)); // "o"
console.log(email.charAt(1)); // "r"

// includes(texto) → subcadena
console.log("Hola".includes("Ho")); // true

// startsWith(texto)--comprueba inicia con el argumento que se le esta pasando es Ho
console.log("Hola".startsWith("Ho")); // true

// endsWith(texto)--comprueba termina con el argumento que se le esta pasando es la
console.log("Hola".endsWith("la")); // true

// indexOf(texto) 
console.log("Hola".indexOf("o")); // 1
console.log(email.indexOf("e"));//9 en esa posicion se encuentra la e

// slice(inicio, fin)--muestra lo que esta dentro del ese rango
console.log("Hola".slice(1,3)); // "ol"
console.log(email.slice(1,10)); // "raismoure"


let texto1 = "Hola Mundo";
//si se usan indices negativos devuelve vacio
console.log(texto1.slice(0,4));    // "Hola"
console.log(texto1.slice(5,10));   // "Mundo"
console.log(texto1.slice(10,5));   // ""      (no invierte los índices)
console.log(texto1.slice(-5,-1));  // "Mund"  (cuenta desde el final)
//incluye el inicio pero excluye el fin.


// substring(i, j)-de un indice hasta un indice limite
console.log("Hola".substring(0,2)); // "Ho"
let texto = "Hola Mundo";
//se pueden invertir los indices y no ce aceptan los negativos
console.log(texto.substring(0,4));   // "Hola"
console.log(texto.substring(5,10));  // "Mundo"
console.log(texto.substring(10,5));  // "Mundo"  (invierte los índices)
console.log(texto.substring(-3,4));  // "Hola"   (-3 se trata como 0)

// replace(busca, nuevo)-se especifica lo que se quiere remplazar y se escribe el remplazo
console.log("Hola".replace("Ho","Ad")); // "Adla"

// trim() (no argumentos)-Quita espacios en blanco al inicio y al final de un string.
console.log("  Hola  ".trim()); // "Hola"

// 1 split(separador) se especifica que por , comas
console.log("a,b,c".split(",")); // ["a", "b", "c"] array

// 2 Separar por espacios se especifica que por espacios
console.log("Hola cómo estás".split(" ")); 
// ["Hola", "cómo", "estás"] array

// 3️Separar por letra se especifica que por letras
console.log("Hola".split("o")); 
// ["H", "la"]

// 4️ Separar por cadena completa se especifica que por cadena 
console.log("uno##dos##tres".split("##")); 
// ["uno", "dos", "tres"]

// 5️ Separar en cada carácter (sin separador)
console.log("Messi".split("")); 
// ["M", "e", "s", "s", "i"]

//Limitar la cantidad de elementos
console.log("a,b,c,d,e".split(",", 3)); // ["a","b","c"]

//Combinar con otros métodos
let data = "uno,dos,tres";
let arr = data.split(",").map(item => item.toUpperCase());
console.log(arr); // ["UNO","DOS","TRES"]
