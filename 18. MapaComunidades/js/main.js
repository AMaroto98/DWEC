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
  var imgElement = document.querySelector(
    '[data-community="' + dataCommunity + '"]'
  );

  // Obtenemos las coordenadas del ratón en relación con el área de destino
  var mouseX = event.clientX - event.target.getBoundingClientRect().left;
  var mouseY = event.clientY - event.target.getBoundingClientRect().top;

  // Obtenemos las coordenadas relativas al área de destino
  var relativeX = mouseX - imgElement.width / 2;
  var relativeY = mouseY - imgElement.height / 2;

  // Establecemos la posición de la imagen en relación con el área de destino
  imgElement.style.position = "absolute";
  imgElement.style.left = relativeX + "px";
  imgElement.style.top = relativeY + "px";

  // Agregamos la imagen al área de destino
  event.target.appendChild(imgElement);
}
