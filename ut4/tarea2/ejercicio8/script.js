/**
 * Ejercicio8
 * Define una clase Animal que incluya las propiedades nombre y especie. A continuación, crea una 
subclase Perro que herede de Animal, utilice el método super() en su constructor, y añada la 
propiedad raza junto con el método ladrar(). 
 * */

class Animal { 
    constructor(nombre, especie) { 
        this.nombre = nombre; 
        this.especie = especie; 
    } 
    hacerSonido() { 
        console.log(`${this.nombre} hace un sonido.`); 
    } 
} 
class Perro extends Animal { 
    constructor(nombre, raza) { 
        super(nombre, "perro"); 
        this.raza = raza; 
    } 
    ladrar() { 
        console.log(`${this.nombre} ladra: ¡Guau!`); 
    } 
} 
let p = new Perro("Firulais", "Labrador"); 
p.ladrar(); 
p.hacerSonido(); 