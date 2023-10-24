import Persona from './Persona.js';

    // Familia Sastre

    var padre = new Persona("Pedro", "Jimenez", "Sastre", "Padre");
    var madre = new Persona("Ana", "Garcia", "Sastre", "Madre");
    var hijo = new Persona("Juan", "Jimenez", "Sastre", "Hijo");
    var hija = new Persona("Nuria", "Jimenez", "Sastre", "Hija");

    var familiaSastre = [];
    var tareasFamiliaSastre = ["Poner lavadora", "Limpiar cocina", "Limpiar baño"];

    familiaSastre.push(padre);
    familiaSastre.push(madre);
    familiaSastre.push(hijo);
    familiaSastre.push(hija);




    // function crearReparto(familia, tareas, duracion) {

    //     for (let semana = 1; semana <= duracion; semana++) {

    //         var asignacionSemanal = "";

    //         for (let i = 0; i < familia.length; i++) {
    //             var persona = familia[i];
    //             var nombre = persona.getNombre();
    //             var apellido = persona.getApellido();
    //             var indiceTarea = (semana + i) % familia.length;
    //             var tarea = tareas[indiceTarea];
    //             asignacionSemanal += " " + nombre + " " + apellido + " Tarea: " + tarea;
    //         }

    //         console.log(asignacionSemanal);
                        
    //     }

    // }

    // crearReparto(familiaSastre, tareasFamiliaSastre, 52);



    function crearReparto(familia, tareas, duracion) {

        for (let semana = 1; semana <= duracion; semana++) {

            var asignacionSemanal = "";

            for (let i = 0; i < tareas.length; i++) {
                var tarea = tareas[i];
                var indiceFamiliar = (semana + i) % tareas.length;
                var familiar = familia[indiceFamiliar];
                asignacionSemanal += " " + familiar.getNombre() + " " + familiar.getApellido() + " Tarea: " + tarea;
            }

            console.log(asignacionSemanal);
                        
        }

    }

    crearReparto(familiaSastre, tareasFamiliaSastre, 52);


