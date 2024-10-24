let player1Symbol = "X";
let player2Symbol = "O"; 
let currentPlayer;
let isGameStarted = false; 


function selectSymbol(symbol) {
    player1Symbol = symbol;
    player2Symbol = symbol === "X" ? "O" : "X"; 
    currentPlayer = player1Symbol;
    isGameStarted = true; 
    alert(`Player 1 is ${player1Symbol} and Player 2 is ${player2Symbol}. Game starts!`);
}
