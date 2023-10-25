import Persona from './Persona.js';

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

    // crearReparto(familiaSastre, tareasFamiliaSastre, 52);

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
    var tareasFamiliaMoll = ["Ponerlavadora", "Limpiar cocina", "Limpiar comedor", "Planchar", "Limpiar baño" ];

    familiaMoll.push(padreMoll);
    familiaMoll.push(madreMoll);
    familiaMoll.push(hijoMoll);
    familiaMoll.push(hijaMayorMoll);
    familiaMoll.push(hijaMenorMoll);

    // crearReparto(familiaMoll, tareasFamiliaMoll, 12);


    function crearReparto(familia, tareas, duracion) {
        
        if (familia.length > tareas.length) {
            
            var tabla = "<table><tr><th>Semana</th><th>Persona</th><th>Tarea</th>";
            var contenido = "";

            document.getElementById("titulo").innerHTML = "Reparto de tareas de la familia: " + familia[0].getFamilia() + "\n";

            // console.log("Reparto de tareas de la familia: " + familia[0].getFamilia() + "\n");
            var indiceTarea = 0;

            for (let semana = 1; semana <= duracion; semana++) {
                var asignacionSemanal = "";
        
                for (let i = 0; i < familia.length; i++) {
                    var persona = familia[i];
                    var nombre = persona.getNombre();
                    var apellido = persona.getApellido();
                    
                    var tarea = tareas[indiceTarea];
                    indiceTarea = (indiceTarea + 1) % tareas.length;
        
                    asignacionSemanal += " " + nombre + " " + apellido + " Tarea: " + tarea + "\n";
                    contenido += "<tr><td>" + semana + "</td><td>" + nombre + " " + apellido + "</td>" + "<td>" + tarea + "</td></tr>";  
                }
        
                // console.log(asignacionSemanal);
            }

            tabla = tabla + contenido + "</table>"
            document.getElementById("tabla").innerHTML = tabla;

        } else {

            document.getElementById("titulo").innerHTML = "Reparto de tareas de la familia: " + familia[0].getFamilia() + "\n";

            // console.log("Reparto de tareas de la familia: " + familia[0].getFamilia() + "\n");

            var tabla = "<table><tr><th>Semana</th><th>Persona</th><th>Tarea</th>";
            var contenido = "";

            for (let semana = 1; semana <= duracion; semana++) {

                var asignacionSemanal = "";

                for (let i = 0; i < familia.length; i++) {
                    var persona = familia[i];
                    var nombre = persona.getNombre();
                    var apellido = persona.getApellido();
                    var indiceTarea = (semana + i) % familia.length;
                    var tarea = tareas[indiceTarea];
                    
                    asignacionSemanal += " " + nombre + " " + apellido + " Tarea: " + tarea + "\n";
                    contenido += "<tr><td>" + semana + "</td><td>" + nombre + " " + apellido + "</td>" + "<td>" + tarea + "</td></tr>";  
                }

                // console.log(asignacionSemanal);               
            }
            tabla = tabla + contenido + "</table>"
            document.getElementById("tabla").innerHTML = tabla;

        }
    }