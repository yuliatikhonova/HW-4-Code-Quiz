var questionEl = document.querySelector("#question");
// var answerBtnEl = document.querySelector("#answer-btn");
var answerBtn1 = document.querySelector(".btn1");
var answerBtn2 = document.querySelector(".btn2");
var answerBtn3 = document.querySelector(".btn3");
var answerBtn4 = document.querySelector(".btn4");
var grade = document.querySelector("#grade")
var startBtn = document.querySelector("#start-btn");
var intro = document.querySelector("#intro")
var questionContainer = document.querySelector("#question-container")
var final = document.querySelector("#final")
var score = 0;
var secondsLeft = 75;

//-------------------------------------------------------------------Start
//clicking the start button
startBtn.addEventListener("click", startQuiz);

//function when start button is pressed
function startQuiz() {
    setTimer();
    intro.classList.add("hide");
    questionContainer.classList.remove("hide");
    showQuestions(questions[0]);
}

//-------------------------------------------------------------------Timer
//timer function
function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " " + "seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            questionContainer.classList.add("hide")
            final.classList.remove("hide")

            //showScore and ask for initials
        }
    }, 1000);
}

//------------------------------------------------------------------- Questions and Answers
//Show the questions
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
        answers: [
            { text: "yes", correct: true },
            { text: "no", correct: false },
            { text: "nope", correct: false },
            { text: "nah", correct: false }
        ]
    },
    {
        question: "2nd question?",
        answers: [
            { text: "2yes", correct: true },
            { text: "2no", correct: false },
            { text: "2nope", correct: false },
            { text: "2nah", correct: false }
        ]
    },
    {
        question: "3rd question?",
        answers: [
            { text: "3yes", correct: true },
            { text: "3no", correct: false },
            { text: "3nope", correct: false },
            { text: "3nah", correct: false }
        ]
    },
    {
        question: "4th question?",
        answers: [
            { text: "4yes", correct: true },
            { text: "4no", correct: false },
            { text: "4nope", correct: false },
            { text: "4nah", correct: false }
        ]
    },
    {
        question: "5th question?",
        answers: [
            { text: "5yes", correct: true },
            { text: "5no", correct: false },
            { text: "5nope", correct: false },
            { text: "5nah", correct: false }
        ]
    }
];

//Loop for the array---------------------------//answer check. If correct (count ++; by 5 points) else (secondsLeft --; by 10 sec). Tie it to the showScore
// for (var i = 0; i < question.length; i++) {
//     var response = window.___(question[i].___);
//     if (response == question[i].answer) {
//         score++; 5pt
//         grade.----("Correct")
//     } else {
//         secondsLeft--; 10sec
//         grade.----("Incorrect")
//     }
// }

//------------------------------------------------------------------- Show score and initials
//function to show the score ask for initials
// function showScore(){

// }

// submitting the initials
// show score and initials







