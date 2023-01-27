let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let sumEl = document.getElementById("sum-el");

let numbers = [];
let count = 0; //baslangıç değeri

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + "-";
  saveEl.textContent += countStr;

  console.log(countStr[0]);
  // const result = countStr.reduce((a, b) => a + b, 0);
  // console.log(result);
  countEl.textContent = 0; //her increment tıklandıgında sıfırlar fakat kaldıgı yerden devam eder
  count = 0; //artıs hep sıfırdan baslatır
}
function newCard() {
  let card = 2;
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
}

let randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);
