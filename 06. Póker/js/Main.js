import Card from "./Card.js";

var packOfCards = [];

// Instancio cartas
var twoOfDiamonds = new Card(2, "Diamonds", "images/2_of_diamonds.png");
var threeOfDiamonds = new Card(3, "Diamonds", "images/3_of_diamonds.png");
var fourOfDiamonds = new Card(4, "Diamonds", "images/4_of_diamonds.png");
var fiveOfDiamonds = new Card(5, "Diamonds", "images/5_of_diamonds.png");
var sixOfDiamonds = new Card(6, "Diamonds", "images/6_of_diamonds.png");
var sevenOfDiamonds = new Card(7, "Diamonds", "images/7_of_diamonds.png");
var eightOfDiamonds = new Card(8, "Diamonds", "images/8_of_diamonds.png");
var nineOfDiamonds = new Card(9, "Diamonds", "images/9_of_diamonds.png");
var tenOfDiamonds = new Card(10, "Diamonds", "images/10_of_diamonds.png");
var jackOfDiamonds = new Card("Jack", "Diamonds", "images/jack_of_diamonds2.png");
var queenOfDiamonds = new Card("Queen", "Diamonds", "images/queen_of_diamonds2.png");
var kingOfDiamonds = new Card("King", "Diamonds", "images/king_of_diamonds2.png");
var aceOfDiamonds = new Card("Ace", "Diamonds", "images/ace_of_diamonds.png");

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
    aceOfDiamonds
);

console.log(packOfCards);

function play(packOfCards) {

    // Array de las cartas que apareceran en pantalla
    var hand = [];

    // Llamo a todos los métodos para jugar al póker
    dealCards(hand, packOfCards);
    showCards(hand);
}


// Método para repartir las cartas
function dealCards(hand, packOfCards) {

    const availableIndices = [];
    
    // Inicializamos availableIndices con todos los índices posibles
    for (let i = 0; i < packOfCards.length; i++) {
        availableIndices.push(i);
    }
    
    console.log(availableIndices);
    for (let i = 1; i <= 5; i++) {
        if (availableIndices.length === 0) {
            break; // No hay más cartas para repartir
        }
        
        // Selecciona un índice aleatorio de los índices disponibles
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        console.log("indice random: " + randomIndex);
        const selectedIndex = availableIndices.splice(randomIndex, 1)[0];
        console.log("indice a eliminar: " + selectedIndex);
        
        // Agrega la carta correspondiente al índice seleccionado a la mano
        const randomCard = packOfCards[selectedIndex];
        hand.push(randomCard);
        console.log("Indices disponibles: " + availableIndices);
    }
    console.log(hand);
}



// Método para mostrar las cartas por pantalla
function showCards(hand) {

    // Recorro la array de las cartas seleccionadas aleatoriamente
    for (let i = 0; i <= 4; i++) {

        // Creo un elemento img y setteo las propiedades para que salgan las cartas
        let cardToShow = document.createElement("img");
        cardToShow.src = hand[i].getPathImage();
        cardToShow.alt = hand[i].getNumber() + " " + hand[i].getCardSuit();
        cardToShow.width = "50";
        cardToShow.height = "80";
        console.log(cardToShow);
        // Selecciono divs del HTML para poder insertar las imagenes
        let divToInsert = document.getElementById("showCard" + i);
        // Limpio las cartas previas para que no se acumulen 
        divToInsert.innerHTML = "";
        // Añado las cartas dentro del div
        divToInsert.appendChild(cardToShow);
    }
    // Apunte personal: No funciona insertar elementos dentro de divs con innerHTML, hay que seleccionar el contenedor y hacer un appendChild, si quiero usar un innerHTML lo que deberia insertar es código HTML tal cual y no elementos creados previos como lo de arriba
}

// Evento que se ejecuta cuando clickas en Play!
const playButton = document.getElementById("Play");
playButton.addEventListener("click",function() {
    play(packOfCards)
    // Apunte personal: Es una función que ejecuta otra función, si pongo play() como segundo parámetro salta automáticamente y no cuando yo clicko en el botón.
});































// const showImageButton = document.getElementById("Play");
// const myImage = document.getElementById("showCard");

// showImageButton.addEventListener("click", () => {
//     myImage.style.display = "block";
//  });
