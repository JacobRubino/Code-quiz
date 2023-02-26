var ansList = document.getElementById("answerList");
var buttData = document.getElementById("botButt");
var qheader = document.getElementById("question");
var ansButts = ansList.querySelectorAll("button");
var timerDis = document.getElementById("timeLeft");
var timeScore = 80;
var questionIndex = 0;
var intervalID 
//first call on the button to clear the innerhtml of the question and button, change it to submit, generate a list of answers and change h1 to the question
const qArr = [
  "A very useful tool used during development and debugging for printing content to the debugger is:",
  "String values must be enclosed within _____ when being assigned to variables.",
  "The condition in an if/else statement is enclosed within _____.",
  "Arrays in JavaScript can be used to store _____.",
  "Commonly used  data types DO NOT include:",
];
const correctArr = [
  "console.log",
  "Qoutes",
  "Parentheses",
  "All of the above",
  "Alerts",
];
const AnsArr = [
  ["JavaScript", "Terminal", "For Loops", "console.log"],
  ["Commas", "Curly brackets", "Qoutes", "Parentheses"],
  ["Qoutes", "Curly brackets", "Parentheses", "Square brackets"],
  ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
  ["strings", "Booleans", "Alerts", "Numbers"],
];

function clearInner() {
  qheader.textContent = "";
}

function printQuestion() {
  qheader.textContent = qArr[questionIndex];
}

function printLi() {
  for (let index = 0; index < AnsArr[questionIndex].length; index++) {
    const answer = AnsArr[questionIndex][index];
    ansButts[index].textContent = answer;
  }
}

//i want this to get rid of the button, reveal the list (needs to be hidden first), and loop through an array to list possible answers on the LI, create a new button that will be submit or make the options clickable.
botButt.addEventListener("click", function () {
  // clearInner();
  printQuestion();
  ansList.hidden = false;
  buttData.hidden = true;
  timerDis.textContent = "Your time left is " + timeScore + " seconds"
  printLi();
  intervalID = setInterval(function(){
    timeScore--
    if (timeScore > 1){
      timerDis.textContent = "Your time left is " + timeScore + " seconds"
  } else if (timeScore == 1){
    timerDis.textContent = "You have 1 Second left"
  } else {
    timerDis.textContent = "You have run out of time"
  }
}, 1000);
});

for (let index = 0; index < ansButts.length; index++) {
  const answerbutton = ansButts[index];
  answerbutton.addEventListener("click", function () {
    var currentAns = answerbutton.textContent;
    console.log(currentAns);
    var correctAns = correctArr[questionIndex]
    console.log(correctAns)
    questionIndex++
    printQuestion()
    printLi()
    
  });
}


