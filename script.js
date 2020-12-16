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
  console.log(seconds)
  console.log(hand)
}

function playRound(playerSelection, computerSelection) {
  // your code here!
  let winner = "";
  // nested if statment decides the winner 
  if (playerSelection.toLowerCase() == 'rock') {
    if (computerSelection.toLowerCase() == 'rock') {
      winner = 'Tie';
    } else if (computerSelection.toLowerCase() == 'paper') {
      winner = 'Computer';
    } else {
      winner = 'Player';
    }
  } else if (playerSelection.toLowerCase() == 'paper') {
    if (computerSelection.toLowerCase() == 'rock') {
      winner = 'Player';
    } else if (computerSelection.toLowerCase() == 'paper') {
      winner = 'Tie';
    } else {
      winner = 'Computer';
    }
  } else {
    if (computerSelection.toLowerCase() == 'rock') {
      winner = 'Computer';
    } else if (computerSelection.toLowerCase() == 'paper') {
      winner = 'Player';
    } else {
      winner = 'Tie';
    }
  }
  // the game will break if the player inputs a string other than rock paper scissors
    console.log(playerSelection, computerSelection, winner)
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game() {
  let rounds = 5;
  for (let i = 1; i <= rounds; i++) {
    console.log('Round ' + i);
    playRound(playerSelection,computerSelection)
  }
}
