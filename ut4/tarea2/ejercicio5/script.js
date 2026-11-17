/**
 * Ejercicio5
 * Define una clase Rectangulo con propiedades ancho y alto,
 * y un metodo calcularArea()
 */

class Rectangulo{
    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
    }
    calcularArea(){
        return this.ancho * this.alto;
    }
}

let r = new Rectangulo(5, 3);
console.log(r.calcularArea())
