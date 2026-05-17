function tabla() {
    var n = document.getElementById("num").value;
    var texto = "";
    for (var i = 1; i <= 10; i++) {
        texto = texto + n + " x " + i + " = " + (n * i) + "<br>";
    }
    document.getElementById("res1").innerHTML = texto;
}
