/*Ejercicios: Clases
*/

// 1. Crea una clase que reciba dos propiedades
class clase1{
    constructor(name,last_name){
        this.name=name
        this.last_name=last_name
    }
    saludo()
    {
        console.log("hola " + this.name)
    }
    static operacion(a,b){
        return a+b;
    }
}

let variable=new clase1("eder","vega")
console.log(variable)

// 2. Añade un método a la clase que utilice las propiedades
variable.saludo()

// 3. Muestra los valores de las propiedades e invoca a la función
console.log(variable.name)
console.log(variable.last_name)
// 4. Añade un método estático a la primera clase
/* static operacion(a,b){
        return a+b;
    } */
// 5. Haz uso del método estático
console.log(clase1.operacion(1,2));
// 6. Crea una clase que haga uso de herencia

class padre{

    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    
    identificacion(){
        console.log("mi nombre es "+ this.nombre + " y mi edad es "+ this.edad)
    }

} 

class datos extends padre{

    domicilio(){
        console.log("AVENIDA XXXXXXXXXXXXXXX")
    }
}

class familia extends padre{

    constructor(hijos,nombre1,nombre2){
         super("Padre", 50)
         this.hijos=hijos;
        this.nombre1=nombre1;
        this.nombre2=nombre2;
    }

    informacion()
    {
        console.log("tengo: "+ this.hijos+" hijos "+ " 1 se llama: "+ this.nombre1+ " y el 2do "+ this.nombre2)
    }
}
//QUE PASA CON ESTO? 
/* let persona= new padre("messi",50);
persona.domicilio() */
let persona= new datos("messi",50);
persona.identificacion()

persona.domicilio()

let get=new familia(2,"cr7", "mbappe");
get.informacion()


// 7. Crea una clase que haga uso de getters y setters

class people {//getter
    
    #nombre
    #pais

    constructor(nombre,age,pais){
        this.#nombre=nombre
        this.age=age
        this.#pais=pais
    }
    get nombre(){
        return this.#nombre
    }
    set pais(nuevo){
        this.#pais=nuevo
    }
    get pais(){
        return this.#pais
    }
}

let envio=new people("eder",58,"yyyyyy")
console.log(envio.nombre)// sin get undefine con get "eder"
console.log(envio.age)//undefine
envio.pais="eeeeeee"
console.log(envio.pais)//eeeeeee

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 