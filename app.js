const buttons = document.querySelector('.buttons');
const playerImage = document.getElementById('player_img');
const computerImage = document.getElementById('computer_img');
const middleText = document.querySelector('.middle_text');
const computerCount = document.querySelector('.computer--count');
const playerCount = document.querySelector('.player--count');
const resetButton = document.getElementById('reset_button');

buttons.addEventListener('click', (e) => {
    if (e.target.classList.contains('rock')){
        playerImage.src = './img/rock_player.png'
        computerPlay('rock')
    }
    if (e.target.classList.contains('paper')) {
        playerImage.src = './img/paper_player.png'
        computerPlay('paper')
    }
    if (e.target.classList.contains('scissors')) {
        playerImage.src = './img/scissors_player.png'
        computerPlay('scissors')
    }
})

function computerPlay(player) {
    let arr = ['rock', 'paper', 'scissors']
    let computer = arr[Math.floor(Math.random() * 3)]
    computerImage.src = `./img/${computer}_computer.png`
    count(player, computer)
}

let playerWins = 0;
let computerWins = 0;
function count (player, computer) {
    if (player === computer) {
        middleText.innerHTML = `It's a tie`
    } else if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
        playerWins++;
        playerCount.innerHTML = `${playerWins}`
        middleText.innerHTML = `You win, computer's choice was ${computer}`
    } else  {
        computerWins++;
        computerCount.innerHTML = `${computerWins}`
        middleText.innerHTML = `You lose, computer's choice was ${computer}`
    } 
    if (playerWins === 5 || computerWins === 5){
        winner(playerWins)
    }
}

function winner (playerWins){
    if (playerWins === 5) {
        middleText.innerHTML = `You won, congrats <br> resetting...`
    } else {
        middleText.innerHTML = `You lost, you'll get it next time <br> resetting...`
    }
    setTimeout(() => window.location.reload(), 2000);
}

resetButton.addEventListener("click" , () => {
    window.location.reload();
})