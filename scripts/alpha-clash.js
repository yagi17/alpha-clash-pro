// function play(){
//     // hide the home screen. to hide the screen add the class to the home section
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList)

//     // show the playground 
//     const playgroundSection = document.getElementById('playground')
//     playgroundSection.classList.remove('hidden')
// }
function continueGame(){
    // step 1: genarate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    // randomly generated alphabet to screen

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    hiddenElementById('home-screen');
    showElementById('playground');
    continueGame();
    
}
