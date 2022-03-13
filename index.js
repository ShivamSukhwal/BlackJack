
let cards = [6, 9]
let total = cards[0] + cards[1]


let cardOneElement = document.getElementById("card-el-one")
let cardTwoElement = document.getElementById("card-el-two")
let totalElement = document.getElementById("total-el")
let newCardElement = document.getElementById("new-card-el")

let playGame = () => {
    cardOneElement.textContent = "Card One: " + cards[0]
    cardTwoElement.textContent = "Card Two: " + cards[1]
    totalElement.textContent = "Total: " + total
    newCardElement.textContent = "Add A New Card?"
}