function reproducir(){
    document.getElementById("reproductor").style.opacity="1";
    document.getElementById("letras").style.height="80%";
}

function cerrar(){
    document.getElementById("reproductor").style.opacity="0";
    document.getElementById("letras").style.height="90%";
}

function letras(){
    document.getElementById("cancion_general").style.display="none";
    document.getElementById("cancion_letras").style.display="flex";
}

function cerrar_letras(){
    document.getElementById("cancion_letras").style.display="none";
    document.getElementById("cancion_general").style.display="flex";
};











