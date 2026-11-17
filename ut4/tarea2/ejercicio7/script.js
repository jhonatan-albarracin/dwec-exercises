/**
 * Ejercicio7
 * Crear una clase Persona con propiedad privada #nombre.
 * Añade metodos get Nombre() y set Nombre()
 */

class Persona {
    #nombre;
    constructor(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        return this.#nombre;
    }
    setNombre(nuevo){
        return this.#nombre = nuevo;
    }
}

let p = new Persona("Lucia");
console.log(p.getNombre());
p.setNombre("Maria");
console.log(p.getNombre());
