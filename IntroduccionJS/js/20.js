//Metdos de prpiedad
const reproductor ={
    reproducir: function(id){
        console.log('Reproduciendo Cancion con el ID: ${id}');
    },
    pausar: function(){
        console.log('Pausando...');
    },
    crearPlaylist: function(nombre){
        console.log('Creando la Playlist: ${nombre}');
    },
    reproducirPlaylist: function(nombre){
        console.log('Reproduciendo la Playlist: ${nombre}');
    }
}

reproductor.borrarcancion = function(id){
    console.log('Borrando Cancion con el ID: ${id}');
}

reproductor.reproducir(3840)
reproductor.pausar()
reproductor.crearPlaylist('Heavy Metal')
reproductor.borrarcancion(3840)
reproductor.reproducirPlaylist('Heavy Metal')