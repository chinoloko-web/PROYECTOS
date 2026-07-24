//Arrays

const array = [1,2,3,4,5];




const meses = ['enero','febrero','marzo','abril','mayo']
console.log(meses)

//Acceder a los valores de un arreglo
//console.log(meses[0]) //enero

//conocer la extension de un arreglo
//console.log(meses.length) //5

//numeros.forEach(function(numero){
   // console.log(numero)
//}

numeros.push(6) //agrega un nuevo elemento al final del arreglo

numeros.unshift(0) //agrega un nuevo elemento al inicio del arreglo

meses.pop() //elimina el ultimo elemento del arreglo
meses.shift() //elimina el primer elemento del arreglo

meses.splice(2,1) //elimina un elemento en una posicion especifica (en este caso el elemento en la posicion 2)
console.log(array)

const nuevoArray = [...array,6,7,8] //crea un nuevo arreglo con los elementos del arreglo original y agrega nuevos elementos al final
console.log(nuevoArray)