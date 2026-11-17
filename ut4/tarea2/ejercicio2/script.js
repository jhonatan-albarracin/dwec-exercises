/**
 * Ejercicio2
 * Crear un objeto usando new Object() llamado coche con propiedades marca
 * y modelo, y un método arrancar().
 */

let coche = new Object();

coche.marca = "Seat";
coche.modelo = "León";
coche.arrancar = function(){
    console.log(`El ${this.marca} ${this.modelo} ha arrancado.`);
};
coche.arrancar();