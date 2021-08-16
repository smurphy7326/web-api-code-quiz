//Javascript section
// Different HTML elements to be changed
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var
var
var
var
var
var

// Quiz Question Section 
// Make sure there are 10 questions
var quizQuestions = [{
    question:
    choiceA:
    ChoiceB:
    ChoiceC:
    ChoiceD:
}]

// Ticker portion of the code Had AskBCS help with this portion
tickerinterval = setInterval(function() {
    timeLeft--;
    quizTimer.textContent = "Time left: " + timeLeft;

    if(timeLeft === 0) {
        clearInterval(timerInterval);
        showscore();
    }
}