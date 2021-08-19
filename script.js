//Javascript section
// Different HTML elements to be changed
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var highscoreInputname = document.getElementById("initials");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");


// Quiz Question Section 
var quizQuestions = [{
    question: "What tag defines the body of the HTML document?",
    choiceA: "body",
    choiceB: "footer",
    choiceC: "header",
    choiceD: "title",
    correctAnswer: "a"},
    {
    question: "What does HTML stand for?",
    choiceA: "Hyper Tool Markup Language",
    choiceB: "Hyper Text Makeup Language",
    choiceC: "Hyper Text Markup Langauge",
    choiceD: "Home Text Markuo Language",
    correctAnswer: "c"},
    {
    question: "Choose the correct HTML tag for the largest heading.",
    choiceA: "h4",
    choiceB: "h6",
    choiceC: "h2",
    choiceD: "h1",
    correctAnswer: "d"},
    {
    question: "What does CSS stand for?",
    choiceA: "Cascading Style Sheets",
    choiceB: "Cascading Style Scores",
    choiceC: "Contionuing Style Sheets",
    choiceD: "Style Cascading Sheets",
    correctAnswer: "a"},
    {
    question: "Which of the following are used to determine the height of an image?",
    choiceA: "width",
    choiceB: "height",
    choiceC: "border",
    choiceD: "hover",
    correctAnswer: "b"},
    {
    question: "The CSS property used to control the elements font-size is",
    choiceA: "font-size",
    choiceB: "font-height",
    choiceC: "font-color",
    choiceD: "none of the above",
    correctAnswer: "a"},
    {
    question: "Inside which HTML element do we put the javascript?",
    choiceA: "javascript",
    choiceB: "script",
    choiceC: "js",
    choiceD: "scripting",
    correctAnswer: "b"},
    {
    question: "Which of the following is not a javascript data type?",
    choiceA: "Boolean",
    choiceB: "Number",
    choiceC: "Underfined",
    choiceD: "Float",
    correctAnswer: "d"},
    {
    question: "How do you create an unordered list in HTML?",
    choiceA: "li",
    choiceB: "ol",
    choiceC: "i",
    choiceD: "ul",
    correctAnswer: "d"},
    {
    question: "In Javascript what is a block of code called that is used to perform a certain task?",
    choiceA: "String",
    choiceB: "Variable",
    choiceC: "Function",
    choiceD: "Declearation",
    correctAnswer: "a"},
];

// Other variables
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var score = 0;
var correct;

// Ask BCS helped with this part - Generates the questions and answers
function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

//Start Quiz - Starts the ticker, hides the start button, displays the first question

function startQuiz() {
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    //Timer - Some help with AskBCS
    timerInterval= setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        } 
    }, 1000);
    quizBody.style.display = "block";
}

// Ending Screen for the end of the timer.

function showScore(){
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

// the high score should go to another page, possibly fix later in notes
// Ask BCS helped with this part

submitScoreBtn.addEventListener("click", function highscore(){  
    if(highscoreInputName.value === "") {
        alert("Initials cannot be blank");
        return false;
    }else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score
        };
    
        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";
        
        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();
    }   
});

// Clears the high score list, using the javascript during weekly lessons
function generateHighscores(){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);
    }
}

// only showing the highs score page 

function showHighscore() {
    startQuizDiv.style.display = "none";
    gameoverDiv.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    endGameBtns.style.display = "flex";
    generateHighscores();
}

// Clear All high scores

function clearscore() {
    window.localstorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
}

// Resets all the values and seems like it is starting new
function replayQuiz(){
    highscoreContainer.style.display = "none";
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 60;
    score = 0;
    currentQuestionIndex = 0;
}


// Check Answer function
function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;
    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("That Is Correct!");
        currentQuestionIndex++;
        generateQuizQuestion();
        //display in the results div that the answer is correct.
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        alert("That Is Incorrect.")
        currentQuestionIndex++;
        generateQuizQuestion();
        //display in the results div that the answer is wrong.
    }else{
        showScore();
    }
}

//Starts Quiz again
startQuizButton.addEventListener("click",startQuiz);