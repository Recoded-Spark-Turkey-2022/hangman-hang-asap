function fetchWord() {
    return fetch('https://random-word-api.herokuapp.com/word?number=1')
    .then((response) => response.json())
    .then((response) => processWord(response));
}

function processWord(wordArray) {
    let word = wordArray[0];
    console.log(word)
}


document.addEventListener('DOMContentLoaded', function() {
    fetchWord();
})


// The function will do 2 things
//Create button for all letters
//Clicked letters will be added to an array

function createInputFunction (){
    //The first 2 lines create an array for all alphabet and grab element from html 
    const buttonsContainer = document.getElementById(`buttons`)
    const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
    

    //The following 5 lines create a button for each letter using innerHtml and .map, with the it being places inside the #div
    alphabetArray.map((letter)=>{
        function createButton(place){
            place.innerHTML +=`<button type='button'  value='${letter}'> ${letter}</button>`
        }
        createButton(buttonsContainer)     
    })

    // This section of the code is for when you click a button that button will be added to an empty array, see changes using console
    const clickedLetters = []
    const singleButton = document.querySelectorAll(`#buttons button`)
    singleButton.forEach((button) => {
        button.addEventListener('click', () => { 
             clickedLetters.push(button.value)
             console.log(clickedLetters)
             return clickedLetters
              })
          })
    console.log(clickedLetters)
    return clickedLetters
}
createInputFunction()

function createBlank(word){
    console.log(`psladsfsdfsd ${word}`)
    const wordLetterArray = word.split('')
    const blanks = document.getElementById(`blanks`)

    wordLetterArray.forEach((letter)=>{
        function createInput(place,pHolder){
            place.innerHTML +=`<span><input class= 'blank' type='text' name='type' value='' placeholder=${pHolder} readonly> </span>`     
        }
        createInput(blanks,letter)
    })
}
createBlank("BrunoMars")
