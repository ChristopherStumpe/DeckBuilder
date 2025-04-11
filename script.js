// import { cardLibrary } from "./src/data/cards";
// import { cardShuffler } from "./src/utils/shuffler"
window.onload = function() {
    // const gameContainer = document.getElementById('game-container');
    const leftCard = document.getElementById('left-card');
    const rightCard = document.getElementById('right-card');
    const centerCard = document.getElementById('center-card');

    // Example game: Change background color on click
    // gameContainer.addEventListener('click', function() {
    //     gameContainer.style.backgroundColor = getRandomColor();
    // });
    
    leftCard.addEventListener('click', function() {
        leftCard.textContent = 'you clicked me';
    });
    centerCard.addEventListener('click', function() {
        centerCard.textContent = 'you clicked me'
    })
    rightCard.addEventListener('click', function() {
        rightCard.textContent = 'you clicked me'
        
    })

    // function getRandomColor() { 
    //     const letters = '0123456789ABCDEF';
    //     let color = '#';
    //     for (let i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }
    // move this once working
    // class Card {
    //     constructor(name) {
    //         this.name = name;
    //     }
    
    //     testConsole() {
    //         console.log(`This Card's name is ${this.name}`);
    //     }
    // }

    //test section
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
    cardLibrary.test1 = new Card("test1")
    cardLibrary.test2 = new Card("test2")
    
    function cardShuffler (deck) {
        //take card library and output mixed order. array? but only put in correct ones. will need to limit by various things at times.
        //can expand when necessary
        //just need three?
        const libraryArray = Object.keys(deck);
        for (let i = libraryArray.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [libraryArray[i], libraryArray[j]] = [libraryArray[j], libraryArray[i]]
        }
        console.log(libraryArray)
        return libraryArray;
    }

    //end test section
    
    const quinton = new Card("Quintons Card");
    leftCard.textContent = quinton.name
    
    // quinton.testConsole(); 
    cardShuffler(cardLibrary)
}
//make new card button
//make swap views button
//make swap cards button?


//Typescript?
//Live updates extension?
//look up classes
//shit from school that cleans up code automatically
// error catcher
// team w paul?
//test
//css stuff
//node? not for now, use in browser for now
//refresh on async functions
//try to run in browser and if it bogs switch to node
// look into web workers to lighten memory
//checks before pushing/committing
//build tests
