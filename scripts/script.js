<<<<<<< HEAD
function fetchWord() {
  return fetch('https://random-word-api.herokuapp.com/word?number=1')
  .then((response) => response.json())
  .then((response) => processWord(response));
}

function processWord(wordArray) {
  let word = wordArray[0];
  console.log(word);

  function createInputFunction (){
    const buttonsContainer = document.getElementById(`buttons`)
    const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const clickedLetters = []
    const buttonsArray = alphabetArray.map((letter)=>{
        function createButton(place){
            place.innerHTML +=`<span><button type='button'  value='${letter}'> ${letter}</button></span>`
        }
        document.querySelectorAll(`#buttons button`).forEach((buttonss) => {
            buttonss.addEventListener('click', (event) => { 
                clickedLetters.push(event.target.value)
                  })
              })
        

              createButton(buttonsContainer)
    })
    return clickedLetters
}
// the function is not complete as of yet but the buttons are creeated 
createInputFunction()
}

document.addEventListener('DOMContentLoaded', function() {
  fetchWord();
})

//Play again button

let resetButton;
resetButton = document.getElementById("reset");
resetButton.addEventListener("click", gameRestart);
function gameRestart () {
  correct.parentNode.removeChild(correct);
  letters.parentNode.removeChild(letters);
  showClue.innerHTML = "";
  context.clearRect(0, 0, 400, 400);
  play();
}
=======

function fetchWord() {
    return fetch('https://random-word-api.herokuapp.com/word?number=1')
    .then((response) => response.json())
    .then((response) => processWord(response));
}

function processWord(wordArray) {
    let word = wordArray[0];
    console.log(word);
}

document.addEventListener('DOMContentLoaded', function() {
    fetchWord();
})
>>>>>>> d7dd0dae1d5ba6e07e1645d572437600108fbcab
