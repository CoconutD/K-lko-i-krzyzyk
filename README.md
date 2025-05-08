# Kółko i Krzyżyk (Tic-Tac-Toe)

A simple game of Tic-Tac-Toe implemented with HTML, CSS, and JavaScript.

## Key Code Lines

1. **`const board = document.querySelector("#board");`**  
   Selects the board element by its ID to manipulate the game grid.

2. **`let currentPlayer = "X";`**  
   Initializes the first player as "X".

3. **`let gameBoard = ["", "", "", "", "", "", "", "", ""];`**  
   Creates an array to represent the empty game board.

4. **`board.style.display = "grid";`**  
   Sets the board layout to a CSS grid for the game cells.

5. **`cell.addEventListener("click", handleCellClick);`**  
   Adds a click event listener to each cell to handle user input.

6. **`gameBoard[index] = currentPlayer;`**  
   Updates the game board array when a player makes a move.

7. **`if (checkWin()) {`**  
   Checks if a winning combination has been achieved after each move.

8. **`const winConditions = [...];`**  
   Defines possible winning conditions (horizontal, vertical, diagonal).

9. **`line.style.transform = "rotate(45.5deg)";`**  
   Rotates the winning line to fit a diagonal win.

10. **`resetBtn.addEventListener("click", resetGame);`**  
   Listens for a click on the reset button to restart the game.
