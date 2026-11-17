/**
 * Ejercicio 4
 * Crear un objeto animal con la propiedad tipo y un metodo hacerSonido().
 * Usa Object.create() para crear un objeto perro basado en animal y
 * añade propiedad nombre.
 */

let animal = {
    tipo: "desconocido",
    hacerSonido(){
        console.log("Este animal hace un sonido");
    }
};

let perro = Object.create(animal);
perro.nombre = "Bobby";
perro.tipo = "perro";
console.log(perro);
perro.hacerSonido();