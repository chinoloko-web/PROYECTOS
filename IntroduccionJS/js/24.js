//for loop
// for(let i=0; i<10; i++){
//     console.log(i);
// }


// for(let i=0; i<100; i++){
// if(i % 2 === 0){
//         console.log(`el numero ${i} es par`);
//     } else {
//         console.log(`el numero ${i} es impar`);
//     }
// }

const carrito =[
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
]

for(let i=0; i<carrito.length; i++){
    console.log(carrito[i].nombre);
}

// //while loop

// let i = 0; // Indice de inicio

// while ( i < carrito.length){ 
//     console.log(carrito[i].nombre);
// }

// i++; // Incremento del índice
// 

// do while loop

let i = 0;

do {

    console.log(i)

    i++
}while ( i < 10)