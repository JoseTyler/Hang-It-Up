function intro() {
    location.replace("../pages/intro.html")
    gameLogic.start()
}
//     // if letterCicked = a letter in answer then disappear 
//     // else take away a life


letterBeingChecked = (letterClicked) => {
   letterClicked+letterClicked
    // document.getElementById(letterClicked).style.color =  "rgba(0, 0, 0, 0)"
    // var boxName = 
    $(`.${letterClicked+letterClicked}`).addClass("hide")
    let wereAnyLettersThere = 0
    for (let i = 0; i < domArr.length; i++) {

        if (domArr[i].name === letterClicked) {
            $(`.${letterClicked}`).removeClass('red')
            console.log("equal")
            wereAnyLettersThere += 1
            // ADD A HIDE TO CLICKED LETTER!!
        }

    }
    if (wereAnyLettersThere > 0) {
        gameLogic.totalLettersRight += wereAnyLettersThere
    }
    else if (wereAnyLettersThere === 0) {
        
        gameLogic.userLives -= 1
        console.log(gameLogic.userLives)
        document.getElementById('points').innerHTML = gameLogic.userLives

    }
    if (gameLogic.totalLettersRight === 12) {
        document.getElementById('points').innerHTML = "You Win!"

    }
    if(gameLogic.userLives >= 6){
        console.log("starting")
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

domArr = []
let build = (i, alpha) => {
    words = []
    qArea = document.getElementById('Question')
    console.log(i)
    qArea.innerHTML = i.question

    aArea = document.getElementById('Answer')

    words = i.answer.split(" ")

    words.map((word, i) => {
        letters = word.split('')

        $(`<div class='Word${i}' style='display:grid'></div>`).appendTo('#Answer')
        // wordMaker.addClass('test')
        currentWord = document.createElement("div")

        letters.map((letter, a) => {
            letter = letter.toLowerCase()
            console.log("in letters function")
            $(`<input class='${letter} red' style='grid-column:${a + 1}' placeholder='${letter}' value='${letter}'>`).appendTo(`.Word${i}`)
            domArr.push({ name: `${letter}` })
        })
    })

}
let gameLogic = {
    alpha: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    inPlayAplha: [],
    totalLettersRight: 0,
    answerArray: [],
    userLives: 6,
    phrase: [{ question: "What does everybody have in common?", answer: "They all float" }],
    pInPlay: {},

    start: () => {
        this.userLives = 6
        this.pInPlay = gameLogic.phrase[0]
        this.inPlayAplha = gameLogic.alpha
        // take out the alphabet builder?? 
        build(pInPlay, inPlayAplha)
    },

}
// let gameFunction = {
//     answerArray = gameLogic.
// }


let gameFunc = {
    answerArray: [],
    ansArr: () => {
        this.answerArray = gameLogic.pInPlay.answer.split(' ')
    }

}

gameLogic.start()
// console.log(domArr)







