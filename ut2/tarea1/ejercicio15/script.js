function validarCorreo(){
  let correo = "prueba@gmail.com";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(regex.test(correo));
}
validarCorreo();

/**
 * 
¿Qué significa cada parte del patrón /^[^\s@]+@[^\s@]+\.[^\s@]+$/?

 ^ y $: Indican el inicio y el final exacto del texto (evita que se cuele texto extra alrededor).
 [^\s@]+: Uno o más caracteres que no sean espacios (\s) ni arrobas (@).
 @: Debe llevar una arroba literal.
 [^\s@]+: El nombre del dominio (sin espacios ni más arrobas).
 \.: Un punto literal (lleva \ delante porque en Regex el punto solo significa "cualquier carácter").
 [^\s@]+: La extensión final (como com, es, etc.).

 */


 function validarCorreo(correo) {
  const arroba = correo.indexOf("@");
  const punto = correo.lastIndexOf(".");

  return (
    !correo.includes(" ") &&           // Sin espacios
    arroba > 0 &&                      // Tiene '@' y hay texto antes
    arroba === correo.lastIndexOf("@") && // Solo hay una '@'
    punto > arroba + 1 &&              // Hay un '.' después de la '@' (con texto en medio)
    punto < correo.length - 1          // Hay texto después del último '.'
  );
}


function validarCorreo(correo) {
  // 1. No debe tener espacios
  if (correo.includes(" ")) {
    return false;
  }

  // 2. Dividimos por la arroba: debe haber exactamente 2 partes (usuario y dominio)
  const partes = correo.split("@");
  if (partes.length !== 2) {
    return false;
  }

  const usuario = partes[0];
  const dominio = partes[1];

  // 3. El usuario y el dominio no pueden estar vacíos
  if (usuario.length === 0 || dominio.length === 0) {
    return false;
  }

  // 4. El dominio debe tener un punto, pero no al principio ni al final
  const posicionPunto = dominio.indexOf(".");
  if (posicionPunto <= 0 || posicionPunto === dominio.length - 1) {
    return false;
  }

  return true;
}
