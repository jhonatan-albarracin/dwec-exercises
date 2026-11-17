// Ejercicio 9: Factorial recursivo
/*
Crear una funcion recursiva factorial(n) que calcule el factorial de un numero entero positivo
*/

function factorial(n){
    //Caso base 0!=1 y 1!=1
    if (n === 0 || n === 1){
        return 1;
    }
    //Caso recursivo: n!=n*(n-1)!
    return n*factorial(n-1);
}

console.log(factorial(5));


