const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playButton = document.querySelector("#intro button");
        const introScreen = document.querySelector("#intro");
        const matchScreen = document.querySelector("#match");
        
        playButton.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            matchScreen.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll("#options button");
        const playerHand = document.querySelector("#player-hand");
        const computerHand = document.querySelector("#computer-hand");
        
        const computerOption = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                playerHand.src = "img/rock.png";
                computerHand.src = "img/rock.png";
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOption[computerNumber];

                const hands = document.querySelectorAll("#hands img");

                hands.forEach(hand => {
                    hand.addEventListener("animationend", function() {
                        this.style.animation = null;
                    });
                });

                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                    playerHand.src = `img/${this.textContent}.png`;
                    computerHand.src = `img/${computerChoice}.png`;
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation  = "shakeComputer 2s ease";

            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector("#player-score p");
        const computerScore = document.querySelector("#computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector("#winner");
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie.";
            return;
        } else if (playerChoice === "rock" && computerChoice == "scissors") {
            winner.textContent = "Player wins";
            pScore++;
        } else if (playerChoice === "scissors" && computerChoice === "paper") {
            winner.textContent = "Player wins.";
            pScore++;
        } else if (playerChoice === "paper" && computerChoice === "rock") {
            winner.textContent = "Player wins.";
            pScore++;
        } else {
            winner.textContent = "Computer wins";
            cScore++;
        }

        updateScore();
        return;
    };

    startGame();
    playMatch();
}

game();