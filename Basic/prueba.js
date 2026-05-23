// 1. Crea un bucle que imprima los números del 1 al 20
for(let i=0; i<=20; i++){
    console.log(`numero ${i}`);
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
    if(k%2===0){
        console.log(k)
    }

for(let a=2; a<=50; a=a+2){
    console.log(a)
}

console.log("while");
let e=1;
while(e<=50){
    if(e%2===0){
        console.log(e)
    }
    e++;//fuera del if, por que si no se cumpliria siempre lo mismo y se iria a infinito
}

console.log("do while");
let g=1;
do{
    if(g%2===0){
        console.log(g)
    }   g++;
} while(g<=50)

// 4. dado un array  de nombres, usa un bucle para imprimir cada nombre en la consola
let array=["GATO","PERRO","VACA","PATO"];
for(let valor of array)
{
    console.log(valor)
}
console.log("otra forma")
// o
for(let i=0; i<array.length; i++){
    console.log(array[i])
}
console.log("while")
// while
let u=0;
while(u<array.length){
    console.log(array[u])
    u++;
}
console.log("do while")
let r=0;
do{console.log(array[r])
    r++;
}while(r<array.length)

// 5. escribe un bucle que cuente el numero de vacales en una cadena de texto
let texto = "Aprender JavaScript es genial";
let vocales = "aeiouAEIOU";
let contador = 0;

for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i])) {
    contador++;
  }
}

console.log("Número de vocales:", contador);

 //6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let arrayNumeros = [1, 2, 3, 4, 5];
let producto = 1; //inicializamos en 1 porque si fuera 0 el resultado siempre seria 0
for(let i=0; i<arrayNumeros.length; i++){
    producto =producto* arrayNumeros[i]; //producto = producto * arrayNumeros[i]
}

console.log(producto)



 // 7. Escribe un bucle que imprima la tabla de multiplicar del 5
 //let multiplicando =0;
 for(let i=0; i<=10; i++){
   //multiplicando = 5 * i;
   // console.log(5*i);
    console.log(`La multiplicacion de 5 x ${i} = ${5*i}`);

 }
 
// 8. Usa un bucle para invertir una cadena de texto
let cadena="Eder vega";
let invertir="";

for (let i=cadena.length-1; i>=0; i--){
 invertir=invertir+cadena[i];

}
console.log(invertir)
//9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibo=[0,1]; 
// Se crea el arreglo con los dos primeros números de Fibonacci.
// Fibonacci inicia con 0 y 1.

for(let i=2; i<10; i++){
// i=2 porque las posiciones 0 y 1 ya existen.
// i<10 porque queremos llegar hasta tener 10 elementos.
// i++ aumenta una posición en cada vuelta.

    fibo[i]=fibo[i-1]+fibo[i-2]; // Se calcula el nuevo número usando:
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

console.log(fibo);// [0,1,1,2,3,5,8,13,21,34]


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numeros = [5, 12, 8, 20, 3, 15];// Arreglo original con los números a revisar.
let nuevoarray=[];// Arreglo vacío donde se guardarán solo los mayores a 10.

for(i=0; i<numeros.length; i++){
// i=0 → empieza desde la primera posición.
// i<numeros.length → recorre todas las posiciones.
// i++ → avanza una posición en cada vuelta.

    if(numeros[i]>10){    // Toma el número actual y pregunta:// ¿es mayor que 10?
        nuevoarray.push(numeros[i])// Si es verdadero, agrega ese número al nuevo arreglo.
        // nuevoarray.unshift(numeros[i])//push al final, unshift al principio
    }
}

console.log(nuevoarray)// [12,20,15]