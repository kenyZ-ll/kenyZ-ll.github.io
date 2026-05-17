var tareas = [];

function agregar() {
    var t = document.getElementById("tarea").value;
    if (t == "") return;
    
    tareas.push(t);
    
    var li = "<li><input type='checkbox'> " + t + "</li>";
    document.getElementById("lista").innerHTML += li;
    
    document.getElementById("total").innerText = tareas.length;
    document.getElementById("tarea").value = "";
}

function borrar() {
    tareas = [];
    document.getElementById("lista").innerHTML = "";
    document.getElementById("total").innerText = "0";
}