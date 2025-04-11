// import {Card} from '/src/components/cardConstructor.js'
class Card {
    constructor(name, type, rarity, description) {
        this.name = name;
        this.type
        //type should be either starter, common, uncommon, or rare
        this.rarity
        this.description
        this.logic
        this.image
        //build require error throws on cards
    }
}
const cardLibrary = {}
cardLibrary.attack = new Card("Basic Attack", "attack", "starter", "Starting Attack. Boring");
cardLibrary.defense = new Card("Basic Defense", "defense", "starter", "Starting Defense. Basic");

export {cardLibrary}
