//Arrow funtion
const sumar = (a, b) => a + b;

console.log(sumar(2, 3)); // Output: 5 

const aprendiendo = () => {
    consoe.log('aprendiendo ${tecnologia}');
}

aprendiendo('JavaScript');












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
meses.forEach(  mes=>{
    if(mes == 'marzo'){
        console.log('Marzo si existe')
    }
})

//forEach para el carrito
carrito.forEach(function(producto){
    console.log(producto.nombre)
})



//some ideal para arreglo de objetos
const resultado2 = carrito.some(producto => 
    producto.nombre === 'Celular')


//reduce
const resultado3 = carrito.reduce((total, producto) => 
        total + producto.precio, 0)
console.log(resultado)
console.log(resultado2)
console.log(resultado3)

//filter
const resultado4 = carrito.filter(producto => 
        producto.precio > 400
)
console.log(resultado4)