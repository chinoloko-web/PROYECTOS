//Declaracion de funciones
function saludar(){
    console.log("Hola Mundo");
}
saludar(); //Llamada a la funcion

//expresion de funcion
const sumar = function(a,b){
    return a + b;
}
console.log(sumar(5, 3));

//IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("Esta es una funcion autoejecutable");
})();