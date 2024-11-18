const submitButton = document.querySelector('.submit');
const input = document.getElementById('input-container');
const questions = document.querySelector('.questions');
const title = document.querySelector('.title');
let scoreContainer = document.querySelector('.score-container');

let score = 0;

let questionList = ['Who was the Ancient Greek God of the Sun?', 'How many minutes are in a full week?', 'Which state was the first capital of the United States?', 'Which bird is a universal symbol of peace?'];

let answerList = ['Apollo', '10080', 'York, PA', 'Dove'];

let questionIndex = 0;
questions.textContent = questionList[questionIndex];

console.log(input.value);
let submitFunction = () =>{
        submitButton.addEventListener('click', () =>{
                if(input.value === answerList[questionIndex]){
                        questionIndex += 1;
                        score += 1;
                        questions.textContent = questionList[questionIndex];
                        scoreContainer.textContent = "Score: " + score;
                }else{
                        score -= 1;
                        scoreContainer.textContent = "Score: " + score;
                }
        // Put endgame function here
        endGame ();
        });
}

let endGame = () =>{
        if (questionIndex > 3){
                scoreContainer.textContent = "Final Score: " + score;
                questions.textContent = "Great Job, you know your stuff! Play again.";
                input.style.display = "none";
                submitButton.style.display = "none";
        };
}

submitFunction ();


