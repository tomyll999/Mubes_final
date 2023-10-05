const espacio_carga_albumes = document.querySelector(".albumes")
const template_albumes_recientes = document.querySelector("#template-albumes-recientes").content
const fragment_album = document.createDocumentFragment()
const Albun_reproducir = []


// Primero cargamos todos los albumes que nos traiga la base de datos y los inyectamos directamente en el DOM
Albumes_recientes_array.forEach(al =>{
    // una vez que se entra en el for each se empieza a cargar todo en el 
    //template correspondiente(elemento donde se van a mostrar los datos)
    template_albumes_recientes.querySelector("h3").textContent=al.cant_canciones
    template_albumes_recientes.querySelector("h2").textContent=al.nombreAlbum
    template_albumes_recientes.querySelector("p").textContent=al.artistaAlbum
    template_albumes_recientes.querySelector("img").src=al.igm_portada
    template_albumes_recientes.querySelector(".hov").dataset.id = al.nombreAlbum
    // se crea un clon del template y posterior se lo pasa a un "fragment"(espacio de memoria,pero que no es parte del DOM)
    const clone = template_albumes_recientes.cloneNode(true)
    fragment_album.appendChild(clone)

})
espacio_carga_albumes.appendChild(fragment_album)

// seleccion de cordenadas del puntero a la hora de hacer click
espacio_carga_albumes.addEventListener("click",cordenadas =>{
    Ralbum(cordenadas)
    
})
// se pregunta si el elemento donde se hizo click tiene la clase "hov" y si es asi,las cordenadas anteriormente 
//obtenidas se las empiezan a desmenuzar hasta obtener el id de ese elemento
const Ralbum = cor =>{
    if (cor.target.classList.contains("hov")) {
        Repododucir_albun(cor.target.dataset.id)
    }
    cor.stopPropagation();
}

const Repododucir_albun = ide =>{
    //  una vez habiendo obtenida la id,se procede a entrar al array donde se encuentra el objeto con esa id y se lo empuja
    //a un array vacio,para posteriormente guardarlo en almacenamiento local y redireccionar de html
    const objt = Albumes_recientes_array.find((elemento,index,array)=>{
        return elemento.nombreAlbum == ide;
    })
    Albun_reproducir.push(objt)
    localStorage.setItem("albun_reciente_para_reproducir", JSON.stringify(Albun_reproducir) )
    location.href="../album/album.html"

}