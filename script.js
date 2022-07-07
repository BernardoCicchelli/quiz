

// Lista que eu 
let quizData = [
  {
    title: "asdas",
    question: "xzc",
    a: "cx",
    b: "vx",
    c: "a",
    d: "s",
    correct: "a",
  },
  {
    title: "asdas",
    question: "xzc",
    a: "cx",
    b: "vx",
    c: "a",
    d: "s",
    correct: "b",
  },
  {
    title: "asdas",
    question: "xzc",
    a: "cx",
    b: "vx",
    c: "a",
    d: "s",
    correct: "c",
  },
];

//Elementos que eu precisava pegar no HTML.

let btn = document.getElementById("button")
let title = document.getElementById("title")
let question = document.getElementById("question")

let questionA = document.getElementById("questionA")
let questionB = document.getElementById("questionB")
let questionC = document.getElementById("questionC")
let questionD = document.getElementById("questionD")
const answerEls = document.querySelectorAll(".answer");



let currentQuiz = 0;
let score = 0;

//Chamada da Função.
loadQuiz();

//Função que conecta a Lista.

function loadQuiz() {
  deselectAnswer();
const data = quizData[currentQuiz]
title.innerHTML = data.title
question.innerHTML = data.question

questionA.innerHTML = data.a
questionB.innerHTML = data.b
questionC.innerHTML = data.c
questionD.innerHTML = data.d
    
}

//Função para checar se a resposta é True or False.

function getSelected() {
let answer;
answerEls.forEach(answerEl => {
if (answerEl.checked) {
answer = answerEl.id
}
});
 return answer   
}

function deselectAnswer() {

  answerEls.forEach(answerEl => {
 answerEl.checked = false;
  });
}


//EventListener pro botão funcionar.

btn.addEventListener("click", ()=>{
const answer = getSelected();
if (answer) {
 if (answer == quizData[currentQuiz].correct) {
   score++;
 } 
currentQuiz++;
if (currentQuiz < quizData.length) {
  loadQuiz();
} else {}

}

}) 


