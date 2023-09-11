

//-------------------carga de canciones on repeat---------------------------------------------
const espacio = document.querySelector(".sub2_contenedor_2")
const template=document.querySelector('#template-onrepeat1').content
const fragment=document.createDocumentFragment()
const caja=document.querySelector('.c_contendedor_2')
const titulo_portada =document.querySelector(".titulo_portada");
const artista_portada = document.querySelector(".artista_portada")
const musica_template = document.querySelector(".color")
//musica----------------------------------------------------
 
let musicaActual=0;
const musica = document.querySelector("#musica")
const deslizador_audio =document.querySelector(".deslizador-audio")
const tiempoActual = document.querySelector(".tiempo-actual")
const tiempoDuracion =document.querySelector(".tiempo-duracion")
const playBtn = document.querySelector("#play_pause")


const next_btn = document.querySelector("#next_btn")
const previous = document.querySelector("#previous_btn")
const like = document.querySelector("#like")

//---------------------------------------------------------


cajaContenido.forEach(el =>{
    
    
    template.querySelector('img').src=el.Image
    template.querySelector('p').textContent=el.artista
    template.querySelector('h2').textContent=el.nombre
    template.querySelector('#btn-hov').dataset.id = el.id
    template.querySelector(".color").dataset.id = el.id
    const clone=template.cloneNode(true)
    fragment.appendChild(clone)

    
});
espacio.appendChild(fragment)
//----------------------------------------------------------------------------------------------------------------



playBtn.addEventListener("click", e =>{
    if (playBtn.classList=="bx bx-play-circle") {
        playBtn.classList.remove('bx-play-circle')
        playBtn.classList.add('bx-pause-circle')
        
    }
    else{
       playBtn.classList.remove('bx-pause-circle')
        playBtn.classList.add('bx-play-circle')
    }

})


like.addEventListener("click", e =>{
    if (like.classList=="bx bx-heart") {
        like.classList.remove('bx-heart')
        like.classList.add('bxs-heart')
        like.style.color="purple"
        
    }
    else{
       like.classList.remove('bxs-heart')
        like.classList.add('bx-heart')
        like.style.color=""
    }

})


//seleccion de atributos al cliquear
espacio.addEventListener("click", ele => {
    Reproducir(ele)
    Reproducir_template(ele)
    
    
})

const MusicaReproducir = [];

const Reproducir_template = elemento =>{
    if(elemento.target.classList.contains("color")){
        ReproducirMusica(elemento.target.dataset.id)
    }
    elemento.stopPropagation();
}

 const ReproducirMusica = h=>{
    const obj = cajaContenido.find((elemento,index,array) => {
        return elemento.id ==  h;
    })
    MusicaReproducir.push(obj)

    localStorage.setItem("cancion-para-reproducir",JSON.stringify(MusicaReproducir))
    location.href = "./prueba.html";
}
 


const Reproducir = ele =>{
    if (ele.target.classList.contains("material-symbols-outlined")) {
        agregar_reproductor(ele.target.parentNode.dataset.id)  
        console.log(ele.target)
        Sumarid(parseInt(ele.target.parentNode.dataset.id) ) 
        Restarid(parseInt(ele.target.parentNode.dataset.id))   
        
    }
    ele.stopPropagation();
    
   
}



const agregar_reproductor = objeto =>{
    const ob = cajaContenido.find((elemento,index,array) => {
        return elemento.id ==   objeto;
    })
    
    
    document.getElementById("img_reproductor").src=ob.Image;
    document.querySelector("audio").src=ob.url;
    
    titulo_portada.innerHTML=ob.nombre;
    artista_portada.innerHTML = ob.artista;

        /////////////////////////////////////////////////------------------------------------
        deslizador_audio.value=0;
        let cancion = ob.url
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
    playBtn.addEventListener("click",el =>{
        if (playBtn.className.includes("pause")){
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

}


const Sumarid  = objt =>{
    
    next_btn.addEventListener("click",()=>{
        objt++;
        const objeto = cajaContenido.find((elemento,index,array) => {
            return elemento.id == objt;
  })
     document.getElementById("img_reproductor").src=objeto.Image;
     document.querySelector("audio").src=objeto.url;
    
     titulo_portada.innerHTML=objeto.nombre;
     artista_portada.innerHTML = objeto.artista;
    })

}

const Restarid  = objt =>{
    
    previous.addEventListener("click",()=>{
        objt--;
        console.log(objt)
        const objeto = cajaContenido.find((elemento,index,array) => {
            return elemento.id == objt;
  })
     document.getElementById("img_reproductor").src=objeto.Image;
     document.querySelector("audio").src=objeto.url;
    
     titulo_portada.innerHTML=objeto.nombre;
     artista_portada.innerHTML = objeto.artista;
     
    })
}




   



//-------------------------------------------------------------------------------------------------------------------














