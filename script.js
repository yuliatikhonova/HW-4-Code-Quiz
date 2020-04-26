var questionEl = document.querySelector("#question");
var answerBtn1 = document.querySelector(".btn1");
var answerBtn2 = document.querySelector(".btn2");
var answerBtn3 = document.querySelector(".btn3");
var answerBtn4 = document.querySelector(".btn4");
// var grade = document.querySelector("#grade")
var startBtn = document.querySelector("#start-btn");
var intro = document.querySelector("#intro")
var questionContainer = document.querySelector("#question-container");
var final = document.querySelector("#final");
var form = document.querySelector("#form");

var score = 0;
var secondsLeft = 75;
var currentQuestion;

//-------------------------------------------------------------------Start
//clicking the start button
startBtn.addEventListener("click", startQuiz);

//function when start button is pressed
function startQuiz() {
    setTimer();
    intro.classList.add("hide");
    timer.classList.remove("hide");
    questionContainer.classList.remove("hide");
    setCurrentQuestion(0);
}

//-------------------------------------------------------------------Timer
//timer function
function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " " + "seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            secondsLeft.classList.add("hide")
            questionContainer.classList.add("hide")
            final.classList.remove("hide")
        }
    }, 650);
}

//-------------------------------------------------------------------Taking the quiz
//when clicking on the answer, go to the next question
answerBtn1.addEventListener('click', function () { goToNextQuestion(0) });
answerBtn2.addEventListener('click', function () { goToNextQuestion(1) });
answerBtn3.addEventListener('click', function () { goToNextQuestion(2) });
answerBtn4.addEventListener('click', function () { goToNextQuestion(3) });

function goToNextQuestion(answerIndex) {

    var questionIndex = getCurrentQuestionIndex();

    if (questions[questionIndex].answers[answerIndex].correct === true){
        score = score + 5;;
    }
    else {
        secondsLeft = secondsLeft - 10;
    }

    if (questionIndex < 4) {
        setCurrentQuestion(questionIndex + 1);
    }
    else {
        questionContainer.classList.add("hide");
        timer.classList.add("hide");
        showFinalSection()
    }
}

// sets what the next question will be from the current questions index
function setCurrentQuestion(index) {
    currentQuestion = questions[index];
    showQuestions(questions[index]);
}

// gets the current question index from id field in the questions object
function getCurrentQuestionIndex() {
    return currentQuestion.id;
}


//------------------------------------------------------------------- Questions and Answers
//Show the questions and answers
function showQuestions(passQuestion) {
    questionEl.innerText = passQuestion.question;
    answerBtn1.innerText = passQuestion.answers[0].text;
    answerBtn2.innerText = passQuestion.answers[1].text;
    answerBtn3.innerText = passQuestion.answers[2].text;
    answerBtn4.innerText = passQuestion.answers[3].text;
}


//Array for questions and answers
var questions = [
    {
        question: "What are the symbols for surrounding values in an array?",
        id: 0,
        answers: [
            { text: "[]", correct: true },
            { text: "{}", correct: false },
            { text: "()", correct: false },
            { text: "||", correct: false }
        ]
    },
    {
        question: "How do we return a value from a function?",
        id: 1,
        answers: [
            { text: "By adding the value and then the return on the next line.", correct: false},
            { text: "By doing nothing.", correct: false },
            { text: "By adding the return keyword followed by the value to return.", correct: true },
            { text: "By overthinking it", correct: false }
        ]
    },
    {
        question: "Which type of value can a function return?",
        id: 2,
        answers: [
            { text: "Can only return strings.", correct: false },
            { text: "Can return any type of value.", correct: true },
            { text: "Can only return booleans.", correct: false },
            { text: "Can only return numbers.", correct: false }
        ]
    },
    {
        question: "What value does prompt return?",
        id: 3,
        answers: [
            { text: "Can only return strings.", correct: true },
            { text: "Can return any type of value.", correct: false },
            { text: "Can only return booleans.", correct: false },
            { text: "Can only return numbers.", correct: false }
        ]
    },
    {
        question: "What do you use console.log for?",
        id: 4,
        answers: [
            { text: "To pop an alert on the page.", correct: false },
            { text: "To write code and save it.", correct: false },
            { text: "To consult you.", correct: false },
            { text: "To log a value on the console", correct: true }
        ]
    }
];

//-------------------------------------------------------------------Final Section

//------------------
var finalHighScore= document.querySelector("#highScore");
var turnIn = document.querySelector("#turnIn");
//---------------------

function showFinalSection() {
    final.classList.remove('hide')
    document.getElementById("finalScore").innerHTML = this.score;
    
}

function submitInitials () {
    var initialsInput = document.getElementById("initials").value;
    document.getElementById("initialText").innerHTML = initialsInput + "! with the Score of:"+ score;
}

turnIn.addEventListener("click", showHighScore);

//------------------------------------------------------------------- Show score and initials

function showHighScore() {
    final.classList.add('hide')
    finalHighScore.classList.remove('hide')
}


