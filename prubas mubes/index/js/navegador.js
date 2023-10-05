// funcion para poner estatico el nav de la pagina al realizar "scroll"
const nav = document.querySelector(".contenedor_1");
const fondo = document.getElementById("fondo_busqueda");
const buscador = document.querySelector("#buscador");
const resultados_busqueda =document.querySelector(".resultados_busqueda")





window.addEventListener("scroll",function(){
    nav.classList.toggle("active",window.scrollY > 0)

}
)
buscador.addEventListener("focus",function(){
    
    nav.style.zindex = "1"
    
    fondo.style.position = "fixed";
    fondo.style.zIndex = "22";
    fondo.style.opacity = "1";

})
buscador.addEventListener("blur",function(){
    
    nav.style.zindex = "1"
    
    
    fondo.style.zIndex = "1";
    fondo.style.opacity = "0";
    

})
const buscador_funcion = () => {
    const result_busqueda = buscador.value.toLowerCase();
    const filtrado = cajaContenido.filter((cancion)=>cancion.nombre.toLowerCase().startsWith(result_busqueda))
    const filtrado_albumes = Albumes_recientes_array.filter((cancion)=>cancion.nombreAlbum.toLowerCase().startsWith(result_busqueda))
    console.log(filtrado)
    if (filtrado.length === 0) {
        resultados_busqueda.innerHTML = ""

        const h2_noresultados = document.createElement("h2")
        h2_noresultados.textContent = "NO SE AH ENCONTRADO NADA RELACIONADO" 
        h2_noresultados.classList = "NoResultados"
        
        resultados_busqueda.appendChild(h2_noresultados)
    }
    filtrado.forEach((can) =>{
        
        console.log(can)
        resultados_busqueda.innerHTML = ""
        const $sec_card = document.createElement("section"),
        $div_resultados = document.createElement("div"),
        $img_resultados = document.createElement("img"),
        $sec_hov = document.createElement("section"),
        $div_descripcion = document.createElement("div"),
        $h3_hov = document.createElement("h3"),
        $h2_resultados = document.createElement("h2"),
        $p_resultados = document.createElement("p")


        $sec_card.classList = "resultados-card"
        $div_resultados.classList = "resultados"
        $img_resultados.src = can.Image
        $sec_hov.classList = "hov_resultados"
        $div_descripcion.classList = "descripcion_resultados"
        $h3_hov.textContent = "Play"
        $h2_resultados.textContent = can.nombre
        $p_resultados.textContent = can.artista


        $div_descripcion.appendChild($h3_hov)
        $sec_hov.appendChild($div_descripcion)
        
        $div_resultados.appendChild($img_resultados)
        $div_resultados.appendChild($h2_resultados)
        $div_resultados.appendChild($p_resultados)
        $div_resultados.appendChild($sec_hov)
        $sec_card.appendChild($div_resultados)
         
        resultados_busqueda.appendChild($sec_card)
        
        if (buscador.value === "") {
            resultados_busqueda.innerHTML = ""
        }
        
    })
    
    filtrado_albumes.forEach((e)=>{
        console.log(e)
        resultados_busqueda.innerHTML = ""
        const $sec_card = document.createElement("section"),
        $div_resultados = document.createElement("div"),
        $img_resultados = document.createElement("img"),
        $sec_hov = document.createElement("section"),
        $div_descripcion = document.createElement("div"),
        $h3_hov = document.createElement("h3"),
        $h2_resultados = document.createElement("h2"),
        $p_resultados = document.createElement("p")


        $sec_card.classList = "resultados-card"
        $div_resultados.classList = "resultados"
        $img_resultados.src = e.igm_portada
        $sec_hov.classList = "hov_resultados"
        $div_descripcion.classList = "descripcion_resultados"
        $h3_hov.textContent = "Play"
        $h2_resultados.textContent = e.nombreAlbum
        $p_resultados.textContent = e.artistaAlbum


        $div_descripcion.appendChild($h3_hov)
        $sec_hov.appendChild($div_descripcion)
        
        $div_resultados.appendChild($img_resultados)
        $div_resultados.appendChild($h2_resultados)
        $div_resultados.appendChild($p_resultados)
        $div_resultados.appendChild($sec_hov)
        $sec_card.appendChild($div_resultados)
        
        resultados_busqueda.appendChild($sec_card)

        if (buscador.value === "") {
            resultados_busqueda.innerHTML = ""
        }
    })
    
}
 buscador.addEventListener("input",buscador_funcion)