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

    function getRandomColor() { 
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    // move this once working
    class Card {
        constructor(name) {
            this.name = name;
        }
    
        testConsole() {
            console.log(`This Card's name is ${this.name}`);
        }
    }
    
    const quinton = new Card("Quintons Card");
    leftCard.textContent = quinton.name
    
    quinton.testConsole(); 
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
//live save?
//css stuff
//node? not for now, use in browser for now
//refresh on async functions
//try to run in browser and if it bogs switch to node
// look into web workers to lighten memory
//checks before pushing/committing
//build tests
