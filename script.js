//Váriaveis e constantes
const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen')
const instructions = document.getElementById('instructions');
const instructionsButton = document.getElementById('instructions-button');
const questionElement = document.getElementById('question');
const questionNumber = document.getElementById('question-number');
const questionContainer = document.getElementById('questions-container');
const questionImg = document.getElementById('question-img');
const answerButtonsElement = document.getElementById('answer-buttons');
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
    questionPosition = questions.sort();
    currentQuestionIndex = 0;
    
    showQuestion(questionPosition[currentQuestionIndex]);
}

//Mostrar questão
function showQuestion(question) {
    questionElement.innerText = question.question;
    questionNumber.innerText = 'Questão' + currentQuestionIndex + 1; 
    questionImg.src = question.img;

    //Mostrar respostas
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

//Respostas
function selectAnswer(e) {  
    const clickedButton = e.target;       
    const correctButton = clickedButton.dataset.correct;
}


//Questões
const questions = [
    {
        question: 'Qual o nome dessa série de filmes?',
        img: 'img-1.jpg',
        answers: [
            {text: 'Harry Potter', correct: true},
            {text: 'Percy Jackson', correct: false},
            {text: 'Divergente', correct: false},
            {text: 'Jogos Vorazes', correct: false}
        ],
        
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









