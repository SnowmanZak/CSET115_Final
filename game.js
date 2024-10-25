let player1Symbol = "X";
let player2Symbol = "O"; 
let currentPlayer;
let isGameStarted = false; 
let board = Array(9).fill('');
let player1_wins = 0;
let player2_wins = 0;
let ties = 0;

function selectSymbol(symbol) {
    player1Symbol = symbol;
    player2Symbol = symbol === "X" ? "O" : "X"; 
    currentPlayer = player1Symbol;
    isGameStarted = true;
    alert(`Player 1 is ${player1Symbol} and Player 2 is ${player2Symbol}. Game starts!`);
   
    document.querySelector('.symbol_select').style.display = 'none';
    document.querySelector('.turn_indicator').style.display = 'block'; 

    updateTurnIndicator(); 
}
function updateTurnIndicator() {
    const turnInfo = document.getElementById("turn-info");
    turnInfo.textContent = `It's ${currentPlayer === player1Symbol ? "Player 1's" : "Player 2's"} turn.`;
}
document.querySelectorAll('.cell button').forEach((button, index) => {
    button.addEventListener('click', () => {
        if (!isGameStarted || board[index] !== '') return; 

        board[index] = currentPlayer; 
        button.textContent = currentPlayer; 

        if (checkWinner()) {
            if (currentPlayer === player1Symbol) {
                player1_wins++;
                document.getElementById("player1_wins").textContent = player1_wins;
                alert("Player 1 wins!");
            } else {
                player2_wins++;
                document.getElementById("player2_wins").textContent = player2_wins;
                alert("Player 2 wins!");
            }
            resetGame(); 
        } else if (board.every(cell => cell !== '')) {
            ties++;
            document.getElementById("ties").textContent = ties;
            alert("It's a tie!");
            resetGame(); 
        } else {
            currentPlayer = currentPlayer === player1Symbol ? player2Symbol : player1Symbol; 
            updateTurnIndicator(); 
        }
    });
});

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

