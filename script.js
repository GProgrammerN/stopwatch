var i = 0
var relogio;
const contador = document.getElementById(cronometro)


function contadorFunction(){
    relogio = setInterval(function() {
        i++
        cronometro.innerHTML = i
    }, 1000)
}

function contadorPausar(){
    clearInterval(relogio)
}

function contadorResetar(){
    i = 0;
    clearInterval(relogio)
    cronometro.innerHTML = i
}