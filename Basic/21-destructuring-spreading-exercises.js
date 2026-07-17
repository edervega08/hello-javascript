/*Ejercicios: Desestructuración y propagación*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let array=[1,2,3,4,5];

let [var1,var2,var3,var4,var5]=array

console.log(var1,var2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let array2=[1,2,undefined,undefined,5];

let [nvar1,nvar2,nvar3=9,nvar4=8,nvar5]=array2

console.log(nvar3,nvar4)
//console.log(array2)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let objeto={
    nombre:"messi",
    edad:38,
    pais:"argentina"
}
console.log(objeto)
let {nombre,edad,pais}=objeto

console.log(nombre)
console.log(nombre,edad)
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let objeto2={
    name:"cr7",
    age:40,
    country:"portugal"
}
console.log(objeto2)
let {name: name2,age: age2,country: country2}=objeto2

console.log(name2,age2)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let mansion={
    nombre: "residencial",
    habitacion:5,
    areas:{
        sala:2,
        jardines:3
    }

}
console.log(mansion)
let {areas:{sala,jardines}}=mansion 


console.log(sala,jardines)
// 6. Usa propagación para combinar dos arrays en uno nuevo
let array3=[1,2,3,4,5,6,7];
let array4=[8,9,10]
let nuevo=[...array3,...array4]
 console.log(nuevo)


// 7. Usa propagación para crear una copia de un array

let nuevo2=[...array3]
console.log(nuevo2)
// 8. Usa propagación para combinar dos objetos en uno nuevo
let combinacion_de_objetos={...objeto2,...mansion}
console.log(combinacion_de_objetos)
// 9. Usa propagación para crear una copia de un objeto
let copia={...objeto2}
console.log(copia)
// 10. Combina desestructuración y propagación
let array5 = [9,8,7,6,5,4,3,2,1]

let [a, b, ...resto] = array5

console.log(a)
console.log(b)
console.log(resto)
//...resto guarda lo que queda y lo guarda en una variable osea nuevo array.