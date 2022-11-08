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