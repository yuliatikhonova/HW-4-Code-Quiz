var question = document.querySelector("#question");
var answer = document.querySelector("#answer");
var grade = document.querySelector("#grade")
var startBtn = document.querySelector("#start-btn");
var score = 0;
var secondsLeft = 75;

//-------------------------------------------------------------------
//clicking the start button
startBtn.addEventListener("click", function() { 
    startQuiz();
});

//function when start button is pressed
function startQuiz() {
    setTimer();

}

//-------------------------------------------------------------------
//timer function
function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " " + "seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            //function showScore
        }
    }, 1000);

}

//function to show the score and get initials
//  function showScore(){}

//keeping score function
// function keepScore() {}

//-------------------------------------------------------------------
//function for the questions



