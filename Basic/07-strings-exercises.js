// 1. Concatena dos cadenas de texto
let cadena1="CADENA 1"
let cadena2="cadena 2"
console.log(cadena1+" "+cadena2)
//o
cadena2= "CADENA 1"+ " "+ cadena2
console.log(cadena2)

// 2. Muestra la longitud de una cadena de texto
console.log(cadena2.length)

// 3. Muestra el primer y último carácter de un string
console.log(cadena1[0]);
console.log(cadena1[cadena1.length -1]);

// 4. Convierte a mayúsculas y minúsculas un string
let may="MAYUSCULAS";
let min="minisculas"
console.log(may.toLowerCase())
console.log(min.toUpperCase())

// 5. Crea una cadena de texto en varias líneas
let cadena3=`Linea 1
liena 2
linea 3
linea 4`;
console.log(cadena3);

// 6. Interpola el valor de una variable en un string
let Interpolacion="Una interpolacion";
let Interpolacion2="en Java Script";

console.log(`Esta es ${Interpolacion} ${Interpolacion2}` )

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let remplazar="a b c";
console.log(remplazar.replace(/ /g,"-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(Interpolacion.includes("Una"));

// 9. Comprueba si dos strings son iguales
console.log(Interpolacion==Interpolacion);//true
console.log(Interpolacion==Interpolacion2);//false
// 10. Comprueba si dos strings tienen la misma longitud
console.log(Interpolacion.length===Interpolacion.length);//true
console.log(Interpolacion.length===Interpolacion2.length);//false