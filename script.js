const submitButton = document.querySelector('.submit');
const input = document.getElementById('input-container');
const questions = document.querySelector('.questions');
const title = document.querySelector('.title');
let scoreContainer = document.querySelector('.score-container');

let score = 0;

let questionList = ['Who was the Ancient Greek God of the Sun?',
        'How many minutes are in a full week?',
        'How many stars are on the American Flag?',
        'Which bird is a universal symbol of peace?',
        'What is James Bonds code name?',
        'What species of fish is Nemo?',
        'What is an eight-sided shape called?',
        'Who painted the Mona Lisa?',
        'What is the main ingridient in guacamole?',
        'Who was the first president of the United States?'
];

let answerList = ['Apollo', '10080', '50', 'Dove', '007', 'Clownfish', 'Octagon', 'Leonardo da Vinci', 'Avacado', 'George Washington'];

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
        if (questionIndex > 9){
                scoreContainer.textContent = "Final Score: " + score;
                questions.textContent = "Great Job, you know your stuff! Play again.";
                input.style.display = "none";
                submitButton.style.display = "none";
        };
}

submitFunction ();


