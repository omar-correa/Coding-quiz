var start = document.querySelector("#start");
var quiz = document.querySelector("#quiz");
var headerText = document.querySelector('#headerText')
var buttonQ1 = document.querySelector("#buttonQ1");
var buttonQ2 = document.querySelector("#buttonQ2");
var buttonQ3 = document.querySelector("#buttonQ3");
var buttonQ4 = document.querySelector("#buttonQ4");
var result = document.querySelector("#result")
var timeRemaining = document.querySelector("#timeRemaining")
var question = document.querySelector("#question")
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var initial = document.querySelector("#initial")
var initialInput = document.querySelector("#initialInput")
var specificQuestion = 0;
var specificAnswer = 0;
var answerChoice = "";
var score = 0;
var highScore = document.querySelector("#highScore")
var initialHide = document.querySelector("#initialHide")
var timer = document.querySelector("#timer")

var questionList = [
    "1. Which of the following is not one of the 7 data types in JavaScript?",
    "2. Which of the following is not a term used when creating a variable?",
    "3. What does the Math.random object do?",
    "4. What loop would you use to run the same code over and over again?"
];

var aAnswerList = [
    "a. boolean",
    "a. let",
    "a. picks a random number between 0-10",
    "a. for loop"
]

var bAnswerList = [
    "b. string",
    "b. var",
    "b. picks a random number between 0-100",
    "b. if loop"
]

var cAnswerList = [
    "c. null",
    "c. const",
    "c. picks a random number between 0-1",
    "c. else loop"
]

var dAnswerList = [
    "d. text",
    "d. none of the above",
    "d. picks a random number between 1-10",
    "d. if else loop"
]

quiz.style.display = "none"
buttonQ1.style.display = "none"
buttonQ2.style.display = "none"
buttonQ3.style.display = "none"
buttonQ4.style.display = "none"
initial.style.display = "none"
highScore.style.display = "none"

var time = questionList.length * 15
var clockID = ""

function countDown() {
    if(time >=0){
    timeRemaining.textContent = time
    time--
    }
}

function commence() {
    clockID = setInterval(countDown, 1000)
    start.style.display = "none"
    quiz.style.display = "block"
    buttonQ1.style.display = "block"
    question.innerHTML = questionList[specificQuestion];
    answerA.innerHTML = aAnswerList[specificAnswer]
    answerB.innerHTML = bAnswerList[specificAnswer]
    answerC.innerHTML = cAnswerList[specificAnswer]
    answerD.innerHTML = dAnswerList[specificAnswer]
}
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

    } else {
        time = time - 15
        result.style.display = "wrong"
    }
    buttonQ1.style.display = "none"
    buttonQ2.style.display = "block"
    specificQuestion = specificQuestion + 1;

    answerA.style.color = 'black'
    answerB.style.color = 'black'
    answerC.style.color = 'black'
    answerD.style.color = 'black'

    specificAnswer = specificAnswer + 1;
    if (specificAnswer < aAnswerList.length) {

        question.innerHTML = questionList[specificQuestion];
        answerA.innerHTML = aAnswerList[specificAnswer]
        answerB.innerHTML = bAnswerList[specificAnswer]
        answerC.innerHTML = cAnswerList[specificAnswer]
        answerD.innerHTML = dAnswerList[specificAnswer]
    } else {
        quiz.style.display = "none"
        initial.style.display = "block"
        clearInterval(clockID)
    }
}
function submitQuestion2() {
    if (answerChoice == "D") {
        score = score + 1;
    } else {
        time = time - 15
        result.style.display = "wrong"
    }
    specificQuestion = specificQuestion + 1;
    buttonQ2.style.display = "none"
    buttonQ3.style.display = "block"

    answerA.style.color = 'black'
    answerB.style.color = 'black'
    answerC.style.color = 'black'
    answerD.style.color = 'black'

    specificAnswer = specificAnswer + 1;
    if (specificAnswer < aAnswerList.length) {

        question.innerHTML = questionList[specificQuestion];
        answerA.innerHTML = aAnswerList[specificAnswer]
        answerB.innerHTML = bAnswerList[specificAnswer]
        answerC.innerHTML = cAnswerList[specificAnswer]
        answerD.innerHTML = dAnswerList[specificAnswer]
    } else {
        quiz.style.display = "none"
        initial.style.display = "block"
        clearInterval(clockID)
    }
}
function submitQuestion3() {
    if (answerChoice == "C") {
        score = score + 1;
    } else {
        time = time - 15
        result.style.display = "wrong"
    }
    specificQuestion = specificQuestion + 1;
    buttonQ3.style.display = "none"
    buttonQ4.style.display = "block"

    answerA.style.color = 'black'
    answerB.style.color = 'black'
    answerC.style.color = 'black'
    answerD.style.color = 'black'

    specificAnswer = specificAnswer + 1;
    if (specificAnswer < aAnswerList.length) {

        question.innerHTML = questionList[specificQuestion];
        answerA.innerHTML = aAnswerList[specificAnswer]
        answerB.innerHTML = bAnswerList[specificAnswer]
        answerC.innerHTML = cAnswerList[specificAnswer]
        answerD.innerHTML = dAnswerList[specificAnswer]
    } else {
        quiz.style.display = "none"
        initial.style.display = "block"
        clearInterval(clockID)
    }
}
function submitQuestion4() {
    if (answerChoice == "A") {
        score = score + 1;
    } else {
        time = time - 15
        result.style.display = "wrong"
    }
    specificQuestion = specificQuestion + 1;
    headerText.innerHTML = "You answered " + score + "/4 correct";
    quiz.style.display = "none"

    answerA.style.color = 'black'
    answerB.style.color = 'black'
    answerC.style.color = 'black'
    answerD.style.color = 'black'

    specificAnswer = specificAnswer + 1;
    if (specificAnswer < aAnswerList.length) {

        answerA.innerHTML = aAnswerList[specificAnswer]
        answerB.innerHTML = bAnswerList[specificAnswer]
        answerC.innerHTML = cAnswerList[specificAnswer]
        answerD.innerHTML = dAnswerList[specificAnswer]
    } else {
        quiz.style.display = "none"
        initial.style.display = "block"
        clearInterval(clockID)
    }
}
    function displayScore(){
        initial.style.display = "none"
        highScore.style.display = "block"
        headerText.style.display = "none"
        timer.style.display = "none"
        displayFinalScore()
        console.log(initialInput.value, time)
    }

    function displayFinalScore() {
        var hs = document.createElement("div")
        initials = initialInput.value
        hs.innerTextHTML("<div>${initials}, ${time}</div>")
        document.getElementById("final").appendChild(hs)
    }


    document.getElementById("btn").addEventListener("click", displayScore)
