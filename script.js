//Váriaveis e constantes
const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen')
const instructions = document.getElementById('instructions');
const instructionsButton = document.getElementById('instructions-button');
const questionElement = document.getElementById('question');
const questionNumber = document.getElementById('question-number');
const questionContainer = document.getElementById('questions-container');
const questionImg = document.getElementById('question-img');
var score = 0;

var questionPosition, currentQuestionIndex;

//Eventos
startButton.addEventListener('click', start);
instructionsButton.addEventListener('click', startQuiz);


//Start screen
function start() {
    instructions.classList.remove('hide');
    startScreen.classList.add('hide');
}

//Start quiz
function startQuiz() {
    questionContainer.classList.remove('hide'); 
    instructions.classList.add('hide');    
    questionPosition = questions.sort()
    currentQuestionIndex = 0;
    
    showQuestion(questionPosition[currentQuestionIndex]);
}

//Mostrar questão
function showQuestion(question) {
    questionElement.innerText = question.question;
    questionNumber.innerText = currentQuestionIndex + 1;   
}



//Questões
const questions = [
    {
        question: 'Qual o nome desse animal',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    },
    {
        question: 'Questão 2',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    },
    {
        question: 'Questão 3',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    },
]



var images = [];
images[0] = 'img-1.jpg';

for(let i = 0 ; i <= questions.length ; i++) {

    var img = document.createElement('img');
    img.src = images[i];

    questionContainer.appendChild[img];

}






