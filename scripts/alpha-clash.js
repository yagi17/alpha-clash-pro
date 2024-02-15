function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    console.log('Player pressed', playerPressed);

    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet)

    // check match or not
    if (playerPressed === expectedAlphabet) {
        console.log('you get a point');
        // update score
        // get the current score 
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        // increase the score by 1
        const newScore = currentScore + 1;

        // show the updated score
        currentScoreElement.innerText = newScore

        // start a new round
        // console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }

    else {
        console.log('you missed. you lost a life');

        // get the current life number
        const currentLifeElement = document.getElementById('current-life')
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        // reduce the life count
        const updatedLife = currentLife - 1;

        // display the updated life count 
        currentLifeElement.innerText = updatedLife;

        if(updatedLife === 0){
            gameOver();
        }
    }
}
// capture keyboard keypress
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    // Step 1: Generate a random alphabet
    const alphabet = getARandomAlphabet();

    // Display the randomly generated alphabet on the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // Set background color
    setBackgroundColorById(alphabet);
}


function play() {
    hiddenElementById('home-screen');
    hiddenElementById('score')
    showElementById('playground');
    continueGame();

}

function gameOver(){
    hiddenElementById('playground')
    showElementById('score')
}
