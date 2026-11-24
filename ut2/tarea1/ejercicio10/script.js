function contadorVocales(texto){
  const vocales = "aeiouAEIOU";
  let contador = 0;
  for(let letra of texto){
    if(vocales.includes(letra)){
      contador++;
    }
  }
  return console.log(contador)
}
const texto = "Esternocleidomastoideo";
contadorVocales(texto);