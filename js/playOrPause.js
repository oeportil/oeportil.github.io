function playPause(){
    var reproduciendo = false;
    var pista = document.getElementById('audio');
    var boton_play_pause = document.getElementById('boton_play_pause');
    pista.pause();
    boton_play_pause.onclick = function(){
       if(reproduciendo){
          reproduciendo = false;
          pista.pause();
          boton_play_pause.innerHTML = '<i class="bi bi-play-fill"></i>';
       }else{
          reproduciendo = true;
          pista.play();
          boton_play_pause.innerHTML = '<i class="bi bi-pause-fill"></i>';
       }
    }
 }
 
 window.onload = function(){
    playPause();
 }