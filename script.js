//Javascript section
// Different HTML elements to be changed
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var highscoreInputname = document.getElementById("initials");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("highscore-Page");
var quizTicker = document.getElementById("ticker");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreDisplayName = document.getElementById("highscore-initials");
var buttonA = document.getElementById("A");
var buttonB = document.getElementById("B");
var buttonC = document.getElementById("C");
var buttonD = document.getElementById("D");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");

// Quiz Question Section 
// Make sure there are 10 questions
var quizQuestions = [{
    question:"What tag defines the body of the HTML document?",
    choiceA:"<body></body>",
    choiceB:"<footer></footer?",
    choiceC:"<header></header>",
    choiceD:"<title></title>",
    correctAnswer: "A"},

    {question: "What does HTML stand for?",
    choiceA: "Hyper Tool Markup Language",
    choiceB: "Hyper Text Makeup Language",
    choiceC: "Hyper Text Markup Langauge",
    choiceD: "Home Text Markuo Language",
    correctAnswer: "C"},

    {question: "Choose the correct HTML tag for the largest heading.",
    choiceA: "<h4>",
    choiceB: "<h6>",
    choiceC: "<h2>",
    choiceD: "<h1>",
    correctAnswer: "D"},

    {question: "What does CSS stand for?",
    choiceA: "Cascading Style Sheets",
    choiceB: "Cascading Style Scores",
    choiceC: "Contionuing Style Sheets",
    choiceD: "Style Cascading Sheets",
    correctAnswer: "A"},

    {question: "Which of the following are used to determine the height of an image?",
    choiceA: "width",
    choiceB: "height",
    choiceC: "border",
    choiceD: "hover",
    correctAnswer: "B"},

    {question: "The CSS property used to control the elements font-size is",
    choiceA: "font-size",
    choiceB: "font-height",
    choiceC: "font-color",
    choiceD: "none of the above",
    correctAnswer: "A"},
    
    {question: "Inside which HTML element do we put the javascript?",
    choiceA: "<javascript>",
    choiceB: "<script>",
    choiceC: "<js>",
    choiceD: "<scripting>",
    correctAnswer: "B"},

    {question: "Which of the following is not a javascript data type?",
    choiceA: "Boolean",
    choiceB: "Number",
    choiceC: "Underfined",
    choiceD: "Float",
    correctAnswer: "D"},

    {question: "How do you create an unordered list in HTML?",
    choiceA: "<li>",
    choiceB: "<ol>",
    choiceC: "<i>",
    choiceD: "<ul>",
    correctAnswer: "D"},


    {question: "In Javascript what is a block of code called that is used to perform a certain task?",
    choiceA: "String",
    choiceB: "Variable",
    choiceC: "Function",
    choiceD: "Declearation",
    correctAnswer: "A"},
]

var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 120;
var timerInterval;
var score =0;
var correct;

// Ask BCS helped with this part
function generateQuizQuestion() {
    gameoverDiv.style.display = "none;"
    if (currentQuestionIndex === currentQuestionIndex) {
        return showscore();
    }
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = currentQuestion.question 
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

//Start Quiz - Starts the ticker, hides the start button, displays the first question

function startQuiz(){
    gameoverDiv.style.display = "noe"
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    //Ticker 
    tickerinterval= setInterval(function() {
        timeLeft--;
        quizTicker.textContent = "Time left; " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            showscore();
        } 
    }, 
    quizBody.style.display = "block";
}

// Ending Screen for the end of the ticker. Final message

function showscore() {
    quizBody.style.display = "none";
    gameoverDiv.style.display = "none";
    clearInterval(timerInterval);
    highscoreInputname.value = "";
    finalScoreEl.innerHTML = "You got " + score + "out of" + quizQuestions.length + " correct!";
}

// the high score should go to another page, possibly fix later in notes
// Ask BCS helped with this part

 if(highscoreInputname, value === "") {
    alert("Initials cannot be blank");
    return false;
}else{
    var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    var currentUser = highscoreInputname.value.trim();
    var currentHighScore = {
        name : currentUser,
        score : score
    }
};
    
    gameoverDiv.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    endGameBtns.style.display = "flex";

    // AskBCS was helpful with this part as well
    savedHighscores.push(currentHighScore);
    localStorage.setItem("savedHighScores", JSON.stringify(savedHighScores));
    generateHighscores();

    


// Ticker portion of the code Had AskBCS help with this portion
tickerinterval = setInterval(function() {
    timeLeft--;
    quizTimer.textContent = "Time left: " + timeLeft;

    if(timeLeft === 0) {
        clearInterval(timerInterval);
        showscore();
    }
}