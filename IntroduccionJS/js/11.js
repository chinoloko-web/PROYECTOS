// objetos


const producto ={
    nombreproducto : "monitor 20 pulgadas",
    precio: 300 ,
    disponible:true

}

//forma anterior
const precioprouducto = producto.precio

const nombreproducto = producto.nombreproducto

//console.log(precioprouducto)
//console.log(nombreproducto)

//forma nueva
const {precio , nombreproducto} = producto

console.log(precio)
console.log(nombreproducto)