let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)

    switch (computerChoice) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors'
        default:
            console.error("Something went wrong with the computer's Choice.")
    }
}

// function getHumanChoice() {
//     let humanChoice = ''
//     do {
//         humanChoice = prompt('Type in "Rock", "Paper" or "Scissors".')
//     }
//     while (!(capitalizeWord(humanChoice) == 'Rock' || 'Paper' || 'Scissors'))

//     return capitalizeWord(humanChoice)
// }

function capitalizeWord(word) {
    const lowerCaseWord = word.toLowerCase()
    const transformedWord = lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1)
    return transformedWord
}

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
    console.log(`Human's choice: ${humanChoice}\nComputer's choice: ${computerChoice}`)

    let winner = ''

    if (
        (humanChoice == 'Rock' && computerChoice == 'Paper') ||
        (humanChoice == 'Paper' && computerChoice == 'Scissors') ||
        (humanChoice == 'Scissors' && computerChoice == 'Rock')
    ) {
        winner = 'Computer'
        computerScore++
    } else if (
        (computerChoice == 'Rock' && humanChoice == 'Paper') ||
        (computerChoice == 'Paper' && humanChoice == 'Scissors') ||
        (computerChoice == 'Scissors' && humanChoice == 'Rock')
    ) {
        winner = 'Human'
        humanScore++
    } else {
        winner = 'Nobody'
    }

    console.log(`${winner} won.`)
    updateOutputContainer(humanChoice, computerChoice)
    return winner
}

// function playGame() {
//     while (humanScore < 5 && computerScore < 5) {
//         playRound()
//         console.log(`Human: ${humanScore}\nComputer: ${computerScore}`)
//     }
//     finishGame()
// }

function finishGame() {
    if (humanScore == 5) {
        alert(`Human won.`)
    }
    if (computerScore == 5) {
        alert(`Computer won.`)
    }
    if (confirm(`Reset game?`)) resetGame()
}

function resetGame() {
    humanScore = 0
    computerScore = 0
}

const rpsButtonContainer = document.querySelector('#rpsButtonContainer')

rpsButtonContainer.addEventListener('click', (event) => {
    let humanChoice = capitalizeWord(event.target.id)
    playRound(humanChoice)
})

const outputContainer = document.querySelector('#outputContainer')
const choicesPara = document.createElement('p')
const scoresPara = document.createElement('p')

function updateOutputContainer(humanChoice, computerChoice) {
    choicesPara.innerText = `You chose: ${humanChoice}\nComputer chose: ${computerChoice}`
    scoresPara.innerText = `Your score: ${humanScore}\nComputer's score: ${computerScore}`

    outputContainer.append(choicesPara, scoresPara)
}