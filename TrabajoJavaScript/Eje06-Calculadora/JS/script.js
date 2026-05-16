const botones = [
    "AC", "+/-", "%", "/",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];

let pantalla;
let valor = "0";
let previo = null;
let operador = null;
let reset = false;

function crearCalculadora() {
    const app = document.getElementById("calculator-app");

    pantalla = document.createElement("input");
    pantalla.id = "display";
    pantalla.type = "text";
    pantalla.value = valor;
    pantalla.readOnly = true;
    pantalla.style.cssText = "width:100%;font-size:2.5rem;padding:15px;text-align:right;margin-bottom:10px;"

    const botonesDiv = document.createElement("div");
    botonesDiv.style.cssText = "display:grid;grid-template-columns:repeat(4,1fr);gap:8px;";

    for (let i = 0; i < botones.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = botones[i];
        btn.style.cssText = "padding:18px;font-size:1.4rem;border:none;border-radius:12px;cursor:pointer;";
        btn.addEventListener("click", () => manejarBoton(botones[i]));
        botonesDiv.appendChild(btn);
    }

    app.appendChild(pantalla);
    app.appendChild(botonesDiv);
    document.body.style.margin = "10px";
}

function manejarBoton(boton) {
    if (boton === "AC") {
        valor = "0";
        previo = null;
        operador = null;
        reset = false;
    } else if (boton === "+/-") {
        valor = String(parseFloat(valor) * -1);
    } else if (boton === "%") {
        valor = String(parseFloat(valor) / 100);
    } else if (boton === ".") {
        if (!valor.includes(".")) valor += ".";
    } else if (["/", "x", "-", "+"].includes(boton)) {
        previo = parseFloat(valor);
        operador = boton;
        reset = true;
    } else if (boton === "=") {
        if (operador && previo !== null) {
            const actual = parseFloat(valor);
            if (operador === "+") valor = String(previo + actual);
            if (operador === "-") valor = String(previo - actual);
            if (operador === "x") valor = String(previo * actual);
            if (operador === "/") valor = actual === 0 ? "0" : String(previo / actual);
            operador = null;
            previo = null;
            reset = true;
        }
    } else {
        if (valor === "0" || reset) {
            valor = boton;
            reset = false;
        } else {
            valor += boton;
        }
    }
    pantalla.value = valor;
}

window.addEventListener("DOMContentLoaded", crearCalculadora);

