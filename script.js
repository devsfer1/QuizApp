//Váriaveis e constantes
const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen')
const instructions = document.getElementById('instructions');
const instructionsButton = document.getElementById('instructions-button');
const questionElement = document.getElementById('question');
const questionContainer = document.getElementById('questions-container');
var score = 0;
var currentQuestionIndex;

//Eventos
startButton.addEventListener('click', start);
instructionsButton.addEventListener('click', showQuestion);


//Start screen
function start() {
    instructions.classList.remove('hide');
    startScreen.classList.add('hide');
}

//Start quiz
function startQuiz() {
    questionContainer.classList.remove('hide'); 
    instructions.classList.add('hide');    
    currentQuestionIndex = 0;

    showQuestion([currentQuestionIndex]);
}

//Mostrar questão
function showQuestion(question) {
    questionElement.innerText = question.question;
    
}




//Questões
const questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    }
]


var images = [];
images[0] = 'img-1.jpg'

for (i = 0; i < questions.length; i++) {
    
    var img = document.createElement('img');
    img.src = images[i];
    img.className = 'question-img';

    questionContainer.appendChild(img);
}





