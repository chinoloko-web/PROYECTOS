// Async / Await

function descargarClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');
        setTimeout( () => {
            resolve('Clientes descargados');
        }, 3000);
    });
}   

function descargaUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando últimos pedidos... espere...');
        setTimeout( () => {
            resolve('Últimos pedidos descargados');
        }, 5000);
    });
}   




async function app(){
    try {
        // const resultado = await descargarClientes();
        // console.log(resultado);
        // const pedidos = await descargaUltimosPedidos();
        // console.log(pedidos);


        const resultado = await Promise.all([descargarClientes(), descargaUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
        
    } catch (error) {
        console.log(error);
    }
}

app();