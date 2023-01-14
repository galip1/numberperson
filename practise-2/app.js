let firstCard = getRandomCard();
let secondCard = getRandomCard();

let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
  return 5;
}

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = `Cards: `;

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += `${cards[i]} `;
  }

  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
}

// let p1 = 102;
// let p2 = 107;

// function getFastet() {
//   if (p1 < p2) {
//     return p1;
//     console.log(p1);
//   } else if (p1 > p2) {
//     return p2;
//   } else {
//     return p1;
//   }
// }
// function getTotal() {
//   return p1 + p2;
// }
// let totalTime = getTotal();
// console.log(totalTime);
