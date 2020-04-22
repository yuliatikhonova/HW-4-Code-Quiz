// var question = document.querySelector("#question");
// var answer = document.querySelector("#answer");
// var grade = document.querySelector("#grade")
var startBtn = document.querySelector("#start-btn");
var intro = document.querySelector("#intro")
var questionContainer = document.querySelector("#question-container")
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
    setNextQuestion()
}

//-------------------------------------------------------------------Timer
//timer function
function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " " + "seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            //function showScore and ask for initials
        }
    }, 1000);

}

//------------------------------------------------------------------- Questions


//Array for questions and answers

//Loop for the array---------------------------
//answer check. If correct (count ++; by 5 points) else (secondsLeft --; by 10 sec). Tie it to the showScore
// for ( var i = 0; i < question.length; i++) {
//     var response = window.___(question[i].___);
//     if(response == question[i].answer){
//         score++; 5pt
//         grade.----("Correct")
//     } else{
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







