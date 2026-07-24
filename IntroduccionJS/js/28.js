// Clases

class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    formatearProducto() {
        const { nombre, precio, disponible } = this;
        return `El producto ${nombre} tiene un precio de $${precio} y ${disponible ? 'está disponible' : 'no está disponible'}`;
    }
}


const producto = new Producto('tablet', 5000, true);
console.log(producto.formatearProducto());

// Herencia
class libro extends Producto {
    constructor(titulo, autor, precio) {
        super(titulo, precio, true); // Llama al constructor de la clase padre
        this.autor = autor;
    }

    formatearLibro() {
        return `El libro ${this.nombre} de ${this.autor} tiene un precio de $${this.precio}`;
    }
}
    

const libro1 = new libro('El señor de los anillos', 'J.R.R. Tolkien', 300);

console.log(producto);
console.log(libro1);