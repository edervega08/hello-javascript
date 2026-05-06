
// 1. Escribe un comentario en una línea
//Comentario en una linea 
// 2. Escribe un comentario en varias líneas
/* Comentario en 
varias lineas */
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

//string
let string='tipo string';

//number
let number=10;

//boolean
let boolean=true;

//undefine
let undefine

//null
let vacia=null;

//symbol
let mySymbol = Symbol("mysymbol");

//probablemente aqui tenga error en los bigint
//bigint
let bigint = BigInt(8888888888888888888888888888n);
let bigint2 = BigInt(8888283848586878888888888888);
//o
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n


// 4. Imprime por consola el valor de todas las variables
console.log(string)
console.log(number)
console.log(boolean)
console.log(undefine)
console.log(vacia)
console.log(mySymbol)
console.log(bigint)
console.log(bigint2)
console.log(myBigInt2)
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof string)
console.log(typeof  number)
console.log(typeof boolean)
console.log(typeof undefine)
console.log(typeof vacia)
console.log(typeof mySymbol)
console.log(typeof bigint)
console.log(typeof bigint2)
console.log(typeof myBigInt2)
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
string='valor 2';
number=12;
boolean=false;
vacia='string ahora';
mySymbol= Symbol("mysymbol valor 2");
bigint=3479324832473472379;
bigint2=bigint(8888283848586878888888888888)
//o
myBigInt2 = 81723987128923475129181658971638947628379612837183129n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
string=5;
number='ahora soy un strig';
boolean=null;
vacia=true;
mySymbol= 343223904832938439488493827473274;
bigint=Symbol("ahorasymbol");
bigint2=Symbol("ahorasymbol");
//o
myBigInt2 = Symbol("ahorasymbol");

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const string2='soy string en constantes';
const number2=15;
const boolean2=true;
const vacia2=null;
const mySymbol2=Symbol("symbol");
const bigint22=2347124732847827894732748932423n;
const bigint2_2=BigInt(8888283848586878888888888888)
const myBigInt2_2=81723987128923475129181658971638947628379612837183129n


// 9. A continuación, modifica los valores de las constantes
//no se pueden modifican los valores si las variables son constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse o ninguna