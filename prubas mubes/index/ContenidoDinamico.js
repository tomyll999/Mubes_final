//-------------------carga de canciones on repeat---------------------------------------------
const espacio = document.querySelector(".sub2_contenedor_2")
const template=document.querySelector('#template-onrepeat1').content
const fragment=document.createDocumentFragment()
const caja=document.querySelector('.c_contendedor_2')
const titulo_portada =document.querySelector(".titulo_portada");
const artista_portada = document.querySelector(".artista_portada")
//musica----------------------------------------------------
 
let musicaActual=0;
const musica = document.querySelector("#musica")
const deslizador_audio =document.querySelector(".deslizador-audio")
const tiempoActual = document.querySelector(".tiempo-actual")
const tiempoDuracion =document.querySelector(".tiempo-duracion")
const playBtn = document.querySelector("#play_pause")


const next_btn = document.querySelector("#next_btn")
const previous = document.querySelector("#previous_btn")

//---------------------------------------------------------

const cajaContenido=[
        {
            nombre:"RoCKSTAR 2.0",
            artista:"Duki ft Jhayco",
            Image:"../imagenes/images/Rockstar 2.0.jfif",
            url:"../Musica/RoCKSTAR 2.0.mp3",
            id:"10"

        },
        {
            nombre:"As It Was",
            artista:"Harry Styles",
            Image:"../imagenes/images/harryshouse.jpg",
            url:"../Musica/as it was.mp3",
            id:"11"
        },
        {
            nombre:"Mine",
            artista:"Taylor Swift",
            Image:"../imagenes/images/Mine.jfif",
            url:"../Musica/Mine.mp3",
            id:"12"
        }, 
        {
            nombre:"Dispara",
            artista:"Nicki Nicole ft Milo j",
            Image:"../imagenes/images/Dispara.jfif",
            url:"../Musica/Dispara.mp3",
            id:"13"
        }, 
        {
            nombre:"Seguir viviendo sin tu amor",
            artista:"Spinetta",
            Image:"../imagenes/images/Seguir viviendo sin tu amor.jfif",
            url:"../Musica/Seguir Viviendo Sin Tu Amor.mp3",
            id:"14"
        }, 
        {
            nombre:"Glock",
            artista:"Cazzu ft La Joaqui",
            Image:"../imagenes/images/Glock.jfif",
            url:"../Musica/Glock.mp3",
            id:"15"
        },  
       
       
    ];
cajaContenido.forEach(el =>{
    
    
    template.querySelector('img').src=el.Image
    template.querySelector('p').textContent=el.artista
    template.querySelector('h2').textContent=el.nombre
    template.querySelector('#btn-hov').dataset.id = el.id
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


//seleccion de atributos al cliquear
espacio.addEventListener("click", ele => {
    Reproducir(ele)
    console.log(ele)
    
})
const Reproducir = ele =>{
    if (ele.target.classList.contains("material-symbols-outlined")) {
        agregar_reproductor(ele.target.parentNode.dataset.id)  
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














