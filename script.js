
const cells = document.querySelectorAll(".cell");
const playerStatus = document.querySelector(".game--status");
const restart = document.querySelector(".game--restart");
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let isGameActive = true;
const winningCondition = [
  [0,1,2],[3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]         
];
playerStatus.innerText = "It's " + currentPlayer + "'s turn";

  function switchPlayer(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    playerStatus.innerText = "It's "+currentPlayer+"'s turn";
  }
  function checkWinner(){
    for (let condition of winningCondition){
      const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[b] === board[c]){
      playerStatus.innerText = `Player ${board[a]} has won!`;
      isGameActive = false;
      return;
    }
       
    }
    if (!board.includes("")) {
      playerStatus.innerText = "Game ended in a draw";
      isGameActive = false;
    }
  }
  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      if (board[index] === "" && isGameActive) {
        board[index] = currentPlayer;  
        cell.innerText = currentPlayer;
        checkWinner();
        if (isGameActive) {
          switchPlayer();
        }
      }
    });
  });
  restart.addEventListener("click", ()=>{
    board = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    currentPlayer = "X";
    playerStatus.innerText = "It's "+currentPlayer+"'s turn";
    cells.forEach(cell => {
      cell.innerText="";
    });  
  })
  
 
