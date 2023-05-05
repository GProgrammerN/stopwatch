var i = 0
var relogio;
var estado


function contadorFunction() {
    if (estado != true)
        relogio = setInterval(function () {
            i++
            cronometro.innerHTML = i
        }, 1000)
    iniciarContagem.classList.add("buttonActive")
    iniciarContagem.classList.remove("buttonHover")
    buttonStatus()
    estado = true;
}

function contadorPausar() {
    clearInterval(relogio)
    estado = false
    pausarContagem.classList.add("buttonActive")
    pausarContagem.classList.remove("buttonHover")
    buttonStatus("pausar")
}

function contadorResetar() {
    i = 0;
    clearInterval(relogio)
    cronometro.innerHTML = i
    estado = false
    buttonStatus("resetar")
}

function buttonStatus(buttonPressed) {
    if (buttonPressed == "resetar") {
        pausarContagem.classList.contains("buttonHover") ? true : pausarContagem.classList.add("buttonHover")
        pausarContagem.classList.contains("buttonActive") ? pausarContagem.classList.remove("buttonActive") : false
        iniciarContagem.classList.contains("buttonHover") ? true : iniciarContagem.classList.add("buttonHover")
        iniciarContagem.classList.contains("buttonActive") ? iniciarContagem.classList.remove("buttonActive") : false
    } else if (buttonPressed == "pausar") {
        iniciarContagem.classList.contains("buttonHover") ? true : iniciarContagem.classList.add("buttonHover")
        iniciarContagem.classList.contains("buttonActive") ? iniciarContagem.classList.remove("buttonActive") : false
    } else {
        pausarContagem.classList.contains("buttonHover") ? true : pausarContagem.classList.add("buttonHover")
        pausarContagem.classList.contains("buttonActive") ? pausarContagem.classList.remove("buttonActive") : false

    }
}