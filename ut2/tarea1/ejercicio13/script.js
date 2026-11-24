const cadena = "Hola";

function invertirCadena(cadena){
  return cadena.split("").reverse().join("");
}

console.log(invertirCadena(cadena));

function invertirCadenaFor(cadena){
  let invertida="";
  for(let i = cadena.length-1; i>=0; i--){
    invertida += cadena[i];
  }
  return invertida;
}
console.log(invertirCadenaFor(cadena));
