// function sumar( n1,n2){
//     return n1 + n2;
// }

// const resultado = sumar(3,4);

// consolo.log(resultado)

let total = 0;

function agregarCarrito(precio){
    return total += precio;

}

function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);

console.log(total)

const totalConImpuesto = calcularImpuesto(total);

console.log(totalConImpuesto)