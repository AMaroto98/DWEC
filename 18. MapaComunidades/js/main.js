function drag(event) {
  // Se obtiene el valor del campo data-community
  var dataCommunity = event.target.dataset.community;

  // "Guardamos" la información del evento indicado que el atributo dataCommunity es de tipo texto
  event.dataTransfer.setData("text/plan", dataCommunity);
}

function allowDrop(event) {
  event.preventDefault();
}

// Función que se ejecuta cuando se suelta un objeto sobre un área que tiene habiitada la operación de soltar
function drop(event) {

  // Esta línea es para evitar comportamientos indeseados del navegador.
  event.preventDefault();

  // Recuperamos la información guardada anteriormente, que es el valor del atributo dataCommunity
  var dataCommunity = event.dataTransfer.getData("text/plan");

  // Guardamos en imgElement la referencia a la imagen que está siendo movida
  var imgElement = document.querySelector('[data-community="' + dataCommunity + '"]');

  // Comparamos que el data-community coincida tanto en el elemento arrastrado como en el objetivo
  if (imgElement.dataset.community === event.target.dataset.community) {
    
    var coords = event.target.coords.split(',');

    imgElement.style.position = 'absolute';
    imgElement.style.left = coords[0] + 'px';
    imgElement.style.top = coords[1] + 'px';

    // Agregar la imagen al área de destino
    event.target.appendChild(imgElement);
}
}
