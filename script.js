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
        question: "1st question?",
        id: 0,
        answers: [
            { text: "yes", correct: true },
            { text: "no", correct: false },
            { text: "nope", correct: false },
            { text: "nah", correct: false }
        ]
    },
    {
        question: "2nd question?",
        id: 1,
        answers: [
            { text: "2nope", correct: false},
            { text: "2no", correct: false },
            { text: "2yes", correct: true },
            { text: "2nah", correct: false }
        ]
    },
    {
        question: "3rd question?",
        id: 2,
        answers: [
            { text: "3no", correct: false },
            { text: "3yes", correct: true },
            { text: "3nope", correct: false },
            { text: "3nah", correct: false }
        ]
    },
    {
        question: "4th question?",
        id: 3,
        answers: [
            { text: "4yes", correct: true },
            { text: "4no", correct: false },
            { text: "4nope", correct: false },
            { text: "4nah", correct: false }
        ]
    },
    {
        question: "5th question?",
        id: 4,
        answers: [
            { text: "5nah", correct: false },
            { text: "5no", correct: false },
            { text: "5nope", correct: false },
            { text: "5yes", correct: true }
        ]
    }
];

//-------------------------------------------------------------------Final Section

//------------------
var highScore = [];
var finalHighScore= document.querySelector("#highScore");
var initialsInput = document.getElementById("initials").value;
var turnIn = document.querySelector("#turnIn");
//---------------------

function showFinalSection() {
    final.classList.remove('hide')
    form.classList.remove("hide")
    document.getElementById("finalScore").innerHTML = this.score;
    
}

turnIn.addEventListener("click", showHighScore);



//------------------------------------------------------------------- Show score and initials

function showHighScore() {
    final.classList.add('hide')
    form.classList.add("hide")
    finalHighScore.classList.remove('hide')
    function callMe () {
        var value = initialsInput;
        console.log(value)
    }
    callMe()
}

