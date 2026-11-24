function esPrimo(n){
  let contador = 0;
  
  for(let i = 1; i<=n/2; i++){
    if(n%i === 0){contador++;}
  }
  if(isNaN(n)){return console.log("ingrese un valor valido")}
  if(n==0){return console.log("El numero 0 no es primo")}
  if(n==1){return console.log("El numero 1 solo tiene 1 divisor por ende NO es primo")}
  
  if (contador > 2){
    return console.log("El numero "+n+" NO es primo "+contador)
  }else{
    return console.log("El numero "+n+" Es primo "+contador)
  }
}
esPrimo(1);