let computerChoice = "";
let userChoice = "";

let computerScore = 0;
let userScore = 0;

const buttons = document.querySelector("#buttons");
const scoreBoard = document.querySelector("#scores");

buttons.addEventListener("click", (event) => {
    let choice = event.target.name;
    if (choice === "Rock"
        || choice === "Paper"
        || choice === "Scissors"
    ) {
        playRound(choice);
    }
});

function playRound(rpsButton) {
    computerChoice = getRandomChoice();
    console.log(`Computer's choice: ${computerChoice}`);

    userChoice = rpsButton;
    console.log(`User's choice: ${userChoice}`);

    compareChoices(userChoice, computerChoice);
};

function resetGame() {
    computerChoice = "";
    userChoice = "";
    computerScore = 0;
    userScore = 0;
    scoreBoard.innerText = `Computer: ${computerScore}\nYou: ${userScore}`;
    console.info("game reset")
    alert(`Scores have been reset.`);
};

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

function compareChoices(user, pc) {
    let message = "";

    if (pc === "Rock" && user === "Paper"                 // user wins
        || pc === "Paper" && user === "Scissors"
        || pc === "Scissors" && user === "Rock"
    ) {
        message = `You won!\n${user} beats ${pc}.`;
        userScore++;
    } else if (user === "Rock" && pc === "Paper"          // pc wins
        || user === "Paper" && pc === "Scissors"
        || user === "Scissors" && pc === "Rock"
    ) {
        message = `Computer won!\n${pc} beats ${user}.`;
        computerScore++;
    } else if (user === pc) {                               // draw
        message = `That was a draw.\nYou both choose ${user}.`;
    } else {
        console.warn("nobody won and no draw?\nprobably user canned");
    }

    showScore(message);
};

function showScore(msg) {
    console.log(`Computer: ${computerScore}\nYou: ${userScore}`);

    if (userScore < 5 && computerScore < 5) {
        scoreBoard.innerText = `${msg}\n\nComputer: ${computerScore}\nYou: ${userScore}`;
    } else {
        let winner = "";
        userScore === 5 ? winner = "You" : winner = "The Computer";
        alert(`${winner} won 5 games.`)
        resetGame();
    }
}