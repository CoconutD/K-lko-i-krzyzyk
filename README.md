Gra w Kółko i Krzyżyk
Gra w Kółko i Krzyżyk stworzona w HTML, CSS i JavaScript. Umożliwia rozgrywkę dla jednego lub dwóch graczy. Gra jest dynamiczna i zawiera możliwość resetowania po zakończeniu jednej partii.

Opis Funkcji
startGame()
Funkcja startGame() inicjalizuje grę. Przeprowadza użytkownika przez proces wyboru liczby graczy, konfiguruje planszę i wyświetla odpowiednie elementy interfejsu. Oto jak działa ta funkcja:

1. Pytanie o liczbę graczy
javascript
Kopiuj
Edytuj
const players = prompt("Ilu graczy będzie grało? (1 lub 2)", "1");
Funkcja prompt() wyświetla okno dialogowe, w którym użytkownik zostaje poproszony o wybór liczby graczy (1 lub 2). Domyślnie wybrana jest opcja 1.

Jeśli użytkownik nie wpisze "1" lub "2", gra nie zostanie rozpoczęta, a użytkownik otrzyma komunikat o błędzie.

2. Sprawdzenie poprawności wyboru liczby graczy
javascript
Kopiuj
Edytuj
if (players !== "1" && players !== "2") {
    alert("Wybierz poprawną liczbę graczy (1 lub 2).");
    return;
}
Sprawdzamy, czy wprowadzona liczba graczy jest prawidłowa. Jeśli nie, wyświetlamy alert z prośbą o poprawny wybór i przerywamy dalsze wykonywanie funkcji.

3. Ukrycie powiadomienia o liczbie graczy
javascript
Kopiuj
Edytuj
document.getElementById("playerNotice").style.display = "none";
Po poprawnym wyborze liczby graczy ukrywamy komunikat o wyborze liczby graczy (element o id playerNotice), który był wyświetlany na początku.

4. Pokazanie planszy i innych elementów
javascript
Kopiuj
Edytuj
board.style.display = "grid";
message.style.display = "block";
resetBtn.style.display = "inline-block";
Plansza gry: Zmieniamy styl na grid, aby pokazać planszę do gry w postaci siatki 3x3.

Komunikat o turze: Ustawiamy widoczność na block, aby pokazać informację o aktualnej turze gracza.

Przycisk resetu: Przycisk resetowania gry staje się widoczny i dostępny.

5. Tworzenie planszy gry
javascript
Kopiuj
Edytuj
createBoard();
Funkcja createBoard() tworzy planszę gry. Dodaje do niej 9 pól, które mogą być klikane przez graczy. Każde pole umożliwia wykonanie ruchu i jest odpowiednio stylizowane.

Podsumowanie
Funkcja startGame() ma za zadanie rozpocząć grę w kółko-krzyżyk, umożliwiając wybór liczby graczy oraz przygotowanie planszy do rozgrywki. Po jej uruchomieniu gra staje się interaktywna, a użytkownicy mogą rozpocząć grę.
