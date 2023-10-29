class Card {

    constructor(number, cardSuit, pathImage) {
        this.number = number;
        this.cardSuit = cardSuit;
        this.pathImage = pathImage;
    }

    getNumber() {
        return this.number;
    }

    setNumber(number) {
        this.number = number;
    }

    getCardSuit() {
        return this.cardSuit;
    }

    setCardSuit(CardSuit) {
        this.cardSuit = CardSuit;
    }

    getPathImage() {
        return this.pathImage;
    }

    setPathImage(PathImage) {
        this.pathImage = PathImage;
    }
}

export default Card;