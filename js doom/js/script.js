//querySelctor
const heading = document.querySelector('.header__texto h2')
heading.textContent =  'Nuevo Heading'
console.log(heading)

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0])

enlaces [0].textContent = 'Nuevo Texto para enlaces'
enlaces [0].classList.add('nueva-clase');
// enlaces [0].classList.remove('navegacion__enlace')

//generar un nuevo enlace 
const nuevoEnlace = document.createElement(A)

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html'

//Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace'

//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace')

//agregar al documento
const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace)

console.log(nuevoEnlace)

//eventos

// console.log(1);

// window.addEventListener('load',function() {    //load espera a que el js y los archivos que dependen de html esten listos
//     console.log(2);

// })

// window.onload = function(){
//     console.log(3)
// }

// document.addEventListener('DOMContentLoaded', function(){ // solo espera que cargue el htmm, pero no espera css o imagenes
//     console.log(4)
// })

// console.log(5);


// function imprimir(){
//     console.log(2)
// }


//selecionar elemntos y asociar elementos

// const btnEnviar = document.querySelector('.boton--primario')
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento)
//     evento.preventDefault()

//validar un formulario


//     console.log('enviando formulario');
// })



//eventos de los input o text areas

const datos = {
    nombre: '',
    email:'',
    mensaje:''
}

const nombreInt = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')

nombreInt.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input',leerTexto)

//Evento de submit 
const formulario = document.querySelector('.formulario')
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //validar el formulario

const {nombre,email,mensaje} = datos

if(nomnre === ''  || email === '' || mensaje ===''){
    mostarAlerta('todos los comapos son obligatorios', 'error')

    return; //corta la ejecucuin del codigo
}

    //crear la otra alerta
    mostarAlerta('Mensaje enviado correctamente')


    //enviar el formulario

    console.log('Enviando Formulario');
})  


function leerTexto(e){
    // console.log('e.target.value')

    datos[e.target.id] = e.target.value;

    // console.log(e.target)
    // console.log(datos)
}

function mostarAlerta(mensaje,error = null){
    const alerta = document.createElement('P')
    alerta.textContent = mensaje
}

if(error){
    alerta.classList.add('error')
}else{
    alerta.classList.add('correcto')
}

setTimeout(() => {
        error.remove()
    },5000)



