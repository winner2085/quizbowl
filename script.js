const scoreContainer = document.querySelector('.score');
const submitButton = document.querySelector('#submit-button');
const input = document.querySelector('#input-field');
const questions = document.getElementById('question');
const title = document.querySelector('.title');
let answerList = ["Apollo", "10080", "New York", "Dove"];


let questionList = ["Who was the Ancient Greek God of the Sun?",
        "How many minutes are in a full week?",
        "Which state was the first capital of the United States?",
        "Which bird is a universal symbol of peace?"];

questions.textContent = questionList[0];
input.textContent = answerList[0];


if (input === 0){
        submitButton.addEventListener('click', () =>{
                
        });
}