function aleatorio(min, max){
  let resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return console.log(resultado);
}
aleatorio(1,9);