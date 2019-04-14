function intro() {
    location.replace("../pages/intro.html")
    gameLogic.start()
}

let build = (i) => {
    words = []
    qArea = document.getElementById('Question')
    console.log(i)
    qArea.innerHTML = i.question

    aArea = document.getElementById('Answer')

    words = i.answer.split(" ")
    
    words.map((word)=>{
        letters = word.split('')
        wordMaker =document.createElement("div")

    letters.map((letter)=>{
        let nextItem = document.createElement("div")
        nextItem.append(letter)
        wordMaker.append(nextItem)
    })

    aArea.append(wordMaker)

    })



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