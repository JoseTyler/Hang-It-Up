function intro(){
    location.replace("../pages/intro.html")
}

let gameLogic={ 
    userLives: 6,
    phrase:[{question: "What does everybody have in common", answer: "They all float"}],
    pInPlay:"",
    start: ()=>{
        this.userLives = 6
        this.pInPlay = this.phrase[0]
    },
}

