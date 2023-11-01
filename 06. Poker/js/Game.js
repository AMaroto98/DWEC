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
playButton.addEventListener("click", function() {
    openWindow();
    // Apunte personal: Es una función que ejecuta otra función, si pongo play() como segundo parámetro salta automáticamente y no cuando yo clicko en el botón.
});

function play(packOfCards) {

    // Array de las cartas que apareceran en pantalla
    var hand = [];

    // Llamo a todos los métodos para jugar al póker
    dealCards(hand, packOfCards);
    showCards(hand);
    checkCouples(hand);
}


// Método para repartir las cartas
function dealCards(hand, packOfCards) {

    console.log("Longuitud mazo al empezar: " + packOfCards.length);

    for (let i = 1; i <= 5; i++) {

        // Si no hay más indices que repartir se avisa al usuario
        if (packOfCards.length <= 4) {
            let outcome = document.createElement("p");
            let divToInsert = document.getElementById("outcome");
            outcome.innerHTML = "¡Ya no hay más cartas disponibles!";
            divToInsert.innerHTML = "";
            divToInsert.appendChild(outcome);
            break;
        }

        // Se elige un indice random de las 52 cartas
        const randomIndex = Math.floor(Math.random() * packOfCards.length);
        console.log("Indice random: " + randomIndex);

        // Se elige una carta asociada a ese inice
        const randomCard = packOfCards[randomIndex];
        console.log("Carta random: " + randomCard.number + " " + randomCard.cardSuit);

        // Se añade la carta a la mano del usuario
        console.log("Carta añadida a mano: " + randomCard.number + " " + randomCard.cardSuit);
        hand.push(randomCard);

        // Se elimina la carta del mazo
        console.log("Carta eliminada del mazo: " + randomCard.number + " " + randomCard.cardSuit);
        packOfCards.splice(randomIndex, 1);
    }
    console.log("Longuitud mazo al acabar: " + packOfCards.length);
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

function openWindow() {
    const newWindow = window.open("pages/solution.html", "Póker", "width=800,height=300");
    newWindow.onload = function() {
        play(packOfCards);
    }
}