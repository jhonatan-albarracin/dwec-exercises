function mayorDeTres(a,b,c){
  let mayor;
  mayor = a
  if (b >= c){
    if(mayor <= b){mayor = b;}
  }else{
    if(mayor<=c){mayor = c;}
  }
  return mayor;
}
console.log(mayorDeTres(6,3,3));