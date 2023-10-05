const CancionParaReproducir = JSON.parse(localStorage.getItem("cancion-para-reproducir"))
const portada = document.querySelector("img")
const portada_2 = document.querySelector(".portada_cancion")
const videoC = document.querySelector("video")
const titulo_cancion = document.querySelector("h3")
const artista_cancion = document.querySelector("h6")
const titulo_cancion_2 = document.querySelector("h1")
const artista_cancion_2 =document.querySelector("#artista_y_album")
console.log(CancionParaReproducir)
CancionParaReproducir.forEach(element => {
    titulo_cancion.innerHTML = element.nombre
    artista_cancion.innerHTML =element.artista
    titulo_cancion_2.innerHTML = element.nombre
    artista_cancion_2.innerHTML = element.artista
    portada.src = element.Image
    portada_2.src =element.Image
    videoC.src = element.video
    document.querySelector("audio").src = element.url
});