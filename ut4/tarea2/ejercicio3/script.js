/**
 * Ejercicio3
 * Define una funcion constructora Persona(nombre, edad) que contenga
 * los metodos saludar() y cumplirAños() y crear una instancia.
 */

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function(){
        console.log(`Hola, me llamo ${this.nombre}`);
    }
    this.cumplirAños = function(){
        this.edad++;
        console.log(`Ahora tengo ${this.edad} años.`);
    };
}

let p1 = new Persona("Carlos", 30);
p1.saludar();
p1.cumplirAños();