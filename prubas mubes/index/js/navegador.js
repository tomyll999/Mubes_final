const nav = document.querySelector(".contenedor_1");


window.addEventListener("scroll",function(){
    nav.classList.toggle("active",window.scrollY > 0)

}

)