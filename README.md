# Gra w Kółko i Krzyżyk - Wyjaśnienie Kodu

## **1. Pobieranie elementu planszy**

```javascript

const board = document.querySelector("#board");
1. Pobieranie elementu planszy const board = document.querySelector("#board");
Co robi ten kod?

Ten fragment pobiera element HTML, który ma identyfikator board (czyli kontener na planszę do gry).

document.querySelector("#board") szuka w kodzie HTML elementu o id board.

Zmienna board teraz zawiera odwołanie do tego elementu, dzięki czemu możemy manipulować planszą w JavaScript.
