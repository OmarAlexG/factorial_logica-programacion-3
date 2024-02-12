// Función para calcular el factorial de un número
function calcularFactorial() {
    let numeroInput = document.getElementById("numeroInput").value;
    let numero = parseInt(numeroInput);

    // Validar si el dato ingresado es un número
    if (isNaN(numero)) {
        document.getElementById("resultado").innerText = "Por favor, ingresa un número válido.";
        return;
    }

    let factorial = 1;

    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }

    // Imprimir el resultado en el párrafo con id "resultado"
    document.getElementById("resultado").innerText = "El factorial del número ingresado es: " + factorial;
}
