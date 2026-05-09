// if/else/else if/ternaria
let edad=18;
if(edad>=18){
    console.log("es mayor de edad");
}

if(edad>=18){
    console.log("es mayor de edad");
}
else{
    console.log("es menor de edad");
}
//EL TERNARIO SE PUEDE USAR EN UNA VARIABLE,RETURN Y EN CONSOLE.LOG
console.log(edad>=18 ? "Mayor de edad": "Menor de edad")


// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre="Messi"
console.log(nombre);

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario="messi10";
let contraseña="goat";

if(usuario==="messi10" && contraseña==="goat"){
    console.log("EL USUARIO Y LA CONTRASENA SON CORRECTOS")
    
}
else {
    console.log("no coinciden")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero=0
if(numero>=1){
    console.log("positivo")
}
else if(numero===0){
    console.log("Es cero")
}
else{
    console.log("Negativo")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edadVoto=15;
let falta=18-edadVoto;
if(edadVoto>=18){
    console.log("puede votar")
}
else{
    console.log("no puede votar"+"  Le fatan "+falta+" años")

}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let edad2=17;
const mensaje=edad2>=18 ?"adulto":"menor"
console.log(mensaje)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes=3;
if(mes===3 || mes===4 || mes===5){
  console.log("Primavera")
}
else if(mes===6 || mes===7 || mes===8){
  console.log("Verano")
}
else if(mes===9 || mes===10 || mes===11){
  console.log("otono")
}
else{
  console.log("invierno")
}


// 7. Muestra el número de días que tiene cada mes dependiendo de la variable del ejercicio anterior

if(mes===1 || mes===3 || mes===7 || mes===8 || mes===10 || mes===12){
  console.log("31 Dias tienen estos meses")
}
else if(mes===4 || mes===6 || mes===9 || mes===11){
  console.log("30 Dias tienen estos meses")
}
else{
 console.log("28 Dias tiene este mes")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
//OK PERO: para mayor claridad se recomienda usar cadenas: "en", "fr", "zh", "ru" en lugar de numero
let idioma=3;
//1 ingles
//2 fraces 
//3 mandarin
//4 ruso
switch (idioma) {
  case 1: 
    resultado = "HELLO";
    break;
  case 2: 
    resultado = "bonjour";
    break;
  case 3:
    resultado = "mandarin";
    break;
  case 4:
    resultado = "ruso";
    break;
  default:
    resultado = "no válido";
}
console.log("Idioma", resultado);
// 9. Usa un switch para hacer de nuevo el ejercicio 6
//para mayor claridad se recomienda usar cadenas en lugar de numero
let mes2=1;

let estación;
switch(mes2){
    case 3:
    case 4:
    case 5:
            
    estación="primavera"
    break
    case 6:
    case 7:
    case 8:
            
    estación="verano"
    break
    case 9:
    case 10:
    case 11:
    estación="otoño"
    break
    case 12:
    case 1:
    case 2:
    estación="invierno"
    break
    default: estación="NO CORRESPONDE"
}
console.log("La estacion es: ",estación)
// 10. Usa un switch para hacer de nuevo el ejercicio 7.

let dias;
let mes3="marzo";

switch (mes3) {
  case "enero": case "marzo": case "mayo": case "julio": case "agosto": case "octubre": case "diciembre":
    dias = "tiene 31";
    break;
  case "abril": case "junio": case "septiembre": case "noviembre":
    dias = "tiene 30 dias";
    break;
  case "febrero":
    dias = "28 o 29 (año bisiesto)";
    break;
  default:
    dias = "Mes no válido";
}
console.log(mes3+" "+dias); 