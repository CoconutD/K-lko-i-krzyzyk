Tworzenie planszy (9 komórek)
Tworzę planszę 3x3 dynamicznie w JavaScript:

javascript
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
Co robi: Pętla tworzy 9 divów (komórek), dodaje im klasy i zdarzenie kliknięcia. Każda komórka wie, który ma numer (0–8).

Obsługa kliknięcia gracza
javascript
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
Co robi: Po kliknięciu pola, wpisuje X lub O, sprawdza, czy ktoś wygrał lub czy jest remis, zmienia gracza.

Sprawdzanie zwycięzcy
javascript
function checkWin() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
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
Co robi: Sprawdza, czy któryś gracz ustawił trzy znaki w jednej linii.

Rysowanie linii zwycięstwa
javascript
function drawWinningLine() {
  const line = document.createElement("div");
  line.classList.add("line");
  board.appendChild(line);

  const start = winningCombo[0];
  const end = winningCombo[2];

  // Przykład dla wygranej poziomej (pierwszy rząd)
  if (start === 0 && end === 2) {
    line.style.top = "50px";
    line.style.left = "0";
    line.style.width = "322px";
    line.style.height = "4px";
  }
  // inne przypadki też są w kodzie
}
Co robi: Jeśli ktoś wygrał, dodaje czerwoną linię przez zwycięskie pola (w CSS to pozycjonowany div).

Reset gry
javascript
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
Co robi: Czyści planszę, usuwa linię zwycięstwa i pozwala zagrać ponownie.

HTML – Podstawowy układ gry
<div id="board"></div>
<p id="message">Tura: X</p>
<button id="resetBtn">Reset</button>
Co robi: Plansza do gry, informacja czyja tura i przycisk resetowania.

CSS – Stylowanie komórek
.cell {
  width: 100px;
  height: 100px;
  font-size: 40px;
  border: 2px solid #333;
  background-color: white;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
Co robi: Nadaje styl każdej komórce, dzięki czemu plansza wygląda estetycznie i nowocześnie.
