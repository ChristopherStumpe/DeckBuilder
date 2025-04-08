window.onload = function() {
    const gameContainer = document.getElementById('game-container');

    // Example game: Change background color on click
    gameContainer.addEventListener('click', function() {
        gameContainer.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() { 
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
//Typescript?
//Live updates extension?
//look up classes
//shit from school that cleans up code automatically
// error catcher
// team w paul?
//live save?
//css stuff
//node?