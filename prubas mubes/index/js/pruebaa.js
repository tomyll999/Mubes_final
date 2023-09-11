const CancionParaReproducir = JSON.parse(localStorage.getItem("cancion-para-reproducir"))
const portada = document.querySelector("img")
const texto = document.querySelector("h1")

CancionParaReproducir.forEach(element => {
    texto.innerHTML = element.artista
    portada.src = element.Image
});