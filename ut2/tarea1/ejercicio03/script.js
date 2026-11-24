function mayorEdad(){
  let edad = parseInt(prompt("ingrese edad "));
  if(edad<18){
    console.log("es MENOR de edad");
  }else{
    console.log("es MAYOR de edad")
  }
}
mayorEdad();