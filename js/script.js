let currentQuestion = 0;
let score = 0;
let timeLeft = 1800;
let timer;

const questions = [
{
question: "1.What is the capital of France?",
options: ["Paris", "London", "Berlin", "Rome"],
answer: "Paris",
},
{
question: "2.Who wrote 'Hamlet'?",
options: ["Shakespeare", "Dickens", "Austen", "Tolstoy"],
answer: "Shakespeare",
},
{
question: "3.What is the capital of France?",
options: ["Berlin", "Madrid", "Paris", "Rome"],
answer: "Paris",
},
{
question: "4.Which planet is known as the Red Planet?",
options: ["Earth", "Mars", "Venus", "Jupiter"],
answer: "Mars",
},
{
question: "5.Who discovered gravity?",
options: ["Einstein", "Newton", "Galileo", "Tesla"],
answer: "Newton",
},
{
question: "6.What is the smallest prime number?",
options: ["0", "1", "2", "3"],
answer: "2",
},
{
question: "7.Which gas is most abundant in the Earth's atmosphere?",
options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
answer: "Nitrogen",
},
{
question: "8.Who painted the Mona Lisa?",
options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
answer: "Da Vinci",
},
{
question: "9.What is the largest mammal in the world?",
options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
answer: "Blue Whale",
},
{
question: "10.Which element has the chemical symbol 'O'?",
options: ["Oxygen", "Gold", "Silver", "Iron"],
answer: "Oxygen",
},
{
question: "11.What is the hardest natural substance on Earth?",
options: ["Iron", "Gold", "Diamond", "Quartz"],
answer: "Diamond",
}
];

function startQuiz() {
document.getElementById('welcome-screen').classList.add('hidden');
document.getElementById('quiz-section').classList.remove('hidden');
showQuestion();
startTimer();
}

function showQuestion() {
const questionData = questions[currentQuestion];
document.getElementById('question').innerText = questionData.question;
const optionsContainer = document.getElementById('options');
optionsContainer.innerHTML = "";

questionData.options.forEach(option => {
const button = document.createElement('button');
button.innerText = option;
button.classList.add('bg-gray-200', 'p-4', 'rounded-lg', 'hover\:bg-gray-300');
button.onclick = () => checkAnswer(option);
optionsContainer.appendChild(button);
});

updateProgressBar();
}

function checkAnswer(selectedOption) {
if (selectedOption === questions[currentQuestion].answer) {
score++;
}
nextQuestion();
}

function nextQuestion() {
if (currentQuestion < questions.length - 1) {
currentQuestion++;
showQuestion();
} else {
showResult();
}
}

function prevQuestion() {
if (currentQuestion > 0) {
currentQuestion--;
showQuestion();
}
}

function showResult() {
clearInterval(timer);
document.getElementById('quiz-section').classList.add('hidden');
document.getElementById('result-screen').classList.remove('hidden');
document.getElementById('score').innerText = score;
}

function restartQuiz() {
currentQuestion = 0;
score = 0;
timeLeft = 1800;
document.getElementById('result-screen').classList.add('hidden');
document.getElementById('welcome-screen').classList.remove('hidden');
}

function updateProgressBar() {
const progress = document.getElementById('progress');
progress.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
}

function startTimer() {
timer = setInterval(() => {
timeLeft--;
const minutes = Math.floor(timeLeft / 60);
const seconds = timeLeft % 60;
document.getElementById('time').innerText = `${minutes} min ${seconds} `;
if (timeLeft <= 0) {
clearInterval(timer);
showResult();
}
}, 1000);
}
