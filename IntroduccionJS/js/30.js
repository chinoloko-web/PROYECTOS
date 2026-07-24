//Promise

const usuarioAutenticado = new Promise((resolve, reject) => {
    const autenticado = true // Simulamos la autenticación del usuario
    if (autenticado) {
        resolve('Usuario autenticado')
    } else {
        reject('Error: Usuario no autenticado')
    }
})

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

    

// en lospromise existen 3 valores
// pending: estado inicial, no se ha cumplido ni rechazado
// fulfilled: se ha cumplido la promesa
// rejected: se ha rechazado la promesa