/**
 * Ejercicio12
 * Define una función constructora Libro(titulo, paginas) y añade al prototipo un método esLargo() 
que devuelva cierto en caso de tener más de 300 págs. 
 */

function Libro(titulo, paginas){
    this.titulo = titulo;
    this.paginas = paginas;
}
Libro.prototype.esLargo = function(){
    return this.paginas > 300;
};
let l = new Libro("El Quijote", 900);
console.log(l.esLargo());