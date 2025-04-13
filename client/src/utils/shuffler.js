// import { cardLibrary } from "../data/cards";
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
export { cardShuffler };