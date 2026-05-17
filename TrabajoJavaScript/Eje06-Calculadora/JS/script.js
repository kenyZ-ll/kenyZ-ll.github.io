
// Seleccionamos los elementos del DOM
let pantalla = document.getElementById("pantalla");
let contenedor = document.getElementById("botones");

// --- FUNCIONES DE LÓGICA ---

function agregar(valor) {
    pantalla.value += valor;
}

function limpiar() {
    pantalla.value = "";
}

function borrar() {
    pantalla.value = pantalla.value.slice(0, -1);
}

function resultado() {
    try {
        // eval() pilla el texto ej: 5+5 y lo resuelve matemáticamente
        if (pantalla.value !== "") {
            pantalla.value = eval(pantalla.value);
        }
    } catch (error) {
        pantalla.value = "Error";
        setTimeout(limpiar, 1500);
    }
}

//  crear botones

let botones = [
    "C", "CE", "%", "/",
    "7", "8", "9", "*",
    "4" ,"5" ,"6", "-",
    "1", "2", "3", "+",
    "0", ".","="
];

// Bucle para crear cada botón y que aparezca en el HTML
for (let i = 0; i < botones.length; i++) {
    let boton = document.createElement("button");
    let texto = botones[i]; // Guardamos el valor actual
    
    boton.textContent = texto;

    // Asignamos el evento click a cada botón según su función
    boton.onclick = function() {
        if (texto === "C") {
            limpiar();
        } else if (texto === "CE") {
            borrar();
        } else if (texto === "=") {
            resultado();
        } else {
            
            agregar(texto);
        }
    };

    if (texto === "0") {
        boton.classList.add("btn-cero");
    }

    
    if (botones[i] !== "") { // Evitamos crear botones vacíos
    contenedor.appendChild(boton); 
    }
}
