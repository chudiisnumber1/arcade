let turn = "X";
const stuff = document.querySelectorAll("[boxes]");
const winCon = false;
const lastTurn = stuff.length;
const initialTurn = 0;

const newPuz = [null, null, null, null, null, null, null, null, null];

const win = [
  (newPuz[0] == newPuz[3]) == newPuz[6],
  (newPuz[1] == newPuz[4]) == newPuz[7],
  (newPuz[2] == newPuz[5]) == newPuz[8],
  (newPuz[0] == newPuz[1]) == newPuz[2],
  (newPuz[3] == newPuz[4]) == newPuz[5],
  (newPuz[6] == newPuz[7]) == newPuz[8],
  (newPuz[0] == newPuz[4]) == newPuz[8],
  (newPuz[2] == newPuz[4]) == newPuz[6],
];

// function winningTheory() {
//   for (let i = 0; i < 8; i++) {
//     const winner = win[i];
//     const winA = winner[0];
//     const winB = winner[1];
//     const winC = winner[2];
//     if (newPuz[j] === (winA || winB || winC)) {
//       return true;
//     }
//   }
// }

// stuff.forEach((cell) => {
//   cell.addEventListener("click", clicked, { once: true });
// });

begin();

function begin() {
  stuff.forEach((cell) => {
    cell.addEventListener("click", clicked, { once: true });
  });
}

function clicked(e) {
  const cell = e.target;
  const currentTurn = turn ? "X" : "O";
  marked(cell, currentTurn);
  //newPuz.push(currentTurn);

  changeTurn();
}

function marked(cell, turn) {
  var marker = document.createElement("img");
  marker.src = "./" + turn + ".jpg";
  cell.appendChild(marker);
  initialTurn++;
}

function changeTurn() {
  turn = !turn;
}
