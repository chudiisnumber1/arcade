let turn = "X";
const stuff = document.querySelectorAll("[boxes]");
const winCon = false;
const lastTurn = stuff.length;
let initialTurn = 0;
let winner = "";
let newPuz = [null, null, null, null, null, null, null, null, null];

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

function checkWin() {
  if (newPuz[0] == newPuz[3] && newPuz[6] == newPuz[0] && newPuz[0] != null) {
    winner = newPuz[0];
    endGame();
  } else if (
    newPuz[1] == newPuz[4] &&
    newPuz[7] == newPuz[1] &&
    newPuz[1] != null
  ) {
    winner = newPuz[1];
    endGame();
  } else if (
    newPuz[2] == newPuz[5] &&
    newPuz[8] == newPuz[2] &&
    newPuz[2] != null
  ) {
    winner = newPuz[2];
    endGame();
  } else if (
    newPuz[0] == newPuz[1] &&
    newPuz[2] == newPuz[0] &&
    newPuz[0] != null
  ) {
    winner = newPuz[0];
    endGame();
  } else if (
    newPuz[3] == newPuz[4] &&
    newPuz[5] == newPuz[3] &&
    newPuz[3] != null
  ) {
    winner = newPuz[3];
    endGame();
  } else if (
    newPuz[6] == newPuz[7] &&
    newPuz[8] == newPuz[6] &&
    newPuz[6] != null
  ) {
    winner = newPuz[6];
    endGame();
  } else if (
    newPuz[0] == newPuz[4] &&
    newPuz[8] == newPuz[0] &&
    newPuz[0] != null
  ) {
    winner = newPuz[0];
    endGame();
  } else if (
    newPuz[2] == newPuz[4] &&
    newPuz[6] == newPuz[2] &&
    newPuz[2] != null
  ) {
    winner = newPuz[2];
    endGame();
  }
}

function begin() {
  // stuff.forEach((cell) => {
  //   cell.addEventListener("click", clicked, { once: true });
  // });
  document
    .getElementById("0")
    .addEventListener("click", clicked, { once: true });
  document
    .getElementById("1")
    .addEventListener("click", clicked, { once: true });
  document
    .getElementById("2")
    .addEventListener("click", clicked, { once: true });
  document
    .getElementById("3")
    .addEventListener("click", clicked, { once: true });
  document
    .getElementById("4")
    .addEventListener("click", clicked, { once: true });
  document
    .getElementById("5")
    .addEventListener("click", clicked, { once: true });
  document
    .getElementById("6")
    .addEventListener("click", clicked, { once: true });
  document
    .getElementById("7")
    .addEventListener("click", clicked, { once: true });
  document
    .getElementById("8")
    .addEventListener("click", clicked, { once: true });
}

function clicked(e) {
  const cell = e.target;
  const currentTurn = turn ? "X" : "O";
  const whichCell = e.target.id;
  newPuz.splice(whichCell, 1, currentTurn);
  marked(cell, currentTurn);
  initialTurn++;
  checkWin();
  changeTurn();
  if (initialTurn === lastTurn && !winner) drawGame();
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

function drawGame() {
  const button = document.createElement("button");
  button.setAttribute("id", "again");
  const text = document.createTextNode(`Draw, click to play again`);
  button.appendChild(text);
  const newButton = document.getElementById("button1");
  document.body.insertBefore(button, newButton);
  button.style.position = "absolute";
  button.style.top = "45%";
  button.style.left = "42%";
  button.style.fontSize = "50pt";
  button.onclick = function () {
    winner = "";
    newPuz = [null, null, null, null, null, null, null, null, null];
    initialTurn = 0;

    document.getElementById(0).innerHTML = "";
    document.getElementById(1).innerHTML = "";
    document.getElementById(2).innerHTML = "";
    document.getElementById(3).innerHTML = "";
    document.getElementById(4).innerHTML = "";
    document.getElementById(5).innerHTML = "";
    document.getElementById(6).innerHTML = "";
    document.getElementById(7).innerHTML = "";
    document.getElementById(8).innerHTML = "";
    document.getElementById("again").remove();
  };
  begin();
}

function endGame() {
  stuff.forEach((cell) => {
    // cell.removeEventListener("click", clicked, { once: true });
    console.log(cell);
  });

  document.getElementById("0").removeAttribute("click");
  document.getElementById("1").removeAttribute("click");
  document.getElementById("2").removeAttribute("click");
  document.getElementById("3").removeAttribute("click");
  document.getElementById("4").removeAttribute("click");
  document.getElementById("5").removeAttribute("click");
  document.getElementById("6").removeAttribute("click");
  document.getElementById("7").removeAttribute("click");
  document.getElementById("8").removeAttribute("click");

  const button = document.createElement("button");
  button.setAttribute("id", "again");
  const text = document.createTextNode(`${winner} Wins, click to play again`);
  button.appendChild(text);
  const newButton = document.getElementById("button1");
  document.body.insertBefore(button, newButton);
  button.style.position = "absolute";
  button.style.top = "45%";
  button.style.left = "42%";
  button.style.fontSize = "50pt";
  button.onclick = function () {
    winner = "";
    newPuz = [null, null, null, null, null, null, null, null, null];
    initialTurn = 0;

    document.getElementById(0).innerHTML = "";
    document.getElementById(1).innerHTML = "";
    document.getElementById(2).innerHTML = "";
    document.getElementById(3).innerHTML = "";
    document.getElementById(4).innerHTML = "";
    document.getElementById(5).innerHTML = "";
    document.getElementById(6).innerHTML = "";
    document.getElementById(7).innerHTML = "";
    document.getElementById(8).innerHTML = "";
    document.getElementById("again").remove();
  };
  begin();
}

function playerNames() {
  const names = document.getElementById("playerOne");
  console.log(names);
}

playerNames();
begin();
