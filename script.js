//Javascript section
// Different HTML elements to be changed
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var 
var
var
var
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
    correctAnswer: "D"
    }

    {question: ""
    choiceA:
    choiceB:
    choiceC:
    choiceD:
    correctAnswer:
    }

    {question
    choiceA:
    choiceB:
    choiceC:
    choiceD:
    correctAnswer:
    }

    {question
    choiceA:
    choiceB:
    choiceC:
    choiceD:
    correctAnswer:
    }

    {question
    choiceA:
    choiceB:
    choiceC:
    choiceD:
    correctAnswer:
    }
    
    {question
    choiceA:
    choiceB:
    choiceC:
    choiceD:
    correctAnswer:
    }

    {question
    choiceA:
    choiceB:
    choiceC:
    choiceD:
    correctAnswer:
    }

    {question
    choiceA:
    choiceB:
    choiceC:
    choiceD:
    correctAnswer:
    }
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