// get computer RANDOM choice ////////////////////////
let computerChoice = getRandomChoice();

function getRandomChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
};

console.log(`Computer's choice: ${computerChoice}`);

// get user input ///////////////////////////////////
// IMPORTANT
// IMPORTANT what if user types in some bs?
// IMPORTANT
let userChoice = prompt("Choose between 'Rock', 'Paper' and 'Scissors':");
userChoice != null ? getUserChoice(userChoice): console.warn("user canceled");

function getUserChoice(userInput) {
    userInput.toLowerCase();
    while (userInput != "rock"
        && userInput != "paper"
        && userInput != "scissors"
    ) {
        userInput = prompt("Please choose from 'Rock', 'Paper' and 'Scissors' only.").toLowerCase();
    }

    switch (userInput) {
        case "rock":
            userChoice = "Rock";
            break;
        case "paper":
            userChoice = "Paper";
            break;
        case "scissors":
            userChoice = "Scissors";
            break;
    }
};

console.log(`User's choice: ${userChoice}`);

// compare the 2 /////////////////////////////////////
// keep track of scores
let computerScore = 0;
let userScore = 0;

function playRound(user, pc) {
    if (pc === "Rock" && user === "Paper"
        || pc === "Paper" && user === "Scissors"
        || pc === "Scissors" && user === "Rock"
    ) {
        // user wins
        alert(`You won!\n${user} beats ${pc}.`);
        userScore++;
    } else if (user === "Rock" && pc === "Paper"
        || user === "Paper" && pc === "Scissors"
        || user === "Scissors" && pc === "Rock"
    ) {
        // pc wins
        alert(`Computer won!\n${pc} beats ${user}.`);
        computerScore++;
    } else if (user === pc) {
        // draw
        alert(`That was a draw.\nYou both choose ${user}.`);
    } else {
        console.warn("nobody won and on draw?\nprobably user canned");
    }

    // alert score?
};

playRound(userChoice, computerChoice);

// show result ///////////////////////////////////////
// show result of comparison (including boths choices)
// show score