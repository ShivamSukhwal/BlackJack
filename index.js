
let cards = [6, 9]
let total = cards[0] + cards[1]

let cardElement = document.getElementById("card-el")
let totalElement = document.getElementById("total-el")
let newCardElement = document.getElementById("new-card-el")

let playGame = () => {
    cardElement.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardElement.textContent += cards[i] + ' '
    }
    totalElement.textContent = "Total: " + total
    newCardElement.textContent = "Add A New Card?"
}

let addCard = () => {
    let newCard = 6
    total += newCard
    cards.push(newCard)
    playGame()
}