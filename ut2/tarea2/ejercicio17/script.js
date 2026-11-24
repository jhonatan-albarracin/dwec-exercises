function sumaDigitos(n) {
  let suma = 0;

  while (n > 0) {
    let ultimoDigito = n % 10;     // Extrae el último dígito
    suma += ultimoDigito;          // Lo suma al total
    n = Math.floor(n / 10);        // Elimina el último dígito (división entera)
  }

  return suma;
}

// Prueba
console.log(sumaDigitos(123)); // Resultado: 6