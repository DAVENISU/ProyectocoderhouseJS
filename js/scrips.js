// Declaramos el porcentaje fijo de ahorro
const porcentajeAhorro = 0.30;

// Función principal
function simularAhorro() {
    do {
        // Solicitamos ingreso mensual y meses
        let ingreso = parseFloat(prompt("¿Cuál es tu ingreso mensual?"));
        let meses = parseInt(prompt("¿Durante cuántos meses quieres calcular el ahorro?"));

        // Validamos que los valores ingresados sean correctos
        if (isNaN(ingreso) || isNaN(meses) || ingreso <= 0 || meses <= 0) {
            alert("Por favor ingresa números válidos y mayores que cero.");
            continue;
        }

        // Calculamos el ahorro mensual y total
        let ahorroMensual = ingreso * porcentajeAhorro;
        let ahorroTotal = ahorroMensual * meses;

        // Mostramos los resultados
        let mensaje = "Ahorro recomendado (30%):\n" +
                      "Ingreso mensual: $" + ingreso + "\n" +
                      "Meses: " + meses + "\n" +
                      "Ahorro mensual: $" + ahorroMensual.toFixed(1) + "\n" +
                      "Ahorro total: $" + ahorroTotal.toFixed(1);

        alert(mensaje);
        console.log(mensaje);

    } while (confirm("¿Quieres hacer otro cálculo?"));
}
