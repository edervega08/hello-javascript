// 1. Crea un array que almacene cinco animales
let animales=["perro","gato","caballo","vaca","gallo",];
console.log(animales);
// Ojo: en arrays los índices empiezan en 0 → "perro" está en posición 0, no en 1.


// 2. Añade dos más. Uno al principio y otro al final
animales.push("gallina")   // push añade al final
animales.unshift("pato")   // unshift añade al inicio
console.log(animales);
// Confusión común: creer que unshift añade al final. No, es al inicio.


// 3. Elimina el que se encuentra en tercera posición
// el nuevo array es ["pato","perro","gato","caballo","vaca","gallo","gallina"];
animales.splice(3,1); 
console.log(animales)
// splice(pos, cantidad) → desde índice pos elimina "cantidad" de elementos
// Aquí pos=3 significa el cuarto elemento, no el tercero "visual".


// 4. Crea un set que almacene cinco libros
let set=new Set(["El gato con botas","El perro con calcetines","El avion terrestre",
    "La pc con vida","El perro que habla"
])
console.log(set)
// Ojo: Set elimina duplicados automáticamente, no admite repetidos.


// 5. Añade dos más. Uno de ellos repetido
set.add("El avion")
set.add("El perro que habla")
console.log(set)
// "El perro que habla" no se añade de nuevo, ya existe.


// 6. Elimina uno concreto a tu elección
set.delete("El gato con botas")
console.log(set)
// delete elimina por valor, no por posición (esto suele confundirse).


// 7. Crea un mapa que asocie el número del mes a su nombre
let mapa=new Map()
mapa=new Map([[1,"Enero"],[2,"Febrero"],[3,"Marzo"],
                    [4,"Abril"],[5,"Mayo"],[6,"Junio"],
                        [7,"Julio"],[8,"Agosto"],[9,"Septiembre"],
                            [10,"Octubre"],[11,"Noviembre"],[12,"Diciembre"]])
console.log(mapa) 
// En Map, las claves pueden ser cualquier tipo (no solo string o número).


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(mapa.has(5))  // true si existe clave 5
console.log(mapa.get(5))  // devuelve "Mayo"
// Diferencia clave: has() devuelve booleano, get() devuelve valor.


// 9. Añade al mapa una clave con un array que almacene los meses de verano
//dos formas
//clave en string "verano"
//clave en number
mapa.set( "verano",["Junio", "Julio", "Agosto"])
mapa.set( 16,["Junio", "Julio", "Agosto"])
console.log(mapa) 
// Aquí clave "verano" es string y 16 es number, ambas válidas.


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array=[10,20,30,30,40,50,60,70];
let converSet=new Set(array);
console.log(converSet) 
// El Set elimina el duplicado de 30 automáticamente.
let converMap=new Map()
converMap.set("mapa",converSet)

console.log(converMap)
// En el Map la clave es "mapa" y el valor es el Set completo.
