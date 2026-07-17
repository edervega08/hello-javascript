
//Ejercicios: Console


// 1. Crea un función que utilice error correctamente
function error1(){
    console.error("Este es un mensaje de error");
}

error1()

// 2. Crea una función que utilice warn correctamente
function error2(){
    console.warn("Este es un mensaje de warn");
}

error2()

// 3. Crea una función que utilice info correctamente
function error3(){
    console.info("Este es un mensaje de info");
}

error3()
// 4. Utiliza table
let datos=[["Nombre", "Edad"],
           ["Juan", 30],
           ["María", 25],
           ["Pedro", 40]];
           console.table(datos);

// 5. Utiliza group
console.group("Grupo de mensajes 1");
console.log("Mensaje tipo sangria 1");
console.log("messaje tipo sangria 2");
console.groupEnd();

console.group("Grupo de mensajes 2");
console.log("Mensaje tipo sangria 1");
console.log("messaje tipo sangria 2");
console.groupEnd();

// 6. Utiliza time(inicio y termino)
console.time("tiempo de ejecucion");
for(let i=0; i<50; i++){
    
}console.timeEnd("tiempo de ejecucion");

// 7. Valida con assert si un número es positivo
let numero = 1;
console.assert(numero>=0,"debe ser positivo")//true no muestra nada
let numero2 = -5;
console.assert(numero2>=0,"debe ser positivo")//false muestra el mensaje de error
// 8. Utiliza count
console.count("Click")
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")
// 9. Utiliza trace
function funcA() {
    funcB()
}
function funcB() {
    funcC()
}
function funcC() {
    console.trace("Este es un mensaje de trace")
}
funcA()


// 10. Utiliza clear
console.clear()