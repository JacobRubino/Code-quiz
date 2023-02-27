var ansList = document.getElementById("answerList");
var buttData = document.getElementById("botButt");
var qheader = document.getElementById("question");
var ansButts = ansList.querySelectorAll("button");
var timerDis = document.getElementById("timeLeft");
var butto1= document.getElementById("btn1")
var butto2= document.getElementById("btn2")
var compScore = document.getElementById("compareScore")
// var butto3= document.getElementById("#butt3")
// var butto4= document.getElementById("#butt4")
var contains = document.getElementsByClassName("container")
var timeScore = 80;
var questionIndex = 0;
var intervalID 
var val
var saved_score = localStorage.getItem("Myscore")
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
  } else {
    timeScore = timeScore - 10
  }

}
function printQuestion() {
  qheader.textContent = qArr[questionIndex]; 
  if (questionIndex > 4) {
    clearInterval(intervalID)
    ansList.hidden = true 
    qheader.textContent = "Congrats on finishing the test with a score of " + timeScore
    compScore.hidden = false
    compScore.textContent = "The high score is " + saved_score
    timerDis.textContent = ""
    buttonPop()
  }
}

function printLi() {
  for (let index = 0; index < AnsArr[questionIndex].length; index++) {
    const answer = AnsArr[questionIndex][index];
    ansButts[index].textContent = answer;
    console.log(questionIndex)
  }
}
function buttonPop(){
    butto1.hidden = false
    butto2.hidden = false
    console.log("im not stupid i swear")
    // var btn = document.createElement("button")
    // btn.appendChild(contains)
    // btn.innerHTML = "Save score"

  }
function saveScore(){
  butto1.hidden = true
  score = timeScore
  console.log(saved_score)
  console.log(score)
  compScore.hidden = true
  if (saved_score > score){
    qheader.textContent= 'Sorry but you did not beat the high score of ' + saved_score
  } else if (saved_score == score){
    qheader.textContent = 'Sorry but you have tied for the high score of ' +saved_score
  } else if (saved_score < score){
    qheader.textContent= 'Congrats on beating the high score of ' + saved_score   
    localStorage.setItem("Myscore", score)
  }  
}

function resetPage(){
  location.reload()
}
//i want this to get rid of the button, reveal the list (needs to be hidden first), and loop through an array to list possible answers on the LI, create a new button that will be submit or make the options clickable.
botButt.addEventListener("click", function () {
  // clearInner(); 
  ansList.hidden = false;
  buttData.hidden = true;
  timerDis.textContent = "Your time left is " + timeScore + " seconds"
  printLi();
  printQuestion();
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
  // saveScore()

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
    if (questionIndex < 4)
      printLi()
    
    
  });

}


