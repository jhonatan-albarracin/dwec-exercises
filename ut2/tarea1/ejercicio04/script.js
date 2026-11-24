function tablaMultiplicar(){
  let numero = parseInt(prompt("ingrese un numero "));
  for(let i = 0; i<=10; i++ ){
    console.log(numero + " * " + i + " = " + i*numero);
  }
}
tablaMultiplicar();