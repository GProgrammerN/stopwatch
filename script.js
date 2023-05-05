var i = 0
var relogio;
var estado

function contadorFunction() {
    if (estado != true)
        relogio = setInterval(function () {
            i++
            cronometro.innerHTML = i
        }, 1000)
    estado = true;
}

function contadorPausar() {
    clearInterval(relogio)
    estado = false
}

function contadorResetar() {
    i = 0;
    clearInterval(relogio)
    cronometro.innerHTML = i
    estado = false
}