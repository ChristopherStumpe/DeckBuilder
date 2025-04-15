/**
 * Builds a Card.
 * @param {string} name - The name of the card.
 * @param {string} type - The type of card; attack, skill, power.
 * @param {string} rarity - The rarity of card; starter, common, uncommon, rare.
 * @param {string} description - Card text.
 * @param {function} logic - make the card work
 * @param {} image - image, dunno what format yet
 */
class Card {
    constructor(name, type, rarity, description, logic, image) {
        //add try catch to build?
        //make it only accept like, attack/skill/power for example
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
//change names?
function barricadeLogic() {}
cardLibrary.attack = new Card("Basic Attack", "attack", "starter", "Starting Attack. Boring");
cardLibrary.defense = new Card("Basic Defense", "skill", "starter", "Starting Defense. Basic");
cardLibrary.barricade = new Card("Barricade", "power", "rare", "Block persists between turns", barricadeLogic, 'imagefiller')

export {cardLibrary}