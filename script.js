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
const finalScreen = document.getElementById('final-screen');
const restartButton = document.getElementById('restart-button');

var questionPosition, currentQuestionIndex;

//Eventos
startButton.addEventListener('click', start);
restartButton.addEventListener('click', start);
instructionsButton.addEventListener('click', startQuiz);


//Start screen
function start() {
    finalScreen.classList.add('hide');
    instructions.classList.remove('hide');
    startScreen.classList.add('hide');
}

//Start quiz
function startQuiz() {
    questionContainer.classList.remove('hide'); 
    instructions.classList.add('hide');    
    questionPosition = questions.sort();
    currentQuestionIndex = 0;
    numberQuestion = 1;
    score = 0;
    
    setNextQuestion();
}

//Próxima questão
function setNextQuestion() {
    resetState();
    showQuestion(questionPosition[currentQuestionIndex]);
}

  
//Mostrar questão
function showQuestion(question) {
    questionElement.innerText = question.question;
    questionNumber.innerText = 'Questão 0' + numberQuestion; 
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
    const correctAnswer = clickedButton.dataset.correct;
    questionNumber.innerText = 'Questão ' + numberQuestion; 
    currentQuestionIndex++   
    numberQuestion++

    console.log(questionPosition.length);
    console.log(currentQuestionIndex);

    if(questionPosition.length <= currentQuestionIndex) {
        questionContainer.classList.add('hide');
        finalScreen.classList.remove('hide');
    }

    setNextQuestion();   

     
}


//Resetar respostas
function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    } 
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
        question: 'Qual o nome desse Anime?',
        img: 'img-2.jpg',
        answers: [
            {text: 'Dragon Ball', correct: false},
            {text: 'Bleach', correct: false},
            {text: 'One Piece', correct: true},
            {text: 'Attack on Titan', correct: false}
        ]
    },
    {
        question: 'Qual o nome desse jogo',
        img: 'img-3.jpg',
        answers: [
            {text: 'Devil May Cry', correct: false},
            {text: 'God of War', correct: true},
            {text: 'For Honor', correct: false},
            {text: 'The Last of Us', correct: false}    
        ]
    },
]










