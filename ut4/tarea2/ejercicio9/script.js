/**
 * Ejercicio9
 * Crea una clase CuentaBancaria con saldo, ingresar() y retirar(). Valida que no se retire más de lo 
disponible.
 */

class CuentaBancaria { 
    constructor(saldo = 0) { 
        this.saldo = saldo; 
    } 
    ingresar(cant) { 
        this.saldo += cant; 
    } 
    retirar(cant) { 
        if (cant <= this.saldo) { 
            this.saldo -= cant; 
        } else { 
            console.log("Saldo insuficiente."); 
        } 
    } 
} 
let c = new CuentaBancaria(100); 
c.retirar(150); // Saldo insuficiente. 
c.retirar(50); 
console.log(c.saldo); // 50 