const buttons = document.querySelector('.buttons');
const playerImage = document.getElementById('player_img');
const computerImage = document.getElementById('computer_img');
const middleText = document.querySelector('.middle_text');
const computerCount = document.querySelector('.computer--count');
const playerCount = document.querySelector('.player--count');

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
        console.log('Tie');
    } else if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
        console.log({playerWins});
        playerWins++;
        playerCount.innerHTML = `${playerWins}`
        console.log(`You win, computer's choice was ${computer}`);
        middleText.innerHTML = `You win, computer's choice was ${computer}`
    } else  {
        console.log({computerWins});
        computerWins++;
        computerCount.innerHTML = `${computerWins}`
        console.log(`You lose, computer's choice was ${computer}`);
        middleText.innerHTML = `You lose, computer's choice was ${computer}`
    } 
    if (playerWins === 5 || computerWins === 5){
        winner(playerWins)
    }
}

function winner (x){
    if (x === 5) {
        middleText.innerHTML = `You won, congrats`
    } else {
        middleText.innerHTML = `You lost, you'll get it next time`
    }
}
