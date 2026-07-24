const metodoPago = "tarjeta";

switch (metodoPago) {
    case "Tarjeta":
        console.log("Pago en Tarjeta");
        break;
    case "Efectivo":
        console.log("Pago en Efectivo");  
        break;
    default:
        console.log("Método de pago no válido");
}