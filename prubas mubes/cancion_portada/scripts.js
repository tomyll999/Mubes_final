let musicaActual=0;
const cancion = document.getElementById("musica");
const play = document.getElementById("play_pause");
const play_reproductor = document.getElementById("play_pausa");
const deslizador_audio =document.querySelector(".deslizador-audio")
const tiempoActual = document.querySelector(".tiempo-actual")
const tiempoDuracion =document.querySelector(".tiempo-duracion")
const next_btn = document.querySelector("#next_btn")
const previous = document.querySelector("#previous_btn")


/*cambie de play a pausa el de abajo de la portada*/ 

play.addEventListener("click", e=>{
    if (play.classList=="bx bx-play"){
            play.classList.remove('bx-play')
            play.classList.add('bx-pause')
        }
    else{
        play.classList.remove('bx-pause')
        play.classList.add('bx-play')
    }
})

/*reproduzca cancion en play de abajo de la portada*/

play.addEventListener("click",e=>{
    if(play.className.includes("bx bx-play")){
        cancion.pause()
    }
    else
    {
        cancion.play()
    }
})

/*cambie de play a pausa el del reproductor*/ 


play_reproductor.addEventListener("click", e=>{
    if (play_reproductor.classList=="bx bx-play"){
            play_reproductor.classList.remove('bx-play')
            play_reproductor.classList.add('bx-pause')
        }
    else{
        play_reproductor.classList.remove('bx-pause')
        play_reproductor.classList.add('bx-play')
    }
})

/*reproduzca cancion en play del reproductor*/


play_reproductor.addEventListener("click",e=>{
    if(play_reproductor.className.includes("bx-play")){
        cancion.pause()
    }
    else
    {
        cancion.play()
    }
})

/*al apretar el play de abajo de la portada, el play del reproductor va a hacer la misma accion (pausar-despausar)*/

play.addEventListener("click", e=>{
    if (play.classList=="bx bx-play"){
            play_reproductor.classList.remove('bx-pause')
            play_reproductor.classList.add('bx-play')
        }
    else{
        play_reproductor.classList.remove('bx-play')
        play_reproductor.classList.add('bx-pause')
    }
})

/*lo mismo q arriba pero al reves */

play_reproductor.addEventListener("click", e=>{
    if (play_reproductor.classList=="bx bx-play"){
            play.classList.remove('bx-pause')
            play.classList.add('bx-play')
        }
    else{
        play.classList.remove('bx-play')
        play.classList.add('bx-pause')
    }
})

//-------------------------------------------------------------------------------------------

/*barra de audio*/

deslizador_audio.value=0;
        let musica = document.getElementById("musica");
        tiempoActual.innerHTML='00:00'
        setTimeout(() => {
            deslizador_audio.max = musica.duration;
            tiempoDuracion.innerHTML = formatTime(musica.duration);
        }, 300);

        const formatTime = (time) => {
            let min = Math.floor(time / 60);
            if (min < 10){
                min = `0${min}`
            }
            let sec = Math.floor(time % 60);
            if(sec < 10){
                sec = `0${sec}`
            }
            return `${min}:${sec}` 
        }
    play.addEventListener("click", el =>{
        if (play.className.includes("pause")){
            musica.play();
        }
        else{
            musica.pause();
        }
    })
    

    setInterval(() => {
        deslizador_audio.value = musica.currentTime
        tiempoActual.innerHTML = formatTime(musica.currentTime)
    }, 500);

    deslizador_audio.addEventListener("change",()=>{
        musica.currentTime = deslizador_audio.value;
    })























