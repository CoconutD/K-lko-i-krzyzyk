# Gra w Kółko i Krzyżyk - Wyjaśnienie Kodu

## **1. Pobieranie elementu planszy**

```javascript
const board = document.querySelector("#board");
Co robi ten kod?

Ten fragment kodu pobiera element HTML, który ma identyfikator board (czyli kontener na planszę do gry).

Dzięki temu będziemy mogli manipulować planszą w JavaScript.

2. Pobieranie elementu dla komunikatu o turze
javascript
Kopiuj
Edytuj
const message = document.querySelector("#message");
Co robi ten kod?

Zmienna message przechowuje odwołanie do elementu HTML o id message. Ten element będzie wyświetlał komunikat o tym, która tura właśnie trwa (X lub O) lub kto wygrał.

3. Pobieranie przycisku resetu gry
javascript
Kopiuj
Edytuj
const resetBtn = document.querySelector("#resetBtn");
Co robi ten kod?

Kod ten pobiera przycisk o id resetBtn, który będzie służył do resetowania gry po jej zakończeniu.

4. Inicjalizacja zmiennych gry
javascript
Kopiuj
Edytuj
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let winningCombo = [0, 0, 0];
let gameActive = true;
Co robi ten kod?

currentPlayer: Zmienna, która przechowuje, który gracz aktualnie ma swoją turę (na początku jest to "X").

gameBoard: Tablica o 9 polach, która przechowuje stan planszy. Każde pole może być puste (""), mieć "X" lub "O".

winningCombo: Tablica, która zapisuje indeksy pól w zwycięskiej kombinacji (np. [0, 1, 2]).

gameActive: Zmienna logiczna, która kontroluje, czy gra jest aktywna. Początkowo ustawiona na true.

5. Rozpoczęcie gry (startGame)
javascript
Kopiuj
Edytuj
function startGame() {
  const players = prompt("Ilu graczy będzie grało? (1 lub 2)", "1");
Co robi ten kod?

Funkcja startGame() uruchamia grę. Na początku zapytuje użytkownika, ilu graczy będzie brało udział w grze (1 lub 2).

6. Weryfikacja liczby graczy
javascript
Kopiuj
Edytuj
if (players !== "1" && players !== "2") {
  alert("Wybierz poprawną liczbę graczy (1 lub 2).");
  return;
}
Co robi ten kod?

Sprawdza, czy użytkownik podał poprawną liczbę graczy (1 lub 2). Jeśli nie, wyświetla komunikat o błędzie i zatrzymuje grę.

7. Ukrywanie powiadomienia o liczbie graczy i wyświetlanie planszy
javascript
Kopiuj
Edytuj
document.getElementById("playerNotice").style.display = "none";
board.style.display = "grid";
message.style.display = "block";
resetBtn.style.display = "inline-block";
Co robi ten kod?

Ukrywa powiadomienie o liczbie graczy (playerNotice).

Ustawia planszę gry (board) jako widoczny element grid.

Wyświetla komunikat o turze (message) oraz przycisk resetu (resetBtn).

8. Tworzenie planszy gry (createBoard)
javascript
Kopiuj
Edytuj
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
Co robi ten kod?

board.innerHTML = "": Czyści planszę, usuwając wszelkie poprzednie elementy.

Pętla for tworzy 9 nowych pól na planszy.

cell.classList.add("cell"): Dodaje klasę CSS cell do każdego nowo tworzonego pola, co pozwala na odpowiednią stylizację.

cell.dataset.index = i: Ustawia indeks pola, abyśmy wiedzieli, który numer pola został kliknięty.

cell.addEventListener("click", handleCellClick): Dodaje nasłuchiwacz zdarzenia kliknięcia, aby po kliknięciu na pole wywołać funkcję handleCellClick.

9. Obsługa kliknięcia na pole (handleCellClick)
javascript
Kopiuj
Edytuj
function handleCellClick(event) {
  const index = event.target.dataset.index;
  if (!gameActive || gameBoard[index] !== "") return;
Co robi ten kod?

Funkcja handleCellClick() jest wywoływana, gdy gracz kliknie na jedno z pól planszy.

index: Zmienna przechowuje numer klikniętego pola.

Jeśli gra jest zakończona lub pole jest już zajęte, kliknięcie nic nie robi.

10. Aktualizacja planszy po kliknięciu
javascript
Kopiuj
Edytuj
gameBoard[index] = currentPlayer;
event.target.textContent = currentPlayer;
event.target.classList.add(currentPlayer);
Co robi ten kod?

gameBoard[index] = currentPlayer: Zapisuje symbol gracza (X lub O) na odpowiednim polu planszy.

event.target.textContent = currentPlayer: Wyświetla symbol gracza na planszy w odpowiednim polu.

event.target.classList.add(currentPlayer): Dodaje odpowiednią klasę CSS (np. X lub O), zmieniając kolor tekstu w zależności od gracza.

11. Sprawdzanie zwycięzcy (checkWin)
javascript
Kopiuj
Edytuj
if (checkWin()) {
  message.textContent = `${currentPlayer} wygrał!`;
  gameActive = false;
  drawWinningLine();
}
Co robi ten kod?

Jeśli funkcja checkWin() wykryje zwycięstwo, wyświetla komunikat, kto wygrał, a gra zostaje zatrzymana.

gameActive = false: Zatrzymuje grę, aby nikt nie mógł kontynuować kliknięć.

drawWinningLine(): Rysuje linię zwycięstwa na planszy.

12. Zmiana tury gracza
javascript
Kopiuj
Edytuj
else if (!gameBoard.includes("")) {
  message.textContent = "Remis!";
  gameActive = false;
} else {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  message.textContent = `Tura: ${currentPlayer}`;
}
Co robi ten kod?

Jeśli plansza jest pełna i nie ma zwycięzcy, ogłaszamy remis.

Jeśli gra trwa dalej, zmieniamy gracza na "X" lub "O" i aktualizujemy komunikat o turze.

13. Sprawdzanie warunków zwycięstwa (checkWin - kontynuacja)
javascript
Kopiuj
Edytuj
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
Co robi ten kod?

winConditions: Tablica zawierająca wszystkie możliwe kombinacje pól, które muszą być zajęte przez tego samego gracza, aby wygrać grę (np. [0, 1, 2] oznacza linię na górze).

14. Sprawdzanie każdej możliwej kombinacji zwycięstwa
javascript
Kopiuj
Edytuj
for (const condition of winConditions) {
  const [a, b, c] = condition;
  if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
    winningCombo = condition;
    return true;
  }
}
Co robi ten kod?

Pętla sprawdza każdą możliwą kombinację zwycięstwa. Jeśli wszystkie trzy pola w kombinacji mają ten sam symbol (X lub O), oznacza to zwycięstwo.

15. Resetowanie gry (resetGame)
javascript
Kopiuj
Edytuj
resetBtn.addEventListener("click", resetGame);

function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  message.textContent = "Tura: X";
}
