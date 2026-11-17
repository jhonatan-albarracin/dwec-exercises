/**
 * Ejercicio11
 * Usa la palabra reservada class para definir una clase Punto con coordenadas x e y, y un método 
que devuelva las coordenadas.
 */

let Punto = class { 
    constructor(x, y) { 
        this.x = x; 
        this.y = y; 
    } 
    mostrar() { 
        console.log(`(${this.x}, ${this.y})`); 
    } 
}; 
let p = new Punto(2, 3); 
p.mostrar(); 