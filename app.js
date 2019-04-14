function intro() {
    location.replace("../pages/intro.html")
    gameLogic.start()
}



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
            console.log("in letters function")
            $(`<div class='indivletters'style='grid-column:${a + 1}'> ${letter}</div>`).appendTo(`.Word${i}`)

        })
        // currentWord.append(wordMaker)
        // aArea.append(currentWord)






    })


    alpha.map((letter, a) => {


        if (a % 2 == 0) {
            $(`<button class="letterButtons" style='grid-row:${1}'> ${letter}</button>`).appendTo('#Letters')
        } else {
            $(`<button style='grid-row:${2}'> ${letter}</button>`).appendTo('#Letters')
        }


    })


}
let gameLogic = {
    alpha: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    inPlayAplha: [],
    userLives: 6,
    phrase: [{ question: "What does everybody have in common", answer: "They all float" }],
    pInPlay: {},
    start: () => {
        this.userLives = 6
        this.pInPlay = gameLogic.phrase[0]
        this.inPlayAplha = gameLogic.alpha
        build(pInPlay,inPlayAplha)
    },

}



gameLogic.start()