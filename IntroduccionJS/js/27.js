// POO

/**Object literal */
const producto = {
    nombre: 'tablet',
    precio: 5000,
    disponible: true
}

// Object constructor
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('laptop', 10000, true);
const producto3 = new Producto('monitor', 7000, false);

function formatearProducto(producto) {
    const { nombre, precio, disponible } = producto;
    return `El producto ${nombre} tiene un precio de $${precio} y ${disponible ? 'está disponible' : 'no está disponible'}`;
}

 

console.log(formatearProducto(producto2));
console.log(formatearProducto(producto3));


//crear funciones que solo se utlizan en un objeto espesifico
Producto.prototype.formatearProducto = function() {
    const { nombre, precio, disponible } = this;
    return `El producto ${nombre} tiene un precio de $${precio} y ${disponible ? 'está disponible' : 'no está disponible'}`;
};

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto()); 