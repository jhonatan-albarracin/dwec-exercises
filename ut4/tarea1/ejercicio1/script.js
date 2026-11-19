/**
 * Declaración de función clásica  
Declara una función llamada calcularAreaRectangulo que reciba ancho y alto y devuelva su 
producto.  
 */

function calcularAreaRectangulo (ancho, alto){
    return ancho*alto;
}
// 1. Seleccionar los elementos del DOM (con comillas y sin errores de tipeo)
const inputAncho = document.getElementById("ancho");
const inputAlto = document.getElementById("alto");
const parrafoResultado = document.getElementById("resultado");
const buttonCalcular = document.getElementById("calcular");

// 2. Función que lee los valores, valida y muestra el resultado (FALTABA ESTA LÍNEA)
function actualizarArea() {
    const ancho = parseFloat(inputAncho.value);
    const alto = parseFloat(inputAlto.value);

    if (isNaN(ancho) || isNaN(alto)) {
        parrafoResultado.textContent = "Por favor, ingresa valores numéricos válidos.";
        return; // Detiene la función aquí para no mostrar "NaN" abajo
    }

    const area = calcularAreaRectangulo(ancho, alto);
    parrafoResultado.textContent = `El área del rectángulo es: ${area}`;
} // <-- Y ESTA LLAVE DE CIERRE

// 3. Ejecutar el cálculo
buttonCalcular.addEventListener("click", actualizarArea);