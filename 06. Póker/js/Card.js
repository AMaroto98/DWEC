class Card {

    constructor(number, cardSuit, pathImage) {
        this.number = number;
        this.cardSuit = cardSuit;
        this.pathImage = pathImage;
    }

    
    
}

const suits = ["diamonds", "hearts", "clubs", "spades"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const cards = [];

suits.forEach(suit => {
    numbers.forEach(number => {

        let pathImage; 

        if (number === 1) {

            pathImage = `images/ace_of_${suit}.png`

        } else if(number === 11) {

            pathImage = `images/jack_of_${suit}.png`

        } else if(number === 12) {
            
            pathImage = `images/queen_of_${suit}.png`

        }else if(number === 13) {
            
            pathImage = `images/king_of_${suit}.png`

        } else {
            pathImage = `images/${number}_of_${suit}.png`

        }
        cards.push(new Card(number, suit, pathImage));
    });
    
});

console.log(cards);

export default Card;