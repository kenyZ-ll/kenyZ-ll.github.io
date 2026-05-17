var secreto;
var vidas = 4;

function comenzar() {
    var max = document.getElementById("max").value;
    secreto = Math.floor(Math.random() * max) + 1;
    vidas = 4;
    document.getElementById("res3").innerText = "Juego iniciado. Vidas: 4";
}

function adivinar() {
    var num = document.getElementById("intento").value;
    if (num == secreto) {
        document.getElementById("res3").innerText = "¡Ganaste!";
    } else {
        vidas = vidas - 1;
        if (vidas == 0) {
            document.getElementById("res3").innerText = "Perdiste. Era el " + secreto;
        } else {
            document.getElementById("res3").innerText = "Fallo. Vidas restantes: " + vidas;
        }
    }
}