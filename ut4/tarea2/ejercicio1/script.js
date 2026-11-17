/**
 * Ejercicio1
 * Crear un objeto loteral llamado persona con propiedades nombre y edad,
 * y métodos saludar() y cumplir Años()
 */

let persona = {
    nombre: "Ana",
    edad: 25,
    saludar(){
        console.log(`Hola, me llamo ${this.nombre}`);
    },
    cumplirAños(){
        this.edad++;
        console.log(`Ahora tengo ${this.edad} años.`);
    }
};

persona.saludar();
persona.cumplirAños();