// this 

const reserva = {
    nombre: 'Juan',
    apellido: 'Perez',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente se llama ${this.nombre} ${this.apellido} y su total es de ${this.total}`);
    }
}

console.log(reserva.nombre);
reserva.informacion();