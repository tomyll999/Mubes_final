document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById("btn_menu_vuelta").addEventListener("click",sacar_menu);
menu = document.getElementById("menu");
back_menu = document.getElementById("back_menu");




function mostrar_menu(){
    menu.style.left = "0px";
    back_menu.style.display = "block";
};
function sacar_menu(){
    menu.style.left = "-450px";
    back_menu.style.display = "none";
    
}

//-----------------------------------------------------mostrar reproducto
function reproducir(){
    document.getElementById("reproductor").style.opacity="1";
    
}
function cerrar(){
    document.getElementById("reproductor").style.opacity="0";
    
}





