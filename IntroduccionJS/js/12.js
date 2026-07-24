// objetos
const producto ={
    nombreproducto : "monitor 20 pulgadas",
    precio: 300 ,
    disponible:true
}

Object.freeze(producto) // .freeze .seal

producto.imagen = 'imagen.jpg'

console.log(Object.isFrozen(producto))

console.log(producto)