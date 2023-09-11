const mubie = document.querySelector("#btn_mubie")

mubie.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'es-ARG';
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')
            //-------------------------------verificacion de los comandos 

            function encontrarPalabra(frase,palabra) {
                if(frase.constructor != String || palabra.constructor !=String){
                     throw TypeError("Ambos argumentos deben ser de caracteres String.")
                    
                }
                let palabras = frase.split(' ').map(p=>p.toLowerCase() );
                return palabras.indexOf(palabra.toLocaleLowerCase().trim()) != -1;
            }
            // let resultado1 = encontrarPalabra(transcript,"crear")
            
            try{
               
                if (encontrarPalabra(transcript,"reproducir") == true)  {
                    if (encontrarPalabra(transcript,"canción") == true) {
                        window.alert("Reproduciendo...")
                        document.getElementById("reproductor").style.opacity="1";
                        
                    }
                    if (encontrarPalabra(transcript,"dejar") == true){
                        window.alert("se ah dejado de reproducir")
                        document.getElementById("reproductor").style.opacity="0";
                    }
                }
                if(encontrarPalabra(transcript,"pausar") == true){
                    musica.pause();
                    playBtn.classList.remove('bx-pause-circle')
                    playBtn.classList.add('bx-play-circle')
                    
                }
            }catch(e){
                console.log(`error: ${e.mesagge}`)
            }
        console.log(transcript);
    });
    
    if (speech == true) {
        recognition.start();
    }


    
})


