const mubie = document.querySelector("#btn_mubie")
const synth = window.speechSynthesis;

// al apretar el boton de mubie,se ejecuta dicho asistente
mubie.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;


    // se inicializa la API de reconocimiento de voz
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'es-ARG';
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    
    recognition.addEventListener('result', e => {
        // variable donde se traduce la voz a cadena de texto
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')
            //-------------------------------verificacion de los comandos 
            // funcion donde mediante dos parametros,nos devolvera valores booleano si se encuentra X palabra en nuestra 
            // cadena de texto ingresada mediante voz.
            function encontrarPalabra(frase,palabra) {
                if(frase.constructor != String || palabra.constructor !=String){
                     throw TypeError("Ambos argumentos deben ser de caracteres String.")
                    
                }
                let palabras = frase.split(' ').map(p=>p.toLowerCase() );
                return palabras.indexOf(palabra.toLocaleLowerCase().trim()) != -1;
            }
            
            let voices = []

            //Inicializamos utter.(funcion para usar los comandos de voces)
            const utter = new SpeechSynthesisUtterance();
            utter.rate = 0.65;
            utter.pitch = 0.1;
            utter.lang = 'es-ARG';
        
            //Cargamos las voces que tenemos en nuestro sistema y las mostarmos en un arreglo por consola.
            window.speechSynthesis.onvoiceschanged = function () {
                voices = synth.getVoices();
                console.log(voices);
            };
           
            
            
            const MubieCancion = []
            const MubieAlbum =[]
            // una vez que se haya guardaod la cadena de voz y convertida en string,se crean las funciones que queremos
            //que mubie realice.
            try{
               
                if (encontrarPalabra(transcript,"reproducir") == true)  {
                    if (encontrarPalabra(transcript,"canción") == true) {
                        let palabra_clave = transcript.split(" ")[3]
                        
                        utter.text = "Reproduciendo cancion de " + 
                        synth.speak(utter)

                        



                       
                             const ob = cajaContenido.find((elemento,index,array) => {
                                 return elemento.id_mubie ==   palabra_clave;
                             })
                             console.log(palabra_clave)
                             document.getElementById("img_reproductor").src=ob.Image;
                            musica.src=ob.url
                            
                            console.log(transcript)
                             document.getElementById("reproductor").style.opacity="1";
                             document.querySelector(".titulo_portada").innerHTML=ob.nombre;
                             document.querySelector(".artista_portada").innerHTML = ob.artista;
                             utter.text = "Reproduciendo cancion de " + ob.artista
                            synth.speak(utter)

                    }
                    if (encontrarPalabra(transcript,"dejar") == true){
                        utter.text = "se ah dejado de reproducir"
                        synth.speak(utter)
                        
                        document.getElementById("reproductor").style.opacity="0";
                        musica.pause();
                    }
                }
                if (encontrarPalabra(transcript,"llama") == true){
                    let ncancion = document.querySelector(".titulo_portada").textContent
                    let nartista = document.querySelector(".artista_portada").textContent
                    utter.text = "Esta cansion se llama...." + ncancion + "..de..." + nartista
                    synth.speak(utter)
                    
                    
                }
                if(encontrarPalabra(transcript,"iniciar") == true){
                    utter.text = "reproduciendo"
                        synth.speak(utter)
                    document.querySelector("#play_pause").classList.remove('bx-play-circle')
                    document.querySelector("#play_pause").classList.add('bx-pause-circle')
                    musica.play();
                    
                }
                if(encontrarPalabra(transcript,"bajar") == true){
                    utter.text = "bajando volumen tres puntos"
                        synth.speak(utter)
                        
                        musica.volume -=0.4;
                    
                }
                if(encontrarPalabra(transcript,"subir") == true){
                    utter.text = "subiendo volumen tres puntos"
                        synth.speak(utter)
                        
                        musica.volume +=0.3;
                    
                }
                if(encontrarPalabra(transcript,"pausar") == true){
                    utter.text = "pausando"
                        synth.speak(utter)
                        document.querySelector("#play_pause").classList.remove('bx-pause-circle')
                        document.querySelector("#play_pause").classList.add('bx-play-circle')
                        musica.pause();
                    
                }
                if(encontrarPalabra(transcript,"Hola") == true){
                    utter.text = "Hola... visitantes de la expo .......buen dia......soy la asistente virtual de mubes.....mubie......¿en que los puedo ayudar?"
                        synth.speak(utter)
                    
                }
                
                if(encontrarPalabra(transcript,"abrir") == true){
                    if(encontrarPalabra(transcript,"canción") == true){
                        let palabra_clave_abrir = transcript.split(" ")[3]
                            
                            
                                 const ob = cajaContenido.find((elemento,index,array) => {
                                     return elemento.id_mubie ==   palabra_clave_abrir;
                                 })
                                 MubieCancion.push(ob)
                                 utter.text = "abriendo cancion de.." + ob.artista
                                 synth.speak(utter)
    
                                localStorage.setItem("cancion-para-reproducir-mubie",JSON.stringify(MubieCancion))
                                location.href = "../mubieCancion/mubieCancion.html";
                        
                    }
                    if(encontrarPalabra(transcript,"álbum") == true){
                        let palabra_clave_abrir = transcript.split(" ")[2]
                        console.log(palabra_clave_abrir)
                        
                                 const ob = Albumes_recientes_array.find((elemento,index,array) => {
                                     return elemento.id_mubie ==   palabra_clave_abrir;
                                 })
                                 
                                 MubieAlbum.push(ob)
                                 
                                 utter.text = "abriendo " + ob.nombreAlbum
                                 synth.speak(utter)
                                         
                                 localStorage.setItem("album-para-reproducir-mubie",JSON.stringify(MubieAlbum))
                                  location.href = "../mubieAlbum/mubieAlbum.html";
                                  
                        
                    }
                    
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


      