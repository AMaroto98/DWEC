import Card from "./Card.js";

var suits = ["diamonds", "hearts", "clubs", "spades"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var packOfCards = [];

suits.forEach(suit => {
    numbers.forEach(number => {

        let pathImage; 

        if (number === 1) {

            pathImage = `images/ace_of_${suit}.png`

        } else if(number === 11) {

            pathImage = `images/jack_of_${suit}2.png`

        } else if(number === 12) {
            
            pathImage = `images/queen_of_${suit}2.png`

        }else if(number === 13) {
            
            pathImage = `images/king_of_${suit}2.png`

        } else {
            pathImage = `images/${number}_of_${suit}.png`

        }
        packOfCards.push(new Card(number, suit, pathImage));
    }); 
});

console.log(packOfCards);

// Evento que se ejecuta cuando clickas en Play!
const playButton = document.getElementById("Play");
playButton.addEventListener("click", function () {
    play(packOfCards)
    // Apunte personal: Es una función que ejecuta otra función, si pongo play() como segundo parámetro salta automáticamente y no cuando yo clicko en el botón.
});

function play(packOfCards) {

    // Array de las cartas que apareceran en pantalla
    var hand = [];

    // Llamo a todos los métodos para jugar al póker
    dealCards(hand, packOfCards);
    showCards(hand);
    checkCombinations(hand);
}


// Método para repartir las cartas
function dealCards(hand, packOfCards) {

    const availableIndices = [];

    // Inicializamos availableIndices con todos los índices posibles
    for (let i = 0; i < packOfCards.length; i++) {
        availableIndices.push(i);
    }

    console.log("Primeros indices disponibles: " + availableIndices);
    for (let i = 1; i <= 5; i++) {

        if (availableIndices.length === 0) {
            // Si no hay más indices que repartir se sale.
            // No se dará el caso nunca con este ejercicio.
            break;
        }

        // Selecciona un índice aleatorio de los índices disponibles
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        console.log("indice random: " + randomIndex);

        const selectedIndex = availableIndices.splice(randomIndex, 1);
        console.log("indice a eliminar: " + selectedIndex);

        // Agrega la carta correspondiente al índice seleccionado a la mano
        const randomCard = packOfCards[selectedIndex];
        hand.push(randomCard);
        console.log("Indices al final del bucle número " + i + ": " + availableIndices);
    }
    console.log(hand);
}


// Método para mostrar las cartas por pantalla
function showCards(hand) {

    // Recorro la array de las cartas seleccionadas aleatoriamente
    for (let i = 0; i <= 4; i++) {

        // Creo un elemento img y setteo las propiedades para que salgan las cartas
        let cardToShow = document.createElement("img");
        cardToShow.src = hand[i].pathImage;
        cardToShow.alt = hand[i].number + " " + hand[i].cardSuit;
        cardToShow.width = "50";
        cardToShow.height = "80";
        // console.log(cardToShow);
        // Selecciono divs del HTML para poder insertar las imagenes
        let divToInsert = document.getElementById("showCard" + i);
        // Limpio las cartas previas para que no se acumulen 
        divToInsert.innerHTML = "";
        // Añado las cartas dentro del div
        divToInsert.appendChild(cardToShow);
    }
    // Apunte personal: No funciona insertar elementos dentro de divs con innerHTML, hay que seleccionar el contenedor y hacer un appendChild, si quiero usar un innerHTML lo que deberia insertar es código HTML tal cual y no elementos creados previos como lo de arriba
}

// Función que comprueba todas las posibles combinaciones de cartas
function checkCombinations(hand) {
    checkCouples(hand);
    checkThreesome(hand);
}

// Función para comprobar todas las posibles parejas de la mano de cartas
function checkCouples(hand) {

    const couples = [];

    // Bucle para comparar cada una de las cartas de la mano con su posterior, si coinciden es que hay pareja y se añade a la array de parejas
    for (let i = 0; i < hand.length; i++) {
        for (let j = i + 1; j < hand.length; j++) {
            if (hand[i].number === hand[j].number) {
                couples.push([hand[i], hand[j]]);
            }
        }
        console.log(couples);
    }

    // Inicializo variabes para poder insertar resultado en el HTML
    let outcome = document.createElement("p");
    let divToInsert = document.getElementById("outcome");

    // Compruebo la longuitud de las parejas e inserto el resultado en el DIV
    if (couples.length === 1) {
        outcome.innerHTML = "¡Has conseguido una pareja!"
    } else if (couples.length === 2) {
        outcome.innerHTML = "¡Has conseguido una pareja doble!"
    }
    
    // Dejo el DIV vacio por si vuelve a salir otra pareja no se stacke el resultado
    divToInsert.innerHTML = "";
    divToInsert.appendChild(outcome);
}


function checkThreesome(hand) {
    const resultado = {};

    // Recorremos la mano para contar las cartas
    for (let i = 0; i < hand.length; i++) {
        const currentCard = hand[i];

        // Comprobamos si ya hemos encontrado esta carta en la mano
        if (resultado[currentCard.number]) {
            // Si ya existe incrementamos su conteo
            resultado[currentCard.number]++;
        } else {
            // Si no existe la inicializamos a 1
            resultado[currentCard.number] = 1;
        }
    }

    let trio = 0;
    let outcome = document.createElement("p");
    // Recorremos el objeto resultado para encontrar tríos
    for (const number in resultado) {
        if (resultado[number] >= 3) {
            trio++;
            outcome.innerHTML = "¡Has coseguido un trio!"
            let divToInsert = document.getElementById("outcome");
            divToInsert.innerHTML = "";
            divToInsert.appendChild(outcome);
        }
    }
    console.log("Trío: " + trio);
}

