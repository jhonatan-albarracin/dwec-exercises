/**
 * Ejercicio10
 * Añade al objeto literal ‘persona’ del Ejercicio 1 un método esMayorDeEdad() que devuelva true si 
la edad ≥ 18. 
 */

persona.esMayorDeEdad=function () { 
    return this.edad >= 18; 
} 
console.log(`Es mayor de edad ${persona.esMayorDeEdad()}`); 