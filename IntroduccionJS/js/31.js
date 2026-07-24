
const btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    Notification.requestPermission().then(function(result) {
        console.log(result);
    });
});




if (Notification.permission == "granted") {
    new Notification("Esta es una notificación de prueba", {
        icon: "img/ccj.png",
        body: "Código con Juan es el mejor canal de YouTube"
        });
};