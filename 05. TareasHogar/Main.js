import Persona from './Persona.js';

// Instancio objetos que representan miembros de las familias y las añado a arrays. 

// Familia Sastre
var padreSastre = new Persona("Pedro", "Sastre", "Sastre", "Padre");
var madreSastre = new Persona("Ana", "Sastre", "Sastre", "Madre");
var hijoSastre = new Persona("Juan", "Sastre", "Sastre", "Hijo");
var hijaSastre = new Persona("Nuria", "Sastre", "Sastre", "Hija");

var familiaSastre = [];
var tareasFamiliaSastre = ["Poner lavadora", "Limpiar cocina", "Limpiar baño"];

familiaSastre.push(padreSastre);
familiaSastre.push(madreSastre);
familiaSastre.push(hijoSastre);
familiaSastre.push(hijaSastre);

// Llamo al método para crear la tablilla de tareas
crearReparto(familiaSastre, tareasFamiliaSastre, 52);

// Familia Torrens
var padreTorrens = new Persona("Antonio", "Torrens", "Torrens", "Padre");
var madreTorrens = new Persona("Estela", "Torrens", "Torrens", "Madre");
var hijoTorrens = new Persona("Borja", "Torrens", "Torrens", "Hijo");
var hijaTorrens = new Persona("Blanca", "Torrens", "Torrens", "Hija");

var familiaTorrens = [];
var tareasFamiliaTorrens = ["Planchar", "Limpiar baño"];

familiaTorrens.push(padreTorrens);
familiaTorrens.push(madreTorrens);
familiaTorrens.push(hijoTorrens);
familiaTorrens.push(hijaTorrens);

crearReparto(familiaTorrens, tareasFamiliaTorrens, 4);

// Familia Moll
var padreMoll = new Persona("Jaume", "Moll", "Moll", "Padre");
var madreMoll = new Persona("Estela", "Moll", "Moll", "Madre");
var hijoMoll = new Persona("Alejandro", "Moll", "Moll", "Hijo");
var hijaMayorMoll = new Persona("Marga", "Moll", "Moll", "Hija Mayor");
var hijaMenorMoll = new Persona("Maria", "Moll", "Moll", "Hija Menor");


var familiaMoll = [];
var tareasFamiliaMoll = ["Poner lavadora", "Limpiar cocina", "Limpiar comedor", "Planchar", "Limpiar baño"];

familiaMoll.push(padreMoll);
familiaMoll.push(madreMoll);
familiaMoll.push(hijoMoll);
familiaMoll.push(hijaMayorMoll);
familiaMoll.push(hijaMenorMoll);

crearReparto(familiaMoll, tareasFamiliaMoll, 12);

// Para mi lo que tenia más sentido era asignar tareas a familiares y no familiares a tareas, por eso recorro la array de familias.
function crearReparto(familia, tareas, duracion) {

    document.getElementById("titulo").innerHTML = "Reparto de tareas de la familia: " + familia[0].getFamilia() + "\n";

    console.log("Reparto de tareas de la familia: " + familia[0].getFamilia() + "\n");

    var tabla = "<table><tr><th>Semana</th><th>Persona</th><th>Tarea</th>";
    var contenido = "";

    for (let semana = 1; semana <= duracion; semana++) {

        var asignacionSemanal = "";

        for (let i = 0; i < familia.length; i++) {
            var persona = familia[i];
            var nombre = persona.getNombre();
            var apellido = persona.getApellido();
            var indiceTarea = (semana + i) % tareas.length;
            var tarea = tareas[indiceTarea];

            asignacionSemanal += " " + nombre + " " + apellido + " Tarea: " + tarea + "\n";
            contenido += "<tr><td>" + semana + "</td><td>" + nombre + " " + apellido + "</td>" + "<td>" + tarea + "</td></tr>";
        }

        console.log(asignacionSemanal);               
    }
    tabla = tabla + contenido + "</table>"
    document.getElementById("tabla").innerHTML = tabla;
}