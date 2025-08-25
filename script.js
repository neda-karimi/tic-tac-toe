
const cells = document.querySelectorAll(".cell");
const playerStatus = document.querySelector(".game--status");
const restart = document.querySelector(".game--restart");
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let isGameActive = true;
playerStatus.innerText = "It's " + currentPlayer + "'s turn";

  function switchPlayer(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    playerStatus.innerText = "It's "+currentPlayer+"'s turn";
  }
  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      if (board[index] === "" && isGameActive) {
        board[index] = currentPlayer;  
        cell.innerText = currentPlayer;
        switchPlayer();
      }
    });
  });
  restart.addEventListener("click", ()=>{
    board = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    currentPlayer = "X";
    playerStatus.innerText = "It's "+currentPlayer+"'s turn";
  })
  
 
