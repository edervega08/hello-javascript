

// 1. Crea una variable para cada operación aritmética
let a=5;
let b=6;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a**b)
console.log(a%b)
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let c=4;

console.log(c+=2)
console.log(c-=2)
console.log(c*=2)
console.log(c/=2)
console.log(c%=2)
console.log(c**=2)
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

let d=5;
console.log(a==d)
console.log(a=="5")
console.log(a===d)
console.log(a!=b)
console.log(a!=="6")
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
let e=false;
console.log(a===c)
console.log(a==e)
console.log(a!==a)
console.log(a!=a)
console.log(a!==a)
console.log(e==1)

// 5. Utiliza el operador lógico and
console.log(a>2 && 1<2)//true
console.log(a>2 && 1<2 && 65<67)//true
// 6. Utiliza el operador lógico or
console.log(a>2 || 1<2) //true
console.log(a>2 || 1>2)//true
console.log(a<1 || a<4)//false
// 7. Combina ambos operadores lógicos

console.log(a<1 || a<4 && a>4)//false
console.log(a>1 || a>4 && a>4)//true
console.log(a<15 && a>4 || 6>a)//true
// 8. Añade alguna negación

console.log(!(a<1 || a<4 && a>4))//true

// 9. Utiliza el operador ternario
let edad=19;
edad>=18 ? console.log('mayor de edad') : console.log('menor de edad')

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log((a+b)<12 && a>15)//FALSE
console.log((a===6) && a<4)//FALSE Y FALSE DE FALSE (a=5)
console.log((a===5) && a>4)//true

// 11. Operadores combinados
let r = 10;
let s = 5;
let f = "10";
//gerarquia de operaciones operadores aritméticos
console.log( (r + s) > 12 && r === 10 );   // true
console.log( (r - s * 2) <= 0 || s !== "5" ); // true
console.log( !(r == f) && (r % s === 0) );  // false
console.log( (r / s === 2) && (f !== 10) ); // true
console.log( (r + "5") < (f + "2") );       // false
  
//extras

 console.log(true && false) //false
 console.log(true || false)//true
 console.log(!true)//false
 console.log(!false)//true
 console.log(false || false || true)//true

 
 console.log(5 > 3 && 10 < 20)//true
 console.log(5 > 10 || 8 === 8)//true
 console.log(!(5 > 10))//true
 console.log(3 == "3" && 4 === 4)//true
 console.log(3 === "3" || 2 > 1)//true

 
 console.log(5 > 10 && 15 > 20 || 30 < 40)//true
 console.log((5 > 10 && 15 > 20) || 30 < 40)//true
 console.log(5 > 10 && (15 > 20 || 30 < 40))//false
 console.log(!(5 > 10 || 15 > 20))//true
 console.log(!(5 < 10 && 15 < 20))//false


 console.log(0 && true)//true
 console.log(1 && true)//true
 console.log(0 || "Hola")//true
 console.log("" || false || "JS") //true
 console.log(!0 && !"")//true


 console.log(0 == false && "" == false)//true
 console.log(0 === false || "" === false)//false
 console.log(!(null == undefined))//fasle, null y undefine es true compara por valor y tipo
 console.log(null === undefined || true && false)//false
 console.log(!(false || 0 || "" || null))//true