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
var 

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

// Ticker portion of the code Had AskBCS help with this portion
tickerinterval = setInterval(function() {
    timeLeft--;
    quizTimer.textContent = "Time left: " + timeLeft;

    if(timeLeft === 0) {
        clearInterval(timerInterval);
        showscore();
    }
}