import Card from "./Card.js";

var packOfCards = [];

// Instancio cartas de Diamantes
var twoOfDiamonds = new Card(2, "Diamonds", "images/2_of_diamonds.png");
var threeOfDiamonds = new Card(3, "Diamonds", "images/3_of_diamonds.png");
var fourOfDiamonds = new Card(4, "Diamonds", "images/4_of_diamonds.png");
var fiveOfDiamonds = new Card(5, "Diamonds", "images/5_of_diamonds.png");
var sixOfDiamonds = new Card(6, "Diamonds", "images/6_of_diamonds.png");
var sevenOfDiamonds = new Card(7, "Diamonds", "images/7_of_diamonds.png");
var eightOfDiamonds = new Card(8, "Diamonds", "images/8_of_diamonds.png");
var nineOfDiamonds = new Card(9, "Diamonds", "images/9_of_diamonds.png");
var tenOfDiamonds = new Card(10, "Diamonds", "images/10_of_diamonds.png");
var jackOfDiamonds = new Card(11, "Diamonds", "images/jack_of_diamonds2.png");
var queenOfDiamonds = new Card(12, "Diamonds", "images/queen_of_diamonds2.png");
var kingOfDiamonds = new Card(13, "Diamonds", "images/king_of_diamonds2.png");
var aceOfDiamonds = new Card(1, "Diamonds", "images/ace_of_diamonds.png");

// COpia
// var twoOfDiamonds = new Card(2, "Diamonds", "images/2_of_diamonds.png");
// var threeOfDiamonds = new Card(3, "Diamonds", "images/3_of_diamonds.png");
// var fourOfDiamonds = new Card(4, "Diamonds", "images/4_of_diamonds.png");
// var fiveOfDiamonds = new Card(5, "Diamonds", "images/5_of_diamonds.png");
// var sixOfDiamonds = new Card(6, "Diamonds", "images/6_of_diamonds.png");
// var sevenOfDiamonds = new Card(7, "Diamonds", "images/7_of_diamonds.png");
// var eightOfDiamonds = new Card(8, "Diamonds", "images/8_of_diamonds.png");
// var nineOfDiamonds = new Card(9, "Diamonds", "images/9_of_diamonds.png");
// var tenOfDiamonds = new Card(10, "Diamonds", "images/10_of_diamonds.png");
// var jackOfDiamonds = new Card(11, "Diamonds", "images/jack_of_diamonds2.png");
// var queenOfDiamonds = new Card(12, "Diamonds", "images/queen_of_diamonds2.png");
// var kingOfDiamonds = new Card(13, "Diamonds", "images/king_of_diamonds2.png");
// var aceOfDiamonds = new Card(1, "Diamonds", "images/ace_of_diamonds.png");

// Jack ---> 11
// Queen --> 12
// King --> 13
// Ace --> 1 / 14

// Instancio cartas de Corazones
var twoOfHearts = new Card(2, "Hearts", "images/2_of_hearts.png");
var threeOfHearts = new Card(3, "Hearts", "images/3_of_hearts.png");
var fourOfHearts = new Card(4, "Hearts", "images/4_of_hearts.png");
var fiveOfHearts = new Card(5, "Hearts", "images/5_of_hearts.png");
var sixOfHearts = new Card(6, "Hearts", "images/6_of_hearts.png");
var sevenOfHearts = new Card(7, "Hearts", "images/7_of_hearts.png");
var eightOfHearts = new Card(8, "Hearts", "images/8_of_hearts.png");
var nineOfHearts = new Card(9, "Hearts", "images/9_of_hearts.png");
var tenOfHearts = new Card(10, "Hearts", "images/10_of_hearts.png");
var jackOfHearts = new Card(11, "Hearts", "images/jack_of_hearts2.png");
var queenOfHearts = new Card(12, "Hearts", "images/queen_of_hearts2.png");
var kingOfHearts = new Card(13, "Hearts", "images/king_of_hearts2.png");
var aceOfHearts = new Card(1, "Hearts", "images/ace_of_hearts.png");

// Instancio cartas de espadas
var twoOfSpades = new Card(2, "Spades", "images/2_of_spades.png");
var threeOfSpades = new Card(3, "Spades", "images/3_of_spades.png");
var fourOfSpades = new Card(4, "Spades", "images/4_of_spades.png");
var fiveOfSpades = new Card(5, "Spades", "images/5_of_spades.png");
var sixOfSpades = new Card(6, "Spades", "images/6_of_spades.png");
var sevenOfSpades = new Card(7, "Spades", "images/7_of_spades.png");
var eightOfSpades = new Card(8, "Spades", "images/8_of_spades.png");
var nineOfSpades = new Card(9, "Spades", "images/9_of_spades.png");
var tenOfSpades = new Card(10, "Spades", "images/10_of_spades.png");
var jackOfSpades = new Card(11, "Spades", "images/jack_of_spades2.png");
var queenOfSpades = new Card(12, "Spades", "images/queen_of_spades2.png");
var kingOfSpades = new Card(13, "Spades", "images/king_of_spades2.png");
var aceOfSpades = new Card(1, "Spades", "images/ace_of_spades.png");


packOfCards.push(
    twoOfDiamonds,
    threeOfDiamonds,
    fourOfDiamonds,
    fiveOfDiamonds,
    sixOfDiamonds,
    sevenOfDiamonds,
    eightOfDiamonds,
    nineOfDiamonds,
    tenOfDiamonds,
    jackOfDiamonds,
    queenOfDiamonds,
    kingOfDiamonds,
    aceOfDiamonds,
    twoOfHearts,
    threeOfHearts,
    fourOfHearts,
    fiveOfHearts,
    sixOfHearts,
    sevenOfHearts,
    eightOfHearts,
    nineOfHearts,
    tenOfHearts,
    jackOfHearts,
    queenOfHearts,
    kingOfHearts,
    aceOfHearts,
    twoOfSpades,
    threeOfSpades,
    fourOfSpades,
    fiveOfSpades,
    sixOfSpades,
    sevenOfSpades,
    eightOfSpades,
    nineOfSpades,
    tenOfSpades,
    jackOfSpades,
    queenOfSpades,
    kingOfSpades,
    aceOfSpades
);



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

