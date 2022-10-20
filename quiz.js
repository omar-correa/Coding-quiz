var start = document.querySelector("#start");
var quiz = document.querySelector("#quiz");
var question = document.querySelector("#question")
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var specificQuestion = 0;
var answerChoice = "";
var score = 0;

var questionList = [
    "1. Which of the following is not one of the 7 data types in JavaScript?",
    "2.",
    "3.",
    "4.",
    "5."
]

quiz.style.display = "none"


function commence() {

    start.style.display = "none"
    quiz.style.display = "block"
    question.innerHTML = questionList[specificQuestion]

    function aChoice() {
        answerA.style.color = 'red'
        answerB.style.color = 'black'
        answerC.style.color = 'black'
        answerD.style.color = 'black'
        answerChoice = "A"

    }
    function bChoice() {
        answerA.style.color = 'black'
        answerB.style.color = 'green'
        answerC.style.color = 'black'
        answerD.style.color = 'black'
        answerChoice = "B"
    }
    function cChoice() {
        answerA.style.color = 'black'
        answerB.style.color = 'black'
        answerC.style.color = 'purple'
        answerD.style.color = 'black'
        answerChoice = "C"
    }
    function dChoice() {
        answerA.style.color = 'black'
        answerB.style.color = 'black'
        answerC.style.color = 'black'
        answerD.style.color = 'blue'
        answerChoice = "D"
    }

    function submitQuestion1() {
        if (answerChoice == "D") {
            score = score + 1;
        }
    }
}    