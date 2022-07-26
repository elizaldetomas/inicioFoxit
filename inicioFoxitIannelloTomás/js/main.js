const boton = document.getElementById("btnDesplegarArchivo");
const menu = document.getElementById("cuadroArchivo");
const abrir = document.getElementById("abrirArchivo");

boton.addEventListener("click", () => {
    menu.classList.toggle("oculto")
    boton.classList.toggle("moverBoton")
})

// Realiza las comprobaciones cuando el tamaño de la pantalla del navegador cambie
document.addEventListener("resize", () => {
    var tamañoPantalla = window.matchMedia("(max-width: 800px)");
    if (tamañoPantalla.matches) {
        menu.classList.remove("oculto")
        menu.classList.add("oculto")
    }
    else {
        menu.classList.remove("oculto")
    }
})