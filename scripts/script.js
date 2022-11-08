
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