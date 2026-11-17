/**
 * Ejercicio6
 * Crear una clase Circulo con propiedad radio y metodo calcularPerimetro()
 * usando Math.PI.
 */

class circulo {
    constructor(radio){
        this.radio = radio;
    }
    calcularPerimetro(){
        return 2 * Math.PI * this.radio;
    }
}
    let c = new circulo(4);
    console.log(c.calcularPerimetro());