let map, infoWindow;
let locations = [];
let markers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.4165, lng: -3.70256 },
    zoom: 6,
  });

  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          new google.maps.Circle({
            strokeColor: "#FFFF00",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FFFF00",
            fillOpacity: 0.35,
            map,
            center: pos,
            radius: Math.sqrt(position.coords.accuracy) * 100,
          });

          saveLocation(locations, pos);
          printLocations();

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

// Función para guardar la localización actual en mi array de localizaciones
function saveLocation(locations, pos) {
  locations.push(pos);
  // Si lo length de localizaciones es mayor a 5 quitamos el primer elemento de la array con el shift
  if (locations.length > 5) {
    locations.shift();
  }
  // Guardo en el Local Storage la array de localizaciones
  localStorage.setItem("locations", JSON.stringify(locations));
}

// Función para pintar las localizaciones guardadas en el local storage
function printLocations() {
  // Recuperamos del Local Storage la array con las localizaciones
  const recoverLocations = JSON.parse(localStorage.getItem("locations"));
  // console.log(recoverLocations);

  // Elimino del mapa los posibles marcadores que pueda haber
  markers.forEach((marker) => {
    marker.setMap(null);
  });

  // Elimino de la array markers tambien los marcadores generados anteriormente, si es la primera vez pues ya de por si está vacia
  markers = [];

  /*
  ¿Por qué se vacia la array de markers siempre?

  Es debido a que si no se vacia no se van a pintar sólo 5 marcadores, si no todos los que haya en la array, por lo que siempre que se ejecute la función printLocations se van
  a generar un nuevo  marcador para cada localización guardada en el Local Storage.

  Básicamente cuando se ejecuta esta función se borra todo y se vuele a pintar pero al hacerlo tan rápido el ojo humano no puede verlo.
  */

  // Recorro la array recuperada del Local Storage
  recoverLocations.forEach((location) => {
    // Guardo en pos la latitud y la longuitud para poder usarla en el marcador
    const pos = {
      lat: location.lat,
      lng: location.lng,
    };

    // Genero un marcador y en sus propiedades establezco la position, map y el title
    const marker = new google.maps.Marker({
      position: pos,
      icon: "/images/icono.png",
      map: map,
      title: "Saved Location",
    });

    // Añado el marcador a la array de markers
    markers.push(marker);

    // Pinto los últimos 5 markers mediante el setMap
    const lastFiveMarkers = markers.slice(-5);
    lastFiveMarkers.forEach((marker) => {
      marker.setMap(map);
    });

    // Añado información al clickar sobre la ubicación
    marker.addListener("click", () => {
      infoWindow.setPosition(pos);
      infoWindow.setContent("Hola");
      infoWindow.open(map, marker);
    });
  });
}

window.initMap = initMap;
