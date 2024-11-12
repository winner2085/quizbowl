const submitButton = document.querySelector('#submit-button');
const input = document.querySelector('#input-field');
const questions = document.querySelector('#questions')

function changeQuestion() {
    const questions = [
        "Who was the Ancient Greek God of the Sun?",
        "How many minutes are in a full week?",
        "What was the first state?",
        "Which bird is a universal symbol of peace?"
    ];
    let currentIndex = 0
    
    submitButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % questions.length;
        submitButton.src = questions[currentIndex];
    });
}

changeQuestion()