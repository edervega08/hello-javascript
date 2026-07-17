// 1. Crea un objeto con 3 propiedades
let objeto={
    name:"eder",
    edad:24,
    ciudad:"mexico"
}

// 2. Accede y muestra su valor
console.log(objeto.name)
// 3. Agrega una nueva propiedad
objeto.pais="mexico"
// 4. Elimina una de las 3 primeras propiedades
delete objeto.edad
// 5. Agrega una función e invócala
objeto.funcion= function (){
    console.log("funcion ejemplo")
}

objeto.funcion()
// 6. Itera las propiedades del objeto
//itera la clave y el valor del objeto
for(let i in objeto){
    console.log("propiedad: " + i + " valor: " + objeto[i])
}
// 7. Crea un objeto anidado
let casa={
    sala:1,
    carro:"aveo",
    cocina:1,
    ventanas:5,
    cochera:1,
    habitaciones:2,
    habitacion1:{
        cama:1,
        tele:1,
        ropero:1,

    }
    
}
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(casa.habitacion1.cama)
// 9. Comprueba si los dos objetos creados son iguales
console.log(objeto===casa)
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(objeto.ciudad==objeto.pais)