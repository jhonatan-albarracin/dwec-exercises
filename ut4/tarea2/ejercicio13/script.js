/**
 * Ejercicio13
 * Crea una clase Usuario con la propiedad _email y un setter que valide que contenga "@" antes de 
darle el valor. Usa también un getter. 
 */

class Usuario { 
    _email; 
    constructor(email) { 
    } 
    set email(val) { 
        if (val.includes("@")) { 
            this._email = val; 
        } else { 
            console.log("Email inválido."); 
        } 
    } 
    get email() { 
        return this._email; 
    } 
} 
let u = new Usuario(); 
u.email="test@ejemplo.com";  
console.log(u.email); // test@ejemplo.com 
u.email = "malo"; // Email inválido. 