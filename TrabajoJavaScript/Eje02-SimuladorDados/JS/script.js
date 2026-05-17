function dados() {
    var texto = "";
    for (var i = 1; i <= 10; i++) {
        var dado = Math.floor(Math.random() * 6) + 1;
        texto = texto + "Lanzamiento " + i + ": " + dado + "<br>";
    }
    document.getElementById("res2").innerHTML = texto;
}