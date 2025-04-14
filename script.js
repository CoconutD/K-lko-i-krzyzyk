const board = document.querySelector("#board");
const message = document.querySelector("#message");
const resetBtn = document.querySelector("#resetBtn");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let winningCombo = [0, 0, 0];
let gameActive = true;

function startGame() {
  const players = prompt("Ilu graczy będzie grało? (1 lub 2)", "1");

  if (players !== "1" && players !== "2") {
    alert("Wybierz poprawną liczbę graczy (1 lub 2).");
    return;
  }

  document.getElementById("playerNotice").style.display = "none";
  board.style.display = "grid";
  message.style.display = "block";
  resetBtn.style.display = "inline-block";
  createBoard();
}

function createBoard() {
  board.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.addEventListener("click", handleCellClick);
    board.appendChild(cell);
  }
}

function handleCellClick(event) {
  const index = event.target.dataset.index;
  if (!gameActive || gameBoard[index] !== "") return;

  gameBoard[index] = currentPlayer;
  event.target.textContent = currentPlayer;
  event.target.classList.add(currentPlayer);

  if (checkWin()) {
    message.textContent = `${currentPlayer} wygrał!`;
    gameActive = false;
    drawWinningLine();
  } else if (!gameBoard.includes("")) {
    message.textContent = "Remis!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    message.textContent = `Tura: ${currentPlayer}`;
  }

  event.target.removeEventListener("click", handleCellClick);
}

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      winningCombo = condition;
      return true;
    }
  }

  return false;
}

function drawWinningLine() {
  const line = document.createElement("div");
  line.classList.add("line");
  board.appendChild(line);

  const start = winningCombo[0];
  const end = winningCombo[2];

  // Linie poziome
  if (start === 0 && end === 2) {
    line.style.top = "50px";
    line.style.left = "0";
    line.style.width = "322px";
    line.style.height = "4px";
  } else if (start === 3 && end === 5) {
    line.style.top = "161px";
    line.style.left = "0";
    line.style.width = "314px";
    line.style.height = "4px";
  } else if (start === 6 && end === 8) {
    line.style.top = "268px";
    line.style.left = "0";
    line.style.width = "315px";
    line.style.height = "4px";
  }

  // Linie pionowe
  else if (start === 0 && end === 6) {
    line.style.width = "4px";
    line.style.height = "322px";
    line.style.top = "0";
    line.style.left = "50px";
  } else if (start === 1 && end === 7) {
    line.style.width = "4px";
    line.style.height = "322px";
    line.style.top = "0";
    line.style.left = "155px";
  } else if (start === 2 && end === 8) {
    line.style.width = "5px";
    line.style.height = "322px";
    line.style.top = "0px";
    line.style.left = "261px";
  }

  // Linie diagonalne
  else if (start === 0 && end === 8) {
    line.style.width = "44px"; // Szerokość linii
    line.style.height = "4px";  // Wysokość linii
    line.style.top = "0";       // Pozycja pionowa
    line.style.left = "0";      // Pozycja pozioma
    line.style.transform = "rotate(45.5deg)";  // Obrót w prawo
    line.style.transformOrigin = "top left"; // Zmieniamy punkt obrotu
  } else if (start === 2 && end === 6) {
    line.style.width = "442px"; // Szerokość linii
    line.style.height = "4px";  // Wysokość linii
    line.style.top = "0";       // Pozycja pionowa
    line.style.left = "-132px";      // Pozycja pozioma
    line.style.transform = "rotate(-45.5deg)";  // Obrót w prawo
    line.style.transformOrigin = "top right"; // Zmieniamy punkt obrotu
}
}

resetBtn.addEventListener("click", resetGame);

function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  message.textContent = "Tura: X";

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("X", "O");
    cell.addEventListener("click", handleCellClick);
  });

  const oldLine = document.querySelector(".line");
  if (oldLine) {
    oldLine.remove();
  }
}

startGame();
