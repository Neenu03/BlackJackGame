//Blackjack game

let cards = [];
let total = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let totalEl = document.getElementById("total-el");
let personEl = document.getElementById("person-el");


function getRandomCard() {
 let randomNumber = Math.floor(Math.random()*13)+1;
   if (randomNumber > 10) {
     return 10;
   } else if (randomNumber === 1) {   
       return 11;
   } else {
       return randomNumber;
    }
}

function startGame() { 
  isAlive = true;
  card1 = getRandomCard();
  card2 = getRandomCard();
  cards = [card1, card2];
  total = card1 + card2;
  renderGame();
}

function renderGame() {
cardsEl.textContent = "Cards:"
   for (i = 0; i < cards.length; i++) {
     cardsEl.textContent += cards[i] + " ";
     }
       totalEl.textContent = "Total:" + total;
        if (total < 21) {
          message = "You have one more chance";
        } else if (total === 21) {
            message ="Wow!You won the game 🏆🎉"
         }   else {
                message ="Sorry,you are out of the game😔"
         }
    messageEl.textContent = message;
  }

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    total += card;
    cards.push(card);
    renderGame();
  }
}
