let turn = "X";
const stuff = document.querySelectorAll("[boxes]");
const winCon = false;
const lastTurn = stuff.length;
let initialTurn = 0;

const newPuz = [null, null, null, null, null, null, null, null, null];

const win = [
  newPuz[0] == newPuz[3] && newPuz[6],
  newPuz[1] == newPuz[4] && newPuz[7],
  newPuz[2] == newPuz[5] && newPuz[8],
  newPuz[0] == newPuz[1] && newPuz[2],
  newPuz[3] == newPuz[4] && newPuz[5],
  newPuz[6] == newPuz[7] && newPuz[8],
  newPuz[0] == newPuz[4] && newPuz[8],
  newPuz[2] == newPuz[4] && newPuz[6],
];

begin();

function begin() {
  stuff.forEach((cell) => {
    cell.addEventListener("click", clicked, { once: true });
  });
}

function clicked(e) {
  const cell = e.target;
  const currentTurn = turn ? "X" : "O";
  const whichCell = e.target.id;
  newPuz.splice(whichCell, 1, currentTurn);
  marked(cell, currentTurn);
  initialTurn++;
  changeTurn();
  if (initialTurn === lastTurn) endGame();
}

function marked(cell, turn) {
  var marker = document.createElement("img");
  marker.src = "./" + turn + ".jpg";
  cell.appendChild(marker);
  console.log("here is the new puzzle", newPuz);
}

function changeTurn() {
  turn = !turn;
}

function endGame() {
  const button = document.createElement("button", (id = "again"));
  const text = document.createTextNode("Game Over");
  button.appendChild(text);

  const newButton = document.getElementById("button1");
  document.body.insertBefore(button, newButton);
  button.style.position = "absolute";
  button.style.top = "45%";
  button.style.left = "42%";
  button.style.fontSize = "50pt";
}
