// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

/* for (inicialización; condición; actualización) {
   // bloque de código
}
 */

// 1. Crea un bucle que imprima los números del 1 al 20
 console.log("FOR");
let i = 1; 
for(let i=1; i<=20; i++){
    console.log(i);
}


 console.log("WHILE");
let j = 1;
while(j<=20){
    console.log(j);
    j++;
}
// 2. crea un bucle que sume los números del 1 al 100 e imprima el resultado
//for
let suma=0;
for(let i=1; i<=100; i++){
    suma += i;
    console.log(suma) //imprimir el acumulado en cada paso del bucle.
}

//while
console.log("while")
suma=0;
let j=1;
while(j<=100){
    suma+=j;
    j++;
    console.log(suma)
}

//do while
console.log("do while")
let suma_y=0;
let k=1;
do{
    suma_y+=k;
    k++;
    console.log(suma_y)
} while(k<=100)


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for(let k=1;k<=50;k++)
{
    if(k%2===0){
        console.log(k)
    }}

    console.log("ejemplo 2")

//otra forna  
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

//con while
console.log("while");
let d = 1;
while (d <= 50) {
    if (d % 2 === 0) {
        console.log(d);
    }
    d++;//fuera del if, por que si no se cumpliria siempre lo mismo y se iria a infinito
}
//while v2
console.log("while v2")
let a = 2;
while (a <= 50) {
    console.log(a);
    a += 2;
}

//do while

console.log("do while");
let g = 1;
do {
  if (g % 2 === 0) {
    console.log(g);
  }
  g++; // incrementamos siempre al final de la iteración
} while (g <= 50);

//do while v2
console.log("do while v2");
let l = 2;
do {
  console.log(l);
  l += 2; // avanzamos de 2 en 2 (solo pares)
} while (l <= 50);


// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let array=["GATO","PERRO","VACA","PATO"];
 console.log("for of")
for(let valor of array)
{
    console.log(valor)
}
//o
 console.log("for")
 for(let i=0;i<array.length;i++){
    console.log(array[i])
 }

 //while
 console.log("while")
let aa = 0;


while (aa < array.length) {
  console.log(array[aa]);
  aa++;
}

//do while
console.log("DO WHILE")

let r = 0;

do {
  console.log(array[r]);
  r++;
} while (r < array.length);



// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = "Hola, ¿cómo estás?";
let contadorVocales = 0;
let vocales = "aeiouAEIOU";

for (let i = 0; i < cadena.length; i++) {
  if (vocales.includes(cadena[i])) {
    contadorVocales++;
  }
}
console.log(contadorVocales)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros=[1,2,3,4,5];
let producto=1;
for(let i=0;i<numeros.length;i++){
    producto=producto*numeros[i];
}
console.log(producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for(let i=1;i<=10;i++){
  console.log(`5 x ${i} =  ${5*i}`);
}

// 8. Usa un bucle para invertir una cadena de texto
let cadena2 = "invertir";
let resultado = "";

// for tiene 3 partes: inicialización ; condición ; actualización
for (let i = cadena2.length - 1; i >= 0; i--) {
  // i empieza en el último índice (length - 1 → posición 7 en "invertir")
  // condición: i >= 0 → se detiene cuando llega antes del primer carácter
  // actualización: i-- → retrocede uno en cada vuelta

  resultado += cadena2[i]; // vamos concatenando cada carácter al resultado
  // Ejemplo: "r" → "ri" → "riv" → ... hasta "ritrevni"
}

console.log(resultado); // "ritrevni"

 //9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
// Generar los primeros 10 números de Fibonacci usando for
let n = 10;             // cantidad de términos a generar
let primero = 0;         // primer término
let segundo = 1;         // segundo término
let serie = [primero, segundo]; // guardamos los dos primeros

for (let i = 2; i < n; i++) {  // empezamos desde el índice 2
  let siguiente = primero + segundo; // sumamos los dos anteriores
  serie.push(siguiente);             // añadimos a la serie
  primero = segundo;                 // actualizamos primero
  segundo = siguiente;               // actualizamos segundo
}

console.log(serie); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


//CON WHILE
let n2 = 10;
let primero2 = 0;
let segundo2 = 1;
let serie2 = [primero2, segundo2];
let W = 2;

while (W < n2) {
  let siguiente = primero2 + segundo2;
  serie2.push(siguiente);
  primero2 = segundo2;
  segundo2 = siguiente;
  W++;
}

console.log(serie2); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


//DO WHILE

let n3 = 10;
let primero3 = 0;
let segundo3 = 1;
let serie3 = [primero3, segundo3];
let j2 = 2;

do {
  let siguiente = primero3 + segundo3;
  serie3.push(siguiente);
  primero3 = segundo3;
  segundo3 = siguiente;
  j2++;
} while (j2 < n3);

console.log(serie3); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10?
let numeros2=[2,20,40,2,51,30,3]
let guardar=[];
for(let i=0;i<numeros2.length;i++){
  if(numeros2[i]>10){
guardar.push(numeros2[i])
    
  }
}
console.log("mayores a 10",guardar)






//EXTRAS:
let array3 = ["PERRO", "GATO", "STOP", "VACA", "PATO"];

for (let i = 0; i < array.length && array[i] !== "STOP"; i++) {
  // inicialización: let i = 0 → empezamos desde el primer índice
  // condición: i < array.length && array[i] !== "STOP"
  //   - i < array.length → sigue mientras no se pase del tamaño del array
  //   - array[i] !== "STOP" → se detiene si encuentra "STOP"
  // actualización: i++ → avanza de 1 en 1

  console.log(array[i]); // imprime hasta antes de "STOP"
}

// Salida:
// PERRO
// GATO

//WHILE
let array2 = ["PERRO", "GATO", "STOP", "VACA", "PATO"];

let i2 = 0; // inicializamos fuera → posición inicial

// condición: mientras i < array2.length y el valor actual no sea "STOP"
while (i2 < array2.length && array2[i2] !== "STOP") {
  console.log(array2[i2]); // imprime el elemento actual

  i2++; // incremento al final (siempre dentro del bucle)
}

// Salida:
// PERRO
// GATO
