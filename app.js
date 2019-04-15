//Restarts game refresh takes away all the divs in answer
function refreshPage(){
    document.location.reload(true)
}
// Opens Intro page when balloon is clicked
function intro() {
    location.replace("../pages/intro.html") 
}

// Enables click to skip intro and opens the Hangman page
function startBstart() {
    gameLogic.start()
}

// Holds all starter logic and the start function
let gameLogic = {
    alpha: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    inPlayAlpha: [],
    totalLettersRight: 0,
    answerArray: [],
    userLives: 6,
    phrase: [{ question: "What does everybody have in common?", answer: "They all float" }],
    pInPlay: {},
    
    start: () => {
        this.userLives = 6
        this.pInPlay = gameLogic.phrase[0]
        this.inPlayAlpha = gameLogic.alpha
        build(pInPlay, inPlayAlpha)
    }
}

// Building questions and answers for players to guess
let domArr = []
let build = (i, alpha) => {
    
    words = []
    qArea = document.getElementById('Question')
    
    qArea.innerHTML = i.question
    aArea = document.getElementById('Answer')
    words = i.answer.split(" ")
    words.map((word, i) => {
        letters = word.split('')
        $(`<div class='Word${i}' style='display:grid'></div>`).appendTo('#Answer')
        currentWord = document.createElement("div")
        letters.map((letter, a) => {
            letter = letter.toLowerCase()
            $(`<input class='${letter} red' style='grid-column:${a + 1}' placeholder='${letter}' value='${letter}'>`).appendTo(`.Word${i}`)
            domArr.push({ name: `${letter}` })
        })
    })
}

// Logic to check when players click on letters
// "hide" = turns letters black when clicked
// for loop runs through the answer and reveals if a letter matches with the letter clicked
letterBeingChecked = (letterClicked) => {
    $(`.${letterClicked + letterClicked}`).addClass("hide")
    let wereAnyLettersThere = 0
    for (let i = 0; i < domArr.length; i++) {
        if (domArr[i].name === letterClicked) {
            $(`.${letterClicked}`).removeClass('red')
            wereAnyLettersThere += 1
        }
    }

// Checks to see how many letters were right when player clicked
// If some letters were right, add to counter to see if they win, if not, take a life and update hangman picture
    if (wereAnyLettersThere > 0) {
        gameLogic.totalLettersRight += wereAnyLettersThere
    }
    else if (wereAnyLettersThere === 0) {

        gameLogic.userLives -= 1
        document.getElementById('points').innerHTML = gameLogic.userLives
    }
    if (gameLogic.totalLettersRight === 12) {
        document.getElementById('points').innerHTML = "You Win!"

    }

//Keeps track of lives and updates hangman picture whenever a life is lost
    if (gameLogic.userLives >= 6) { 

    }

    else if (gameLogic.userLives === 5) {
        $(".HangMan").addClass("five")
    }

    else if (gameLogic.userLives === 4) {
        $(".HangMan").addClass("four")
    }

    else if (gameLogic.userLives === 3) {
        $(".HangMan").addClass("three")
    }

    else if (gameLogic.userLives === 2) {
        $(".HangMan").addClass("two")
    }

    else if (gameLogic.userLives === 1) {
        $(".HangMan").addClass("one")
    }

    else {
        $(".HangMan").addClass("zero")
        document.getElementById('points').innerHTML = "You Lose!"
    }
}