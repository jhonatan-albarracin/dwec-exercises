function parOImpar(){
  let numero = parseInt(prompt("Ingrese el numero "));
  if(numero % 2 === 0){console.log("Es numero PAR"); return true;}else{console.log("Es numero IMPAR"); return false;};
}
console.log(parOImpar());