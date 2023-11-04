// Creo constantes con los botones de Index.html para añadirles un Listener y que ejecuten las funciones cuando se haga click sobre ellos
const playButton = document.getElementById("Play");
playButton.addEventListener("click", function() {
    openWindow();
    // Apunte personal: Es una función que ejecuta otra función, si pongo play() (por ejemplo) como segundo parámetro salta automáticamente y no cuando yo clicko en el botón.
});

const closeWindowButton = document.getElementById("closeWindow");
closeWindowButton.addEventListener('click', function() {
    closeWindow();
});

const closeAllButton = document.getElementById("closeAll");
closeAllButton.addEventListener('click',function(){
    closeAllWindow();
});

// Variable para la nueva pestaña que se abrirá.
var newWindow;

function openWindow() {
    // Setteo newWindow con la ruta y los datos que debe utilizar.
    newWindow = window.open("pages/solution.html", "Póker", "width=800,height=300");
}

// Funciones para cerrar la nueva ventana y cerrar todas las ventanas.
function closeWindow() {
    // Undefined == false así que no entra al if, si no existe la ventana no saltará el error
    if (newWindow) {
        newWindow.close();
    }
}

function closeAllWindow() {
    if (newWindow && window) {
        newWindow.close();
        window.close();
    }
}