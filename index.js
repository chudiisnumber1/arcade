let turn = "X";
const stuff = document.querySelectorAll("[boxes]");
const mark = document.getElementById(turn);

stuff.forEach((cell) => {
  cell.addEventListener("click", clicked, { once: true });
});

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

  console.log("Clicked");
  changeTurn();
}

function marked(cell, turn) {
  var marker = document.createElement("img");
  marker.src = "./" + turn + ".jpg";
  cell.appendChild(marker);
}

function changeTurn() {
  turn = !turn;
}
