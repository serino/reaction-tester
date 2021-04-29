let paragraph = document.getElementById("paragraph")

let restartButton = document.getElementById("restartButton")

let turnPageBlueIntervalId
let reactionCounterIntervalId

let counter = 0
let gameStarted = false

function submitReaction() {

  restartButton.style.display = "none"

  if (gameStarted == false) {
    reactionButton.innerHTML = "Click Me"
    let randomNum = Math.floor(Math.random() * 5000)
    turnPageBlueIntervalId = setInterval(turnPageBlue, randomNum)
    paragraph.innerHTML = `Click button as soon as the page turns blue!`
    gameStarted = true
    return
  }

  if (gameStarted == true && counter != 0) {
    restartButton.style.display = "block"
    reactionButton.style.display = "none"
    clearInterval(reactionCounterIntervalId)
    document.body.style.backgroundColor = ""
    paragraph.innerHTML = `Reaction: ${counter} milliseconds.`
    return
  }  
}

function turnPageBlue() {
  document.body.style.backgroundColor = "lightblue"
  clearInterval(turnPageBlueIntervalId)
  reactionCounterIntervalId = setInterval(reactionCounter, 1)
}

function reactionCounter() {
  counter++
}

function restartGame() {
  reactionButton.style.display = "block"
  counter = 0
  gameStarted = false
  submitReaction()
}