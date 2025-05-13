let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let message_el = document.getElementById("message")
let sum_el  = document.getElementById("sum")
let cards_el = document.getElementById("cards")

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11  
    } else if (randomNumber > 10) {
        return 10 
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackjack = false
    cards = [getRandomCard(), getRandomCard()]
    sum = cards[0] + cards[1]
    renderGame()
}

function renderGame() {
    cards_el.textContent = "Cards : " + cards.join(" - ")
    sum_el.textContent = "Total : " + sum
    if (sum < 21) {
        message = "Do you want to withdraw a new card?"
    } else if (sum === 21) {
        message = "Awesome! I got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You lost! "
        isAlive = false
    }
    message_el.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}