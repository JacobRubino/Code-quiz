var ansList = document.getElementById("answerList");
var buttData = document.getElementById("botButt");
var qheader = document.getElementById("question");
var ansButts = ansList.querySelectorAll("button");
var timerDis = document.getElementById("timeLeft");
// var butto1= document.getElementById("#butt1")
// var butto2= document.getElementById("#butt2")
// var butto3= document.getElementById("#butt3")
// var butto4= document.getElementById("#butt4")
var timeScore = 80;
var questionIndex = 0;
var intervalID 
var val

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
//check if answer is right or wrong, check for button click, and check if the content of that button matches the answer at the index that matches the questionIndex
// function checkRight(){
//   if (correctArr[questionIndex] == source.innertext){
//     timeScore = timeScore - 10
//     }
// }
function checkRight(clicked_id) {
  a = document.getElementById(clicked_id).innerText
  b = correctArr[questionIndex]
  console.log(a)
  // console.log(typeof(correctArr[questionIndex]))
  if (a == b){ 
    timeScore ++
  } else {
    timeScore = timeScore - 10
  }

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
    ansList.hidden = true;
    qheader.textContent = "Sorry, better luck next time!"
  } 
  
}, 1000);
  if (questionIndex > 4) {
    ansList.hidden = true 
}
});

for (let index = 0; index < ansButts.length; index++) {
  const answerbutton = ansButts[index];
  answerbutton.addEventListener("click", function () {
    var currentAns = answerbutton.textContent;
    console.log(currentAns);
    var correctAns = correctArr[questionIndex]
    console.log(correctAns);
    questionIndex++
    printQuestion()
    printLi()
    
  });
}


