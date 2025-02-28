// Initialize Telegram Web App
const tg = window.Telegram.WebApp;

// Expand the web app to full screen
tg.expand();

// Example: Display a welcome message
tg.MainButton.setText("Start Game").show().onClick(() => {
    startGame();
});

// Example: Start the game
function startGame() {
    tg.MainButton.hide();
    displayQuestion();
}

// Example: Display a question
function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question").innerText = question.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(index));
        optionsDiv.appendChild(button);
    });
}

// Example: Check the selected answer
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    if (selectedIndex === question.correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

// Example: End the game
function endGame() {
    document.getElementById("question").innerText = `Game Over! Your score: ${score}/${questions.length}`;
    document.getElementById("options").innerHTML = "";
    tg.MainButton.setText("Play Again").show().onClick(() => {
        currentQuestion = 0;
        score = 0;
        startGame();
    });
}

// Example: Questions array
const questions = [
    {
        question: "What is the capital of Kazakhstan?",
        options: ["Almaty", "Astana", "Shymkent"],
        correct: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter"],
        correct: 1
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain"],
        correct: 1
    },
];

let currentQuestion = 0;
let score = 0;

// Start the game
startGame();