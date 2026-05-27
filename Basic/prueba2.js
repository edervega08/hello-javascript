const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)
 function applyFunc(func, param) { 
    func(param)//se le pasa la funcion de arriba myFunc4
}

applyFunc(myFunc4, "función de orden superior") 