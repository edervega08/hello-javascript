

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
let suma=0;
function sumar(a,b){
        console.log(a+b);
}
sumar(5,5)//10

//o
function sumar2(a,b){
        return a+b;
}
console.log(sumar2(3,3))//6
//o
const sumar3 = (a, b) => (a + b);
console.log(sumar3(12, 13)); //  25


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function mayor(array) {
    let numeroMayor = array[0]; // 1. Empezamos asumiendo que el primero es el mayor

    for (let i = 1; i < array.length; i++) { // 2. Recorremos desde el segundo elemento
        if (array[i] > numeroMayor) {        // 3. Comparamos con el mayor actual
            numeroMayor = array[i];          // 4. Si es más grande, lo actualizamos
        }
    }
    return numeroMayor; // 5. Devolvemos el resultado final
}

console.log(mayor([1, 2, 3, 4, 5])); // Imprime: 5

 //otra forma
function obtenerMayorTradicional(numeros) {
  let mayor = numeros[0]; // Asumimos que el primero es el mayor
  
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}
console.log(obtenerMayorTradicional([1, 2, 3, 4, 5])); // 5

//con Math.max y spread operator
function obtenerMayor(numeros) {
  return Math.max(...numeros);
}
const arreglo = [10, 5, 85, 22, 14];
console.log(obtenerMayor(arreglo)); // Imprime: 85

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(cadena) {
    let contador=0;
    let vocales="aeiouAEIOU";
    for(let i=0; i<cadena.length; i++){
        if(vocales.includes(cadena[i])){
            contador++;
        }   
}
    return contador;
}
console.log(contarVocales("Hola, ¿cómo estás?"))//
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function mayusculas(array){
    let nuevoArray=[];
    for(let i=0; i<array.length; i++){
        nuevoArray.push(array[i].toUpperCase());
    }
    return nuevoArray;
}
console.log(mayusculas(["hola", "mundo"])); // ["HOLA", "MUNDO"]
//O
function mayusculasMap(array) {
    return array.map(string => string.toUpperCase());
}

console.log(mayusculasMap(["hola", "mundo"])); // ["HOLA", "MUNDO"]
//O
 function mayusculasForOf(array) {
    let nuevoArray = [];
    
    for (let string of array) {
        nuevoArray.push(string.toUpperCase());
    }
    
    return nuevoArray;
}

console.log(mayusculasForOf(["hola", "mundo"])); // ["HOLA", "MUNDO"]
// CON FOR
function mayusculasMismoArray(array) {
    for (let i = 0; i < array.length; i++) {
        // Guardamos el cambio directamente en la misma posición
        array[i] = array[i].toUpperCase(); 
    }
    return array;
}

const palabras = ["hola", "mundo"];
console.log(mayusculasMismoArray(palabras)); // ["HOLA", "MUNDO"]


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function primo(numero){
    if(numero %2==0){
        return false;
    
    } 
    return true;
}
console.log(primo(7))//true
console.log(primo(10))//false
//completo
function primo(numero) {
    // Los números menores o iguales a 1 no son primos
    if (numero <= 1) return false;
    
    // El 2 es el único primo par
    if (numero === 2) return true;
    if (numero % 2 === 0) return false;

    // Buscamos si tiene otros divisores impares
    for (let i = 3; i * i <= numero; i += 2) {
        if (numero % i === 0) {
            return false; // Si encuentra otro divisor, NO es primo
        }
    }

    return true; // Si pasó todas las pruebas, SÍ es primo
}
console.log(primo(7));  // true
console.log(primo(10)); // false
console.log(primo(9));  // false (ahora sí da el resultado correcto)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array 
// que contenga los elementos comunes entre ambos

function elementosComunes(array1, array2) {
    return array1.filter(function(elemento) {
        return array2.includes(elemento)
    })
}



// 7. Crea una función que reciba un array de números 
// y devuelva la suma de todos los números pares

function sumaPares(numeros) {
    return numeros
        .filter(function(numero) {
            return numero % 2 === 0
        })
        .reduce(function(suma, numero) {
            return suma + numero
        }, 0)
}



// 8. Crea una función que reciba un array de números 
// y devuelva un nuevo array con cada número elevado al cuadrado

function elevarCuadrado(numeros) {
    return numeros.map(function(numero) {
        return numero ** 2
    })
}

// 9. Crea una función que reciba una cadena de texto  y devuelva la misma cadena con las palabras en orden inverso
function invertirPalabras(texto) {
    return texto
        .split(" ")
        .reverse()
        .join(" ")
}

// 10. Crea una función que calcule el factorial de un número dado
function factorial(numero) {
    let resultado = 1

    for (let i = 1; i <= numero; i++) {
        resultado *= i
    }

    return resultado
}

//otra forma
function factorial(n){
    if(n===0 || n===1){
        return 1;
    }
    let resultado=1;
    for(let i=2; i<=n; i++){
        resultado *= i; // resultado = resultado * i
    }
    return resultado;
}
console.log(factorial(5))//120