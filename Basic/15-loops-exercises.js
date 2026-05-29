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
let q = 1;
while(q<=20){
    console.log(q);
    q++;
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
for (let i = cadena2.length-1; i>= 0; i--) {
  // i empieza en el último índice (length - 1 → posición 7 en "invertir")
  // condición: i >= 0 → se detiene cuando llega antes del primer carácter
  // actualización: i-- → retrocede uno en cada vuelta

//resultado = resultado + cadena2[i]; // vamos concatenando cada carácter al resultado
  resultado += cadena2[i]; // vamos concatenando cada carácter al resultado
  // Ejemplo: "r" → "ri" → "riv" → ... hasta "ritrevni"
}
//el console va fuera del for, para que lo de completo al final, 
// si lo ponemos dentro se va a imprimir cada paso del proceso, no el resultado final
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
//OTRA FORMA\
//9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibo=[0,1]; 
// Se crea el arreglo con los dos primeros números de Fibonacci.
// Fibonacci inicia con 0 y 1.

for(let i=2; i<10; i++){
// i=2 porque las posiciones 0 y 1 ya existen.
// i<10 porque queremos llegar hasta tener 10 elementos.
// i++ aumenta una posición en cada vuelta.

    fibo[i]=fibo[i-1]+fibo[i-2];
    // Se calcula el nuevo número usando:
    // número anterior + número dos posiciones atrás

    // Primera vuelta:
    // i=2
    // fibo[2]=fibo[1]+fibo[0]
    // fibo[2]=1+0
    // resultado: [0,1,1]

    // Segunda vuelta:
    // i=3
    // fibo[3]=fibo[2]+fibo[1]
    // fibo[3]=1+1
    // resultado: [0,1,1,2]

    // Tercera vuelta:
    // i=4
    // fibo[4]=fibo[3]+fibo[2]
    // fibo[4]=2+1
    // resultado: [0,1,1,2,3]

    // Cuarta vuelta:
    // i=5
    // fibo[5]=fibo[4]+fibo[3]
    // fibo[5]=3+2
    // resultado: [0,1,1,2,3,5]

    // Y así continúa...
}

console.log(fibo)// [0,1,1,2,3,5,8,13,21,34]
//CON WHILE

let n2 = 10;
// Cantidad total de números que queremos generar.

let primero2 = 0;
// Primer número inicial de Fibonacci.

let segundo2 = 1;
// Segundo número inicial de Fibonacci.

let serie2 = [primero2, segundo2];
// Se crea el arreglo con los dos primeros valores: [0,1]

let W = 2;
// Inicia en 2 porque las posiciones 0 y 1 ya existen.

while (W < n2) {// Mientras W sea menor a 10, continúa el ciclo.

  let siguiente = primero2 + segundo2;  // Calcula el nuevo número: anterior + actual
  serie2.push(siguiente);  // Agrega el nuevo valor al arreglo.
  primero2 = segundo2;  // El segundo pasa a ser el primero.
  segundo2 = siguiente;  // El nuevo valor pasa a ser el segundo.
  W++; // Avanza una iteración.
}
console.log(serie2);// [0,1,1,2,3,5,8,13,21,34]

//DO WHILE
let n3 = 10; // Cantidad de números a generar.
let primero3 = 0;// Primer valor inicial.
let segundo3 = 1;// Segundo valor inicial.
let serie3 = [primero3, segundo3];// Se crea el arreglo con [0,1]
let j2 = 2;// Empieza en 2 porque ya existen dos números.

do {
// El bloque se ejecuta al menos una vez.

  let siguiente = primero3 + segundo3;
  // Calcula siguiente número.
  serie3.push(siguiente);  // Inserta el número al arreglo.
  primero3 = segundo3;  // El segundo valor pasa al primero.
  segundo3 = siguiente;  // El nuevo valor pasa a segundo.
  j2++;  // Aumenta el contador.

} while (j2 < n3);
// Después de ejecutar pregunta si continúa.
console.log(serie3);// [0,1,1,2,3,5,8,13,21,34]


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10?

let numeros2 = [5, 12, 8, 20, 3, 15];// Arreglo original con los números a revisar.
let nuevoarray=[];// Arreglo vacío donde se guardarán solo los mayores a 10.

for(i=0; i<numeros2.length; i++){
// i=0 → empieza desde la primera posición.
// i<numeros.length → recorre todas las posiciones.
// i++ → avanza una posición en cada vuelta.

    if(numeros2[i]>10){    // Toma el número actual y pregunta:// ¿es mayor que 10?
        nuevoarray.push(numeros2[i])// Si es verdadero, agrega ese número al nuevo arreglo.
        // nuevoarray.unshift(numeros[i])//push al final, unshift al principio
    }
}

console.log(nuevoarray)// [12,20,15]

//=============================================================================================
//EXTRAS:
let array3 = ["PERRO", "GATO", "STOP", "VACA", "PATO"];
// recorre el array y se detiene si encuentra "STOP" ya que niega,
//pero como es igual ya no es true y se detiene el bucle, por eso no imprime "STOP" ni nada después de "STOP"
for (let i = 0; i < array.length && array[i] !== "STOP"; i++) {
  // inicialización: let i = 0 → empezamos desde el primer índice
  // condición: i < array.length && array[i] !== "STOP"
  //   - i < array.length → sigue mientras no se pase del tamaño del array
  //   - array[i] !== "STOP" → se detiene si encuentra "STOP"
  // actualización: i++ → avanza de 1 en 1

  console.log(array[i]); // imprime hasta antes de "STOP"
}

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
//ederr