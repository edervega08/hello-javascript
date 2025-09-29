// EJERCICIOS DE COMPARACIÓN EN JAVASCRIPT
//true
let a = 5;
let b = "5";
let c = 7;
let d = "7";
let e = true;
let f = false;

// -------- FÁCILES --------
console.log("1)", a == b);   //true
console.log("2)", a === b);  // false
console.log("3)", c != d);   // false
console.log("4)", c !== d);  // false
console.log("5)", e == 1);   // true
console.log("6)", e === 1);  // false

// -------- INTERMEDIOS --------
console.log("7)", f == 0);   // true
console.log("8)", f === 0);  // false
console.log("9)", "10" > 2); // true
console.log("10)", "2" < "12"); //false
console.log("11)", null == undefined); //  true
console.log("12)", null === undefined); // false

// -------- DIFÍCILES --------
console.log("13)", NaN == NaN);     // false
console.log("14)", NaN === NaN);    //false
console.log("15)", 0 == false);     // true
console.log("16)", 0 === false);    // false
console.log("17)", " " == 0);       // true
console.log("18)", " " === 0);      // false
console.log("19)", [] == false);    // true
//console.log("20)", [] === false);   // false



//EXTRAS
console.log(5 == "5");      // true
console.log(5 === "5");     // false
console.log(0 == false);    // true
console.log(0 === false);   // false
console.log("10" != 10);    // false
console.log("10" !== 10);   // false
console.log(true == 1);     // true
console.log(true === 1);    // false
/* 
10) "2" < "12" es false porque se compara como strings ("2" es mayor que "1"). //no etendi este 

"10" !== 10 es true, no false. da true por que por almenos en uno es difrente un string y number? */