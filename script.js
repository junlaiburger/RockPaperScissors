function playerPlay() {
  // gets input from the player
    let hand = ""
    let loop = true
    while (loop) {
      hand = prompt("Please input rock, paper, or scissors", "");
      if (hand.toLowerCase() == "rock" || hand.toLowerCase() == "paper" || hand.toLowerCase() == "scissors") {
//         console.log(hand);
        return hand
      } else {
        alert('Invalid entry')
      }
    }
}

function computerPlay() {
  // randomly returns either 'Rock', 'Paper' or 'Scissors'
  // the problem is figuring out what algorithm to choose
  
  // this RPS algorithm will use the current second to decide the result
  let hand = "";
  let seconds = Date.now();
  
  if (seconds%10 == 0 || seconds%5 == 0) {
    hand = "Rock";
  } else if (seconds%2 == 0) {
    hand = "Scissors";
  } else {
    hand = "Paper";
  }
  
  return hand
//   console.log(seconds)
//   console.log(hand)
}

let playerScore = 0;
let computerScore = 0;
let tie = 0;

function playRound(playerSelection, computerSelection) {
  // your code here!
  let winner = "";
  // nested if statment decides the winner 
  if (playerSelection.toLowerCase() == 'rock') {
    if (computerSelection.toLowerCase() == 'rock') {
      winner = 'Tie';
      tie++; 
    } else if (computerSelection.toLowerCase() == 'paper') {
      winner = 'Computer';
      computerScore++;
    } else {
      winner = 'Player';
      playerScore++;
    }
  } else if (playerSelection.toLowerCase() == 'paper') {
    if (computerSelection.toLowerCase() == 'rock') {
      winner = 'Player';
      playerScore++;
    } else if (computerSelection.toLowerCase() == 'paper') {
      winner = 'Tie';
      tie++;
    } else {
      winner = 'Computer';
      computerScore++;
    }
  } else {
    if (computerSelection.toLowerCase() == 'rock') {
      winner = 'Computer';
      computerScore++;
    } else if (computerSelection.toLowerCase() == 'paper') {
      winner = 'Player';
      playerScore++;
    } else {
      winner = 'Tie';
      tie++;
    }
  }
  // the game will break if the player inputs a string other than rock paper scissors
    console.log('Player: ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)+ '\nComputer: ' + computerSelection + '\nWinner: ' + winner)
}

let playerSelection = "";
let computerSelection = "";

function game() {
  let rounds = 5;
  for (let i = 1; i <= rounds; i++) {
    console.log('Round ' + i);
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    playRound(playerSelection,computerSelection)
  }
  if (playerScore > computerScore) {
    console.log("'Player' wins!\n Score: " + playerScore + ':' + computerScore + '\n Ties: ' + tie)
  } else if (playerScore < computerScore) {
    console.log("'Computer' wins!\n Score: " + computerScore + ':' + playerScore + '\n Ties: ' + tie)
  } else {
    console.log("'Tie!'\n Score: " + computerScore + ':' + playerScore + '\n Ties: ' + tie)
  }
}
