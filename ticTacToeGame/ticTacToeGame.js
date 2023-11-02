// Tic-Tac-Toe Game


const prompt = require("prompt-sync")({ sigint: true });

const p1name = prompt("Hi Player 1, may I have your name? ");
const p2name = prompt("Hello Player 2, may I have your name? ");
console.log();
console.log(`Welcome Player 1: ${p1name}! (X)`);
console.log(`Welcome Player 2: ${p2name}! (O)`);


const winningCombo1 = ["X", "X", "X"]
let playingBoard = [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]];
let turn = 1;

console.log('playing board', playingBoard)


function createPlayers() {

    let player1 = p1name;
    let player2 = p2name;

    console.log("Player 1: ", player1, "(X)                ", "Player 2: ", player2, ("(O)"));

    for (let i = 1; i < 8; i++) {
        console.log();
        if (turn === 1) {
            const p1RowPosition = prompt(`${player1}, Please enter your row position: `);
            const p1ColumnPosition = prompt(`${player1}, Please enter your column position: `);
            playingBoard[p1RowPosition][p1ColumnPosition] = "X";
            turn = 0;
        } else {
            const p2RowPosition = prompt(`${player2}, Please enter your row position: `);
            const p2ColumnPosition = prompt(`${player2}, Please enter your column position: `);
            playingBoard[p2RowPosition][p2ColumnPosition] = "O";
            turn = 1;
        }
        console.log('playingboard after', playingBoard);
    }

    if (JSON.stringify(playingBoard[0]) == JSON.stringify(winningCombo1)) {
        console.log(`${player1} is the winner!`);
    }
    if (JSON.stringify(playingBoard[1]) == JSON.stringify(winningCombo1)) {
        console.log(`${player1} is the winner!`);
    }
    if (JSON.stringify(playingBoard[2]) == JSON.stringify(winningCombo1)) {
        console.log(`${player1} is the winner!`);
    }
};

console.log(createPlayers());
