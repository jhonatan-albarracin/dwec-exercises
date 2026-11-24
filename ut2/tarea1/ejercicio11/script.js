function pedir(){
  try{
    let numero = prompt("ingresa un numero ");
    if(numero === null || numero.trim() === ""){
      throw new Error("error 1: esta vacio")  
    }
    if(isNaN(numero) === true){
      throw new Error("error 2: no es un numero")
    }
    return Number(numero);
  }catch(e){
    console.log(`error: ${e.message}`);
    return 0;
  }
}
console.log(pedir());