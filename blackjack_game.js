// let playername = "Raksha"
// let playerchips = 145
let player = {
    name: "Raksha",
    chips: 145
}
let card = []
let sum = 0
hasblackjackcard =false
// create a variable called isalive and assign it to true
let isalive = false
//declare a variable called message and assign its value to an empty string
let message = " "
let messageEl = document.getElementById("message-el")
console.log(messageEl)

let sumEl = document.getElementById("sum-el")
console.log(sumEl)

let cardEl = document.getElementById("card-el")
console.log(cardEl)

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// this function returns a random number from 1 to 13
function getrandomcard(){
    let number = Math.floor(Math.random() * 13) + 1
    if(number === 1){
        return 11
    }
    else if (number === 11 || number === 12 || number === 13){
        return 10
    }
    else{
        return number
    }
}


function startgame(){
    isalive = true
    let firstCard = getrandomcard()
    let secondCard = getrandomcard()
    card = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    rendergame()
}
function rendergame(){
    
    cardEl.textContent = "cards: " 
    // reder out cards using loop
    for(let i = 0; i < card.length; i++)
    {
        cardEl.textContent += card[i] + "   "
    }


    sumEl.textContent = "sum: " + sum

    if(sum < 21){
        message = "Do you want to draw another card"
    }
    
    else if(sum === 21) {
        message = " you've got Blackjack!"
        hasblackjackcard =true}
    
    else{
         message = "you are out of the game"
         isalive = false}
    
    messageEl.innerText = message

}

function newcard(){
    if(isalive === true && hasblackjackcard === false){
        console.log("drawing a new card")
        let newcard = getrandomcard()
        sum += newcard
        card.push(newcard)
        rendergame()
    }

}



