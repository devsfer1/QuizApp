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
var screenPoints = document.getElementById('points');
const finalPoints = document.getElementById('final-points');

var questionPosition, currentQuestionIndex;

//Eventos
startButton.addEventListener('click', start);
restartButton.addEventListener('click', start);
instructionsButton.addEventListener('click', startQuiz);


//Start screen
function start() {
    finalScreen.classList.add('hide');
    screenPoints.classList.add('hide');
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
    points = 0;
    
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
    screenPoints.classList.remove('hide');
    screenPoints.innerText = 'Pontos: ' + points;
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

//Final screen



//Respostas
function selectAnswer(e) {  
    const clickedButton = e.target;     
    const correctAnswer = clickedButton.dataset.correct;
    questionNumber.innerText = 'Questão ' + numberQuestion; 
    currentQuestionIndex++   
    numberQuestion++
    

    if(correctAnswer) {
        points = points + 10;
    }

    screenPoints.innerText = 'Pontos: ' + points;
    
    if(questionPosition.length <= currentQuestionIndex) {
        questionContainer.classList.add('hide');
        finalScreen.classList.remove('hide');
        screenPoints.classList.add('hide');
        finalPoints.innerText = 'Você fez uma pontuação total de: ' + points + ' Pontos'
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
        question: 'Quantos episódios tem a saga Star-Wars?',
        img: 'img-1.jpg',
        answers: [
            {text: '6', correct: false},
            {text: '8', correct: false},
            {text: '7', correct: false},
            {text: '9', correct: true}
        ],
        
    },
    {
        question: 'Qual o nome da irmã da Gamora, do Avangers?',
        img: 'img-2.jpg',
        answers: [
            {text: 'Scarlet', correct: false},
            {text: 'Nebulosa', correct: false},
            {text: 'Nebula', correct: true},
            {text: 'Tempestade', correct: false}
        ]
    },
    {
        question: 'Qual o nome da mascote da Equipe Rocket em Pokemon?',
        img: 'img-3.jpg',
        answers: [
            {text: 'Mewtwo', correct: false},
            {text: 'Charmander', correct: false},
            {text: 'Garfield', correct: false},
            {text: 'Meowth', correct: true}    
        ]
    },
    {
        question: 'Qual o nome do metal que envolve o esqueleto e garras de Wolverine?',
        img: 'img-4.png',
        answers: [
            {text: 'Titanium', correct: false},
            {text: 'Adamantium', correct: true},
            {text: 'Vibranium', correct: false},
            {text: 'Platine', correct: false}    
        ]
    },
    {
        question: 'O Sonic é um...',
        img: 'img-5.jpg',
        answers: [
            {text: 'Rato selvagem', correct: false},
            {text: 'Tamanduá', correct: false},
            {text: 'Tatu', correct: false},
            {text: 'Porco-espinho', correct: true}    
        ]
    },
    {
        question: 'Em qual filme Thanos apareceu pela primeira vez?',
        img: 'img-6.jpg',
        answers: [
            {text: 'Thor 2', correct: false},
            {text: 'Vingadores', correct: true},
            {text: 'Guardiões da galáxia vol I', correct: false},
            {text: 'Homem de ferro', correct: false}    
        ]
    },
    {
        question: 'Em que ano a Disney comprou a Marvel?',
        img: 'img-7.jpg',
        answers: [
            {text: '2015', correct: false},
            {text: '2017', correct: false},
            {text: '2010', correct: false},
            {text: '2009', correct: true}    
        ]
    },
    {
        question: 'Qual o nome do Dragão de O Hobbit?',
        img: 'img-8.jpg',
        answers: [
            {text: 'Gollum', correct: false},
            {text: 'Smeagol', correct: false},
            {text: 'Smaug', correct: true},
            {text: 'Godzilla', correct: false}    
        ]
    },
    {
        question: 'No Universo Cinematográfico da Marvel, qual dos personagens abaixo conseguiu levantar o Mjölnir de Thor?',
        img: 'img-9.jpg',
        answers: [
            {text: 'Viúva negra', correct: false},
            {text: 'Homem de Ferro', correct: false},
            {text: 'Thanos', correct: false},
            {text: 'Visão', correct: true}    
        ]
    },
    {
        question: 'Quem é esse personagem de Star wars?',
        img: 'img-10.jpg',
        answers: [
            {text: 'P3-CO', correct: false},
            {text: 'PO-C3', correct: false},
            {text: 'C3-PO', correct: true},
            {text: 'SO-P3', correct: false}    
        ]
    }
]










