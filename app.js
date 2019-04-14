function intro() {
    location.replace("../pages/intro.html")
    gameLogic.start()
}
    //     // if letterCicked = a letter in answer then disappear 
    //     // else take away a life


letterBeingChecked = (letterClicked ) => {
    console.log("clicked")
    console.log(letterClicked)

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
            $(`<input class='${letter}'style='grid-column:${a + 1}' placeholder='${letter}' value='${letter}'>`).appendTo(`.Word${i}`)
            domArr.push({ name: `${letter}` })
        })



    })



}
let gameLogic = {
    alpha: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    inPlayAplha: [],
    answerArray: [],
    userLives: 6,
    phrase: [{ question: "What does everybody have in common?", answer: "They all float" }],
    pInPlay: {},

    start: () => {
        this.userLives = 6
        this.pInPlay = gameLogic.phrase[0]
        this.inPlayAplha = gameLogic.alpha
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
console.log(domArr)







