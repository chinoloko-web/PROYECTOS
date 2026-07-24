//array methods

const meses = ['enero','febrero','marzo','abril','mayo']

const carrito =[
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
]

//forEach
meses.forEach(function(mes){
    if(mes == 'marzo'){
        console.log('Marzo si existe')
    }
})

//forEach para el carrito
carrito.forEach(function(producto){
    console.log(producto.nombre)
})

//includes
const resultado = meses.includes('marzo')


//some ideal para arreglo de objetos
const resultado2 = carrito.some(function(producto){
    return producto.nombre === 'Celular'


})


//reduce
const resultado3 = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0)
console.log(resultado)
console.log(resultado2)
console.log(resultado3)

//filter
const resultado4 = carrito.filter(function(producto){
    return producto.precio > 400
})
console.log(resultado4)