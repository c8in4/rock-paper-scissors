let computerChoice = "";
let userChoice = "";

let computerScore = 0;
let userScore = 0;

const playButton = document.querySelector("#playButton");
const resetButton = document.querySelector("#resetButton");
playButton.addEventListener("click", playRound);
resetButton.addEventListener("click", resetGame);

function playRound() {
    computerChoice = getRandomChoice();
    console.log(`Computer's choice: ${computerChoice}`);

    userChoice = getUserChoice();
    checkUserChoice(userChoice);
    console.log(`User's choice: ${userChoice}`);

    compareChoices(userChoice, computerChoice);

    showScore();
};

function resetGame() {
    computerChoice = "";
    userChoice = "";
    computerScore = 0;
    userScore = 0;
    console.info("game reset")
};

// RANDOM choice /////////////////////////////////////
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

// get user input ///////////////////////////////////
function getUserChoice() {
    return prompt("Choose between 'Rock', 'Paper' and 'Scissors':");
}

function checkUserChoice(input) {
    input = input.replaceAll(" ", "").toLowerCase();        // try - catch?

    while (input != "rock"
        && input != "paper"
        && input != "scissors"
    ) {
        input = prompt("Please choose from 'Rock', 'Paper' and 'Scissors' only.");
        input = input.replaceAll(" ", "").toLowerCase();   // try - catch?
    }

    switch (input) {
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

// compare choices, increment scores /////////////////
// show result of comparison (including boths choices)
function compareChoices(user, pc) {
    if (pc === "Rock" && user === "Paper"                 // user wins
        || pc === "Paper" && user === "Scissors"
        || pc === "Scissors" && user === "Rock"
    ) {
        alert(`You won!\n${user} beats ${pc}.`);
        userScore++;
    } else if (user === "Rock" && pc === "Paper"          // pc wins
        || user === "Paper" && pc === "Scissors"
        || user === "Scissors" && pc === "Rock"
    ) {
        alert(`Computer won!\n${pc} beats ${user}.`);
        computerScore++;
    } else if (user === pc) {                               // draw
        alert(`That was a draw.\nYou both choose ${user}.`);
    } else {
        console.warn("nobody won and no draw?\nprobably user canned");
    }
};

// show score
function showScore() {
    alert(`Computer: ${computerScore}\nYou: ${userScore}`);
    console.log(`Computer: ${computerScore}\nYou: ${userScore}`);
}