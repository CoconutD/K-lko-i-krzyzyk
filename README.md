# Kółko i Krzyżyk

Prosta gra w Kółko i Krzyżyk zaimplementowana w HTML, CSS i JavaScript.

## Kluczowe linie kodu

1. **`const board = document.querySelector("#board");`**  
   Wybiera element planszy po ID, aby manipulować siatką gry.

2. **`let currentPlayer = "X";`**  
   Ustawia początkowego gracza na "X".

3. **`let gameBoard = ["", "", "", "", "", "", "", "", ""];`**  
   Tworzy tablicę reprezentującą pustą planszę gry.

4. **`board.style.display = "grid";`**  
   Ustawia styl wyświetlania planszy na siatkę CSS, umożliwiając rozmieszczenie komórek.

5. **`cell.addEventListener("click", handleCellClick);`**  
   Dodaje nasłuchiwacz na kliknięcie w każdą komórkę, aby obsłużyć ruch gracza.

6. **`gameBoard[index] = currentPlayer;`**  
   Aktualizuje stan planszy, przypisując znak gracza (X lub O) do odpowiedniej komórki.

7. **`if (checkWin()) {`**  
   Sprawdza, czy po ruchu gracza nastąpiło zwycięstwo.

8. **`const winConditions = [...];`**  
   Definiuje możliwe kombinacje zwycięskie (poziome, pionowe, diagonalne).

9. **`line.style.transform = "rotate(45.5deg)";`**  
   Obraca linię zwycięstwa, aby dopasować ją do odpowiedniego kąta dla linii diagonalnej.

10. **`resetBtn.addEventListener("click", resetGame);`**  
   Nasłuchuje kliknięcie przycisku resetu, wywołując funkcję `resetGame` do zresetowania gry.
