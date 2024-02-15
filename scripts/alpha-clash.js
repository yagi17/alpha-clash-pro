// function play(){

//     // hide the home screen. to hide the screen add the class to the home section
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList)

//     // show the playground 
//     const playgroundSection = document.getElementById('playground')
//     playgroundSection.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    console.log('Player pressed', playerPressed);

    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet)

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
        console.log('you have pressed correctly', expectedAlphabet);
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
        const newLife = currentLife - 1;

        // display the updated life count 
        currentLifeElement.innerText = newLife;
    }
}
// capture keyboard keypress
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    // step 1: genarate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log(alphabet);

    // randomly generated alphabet to screen

    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    hiddenElementById('home-screen');
    showElementById('playground');
    continueGame();

}
