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

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

