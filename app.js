function intro() {
    location.replace("../pages/intro.html")
    gameLogic.start()
}

let build = (i) => {
    qArea = document.getElementById('Question')
    console.log(i)
    qArea.innerHTML = i.question

    aArea = document.getElementById('Answer')
    aArea.innerHTML = i.answer

}
let gameLogic = {
    userLives: 6,
    phrase: [{ question: "What does everybody have in common", answer: "They all float" }],
    pInPlay: {},
    start: () => {
        this.userLives = 6

        this.pInPlay = gameLogic.phrase[0]
        build(pInPlay)
    },

}



gameLogic.start()