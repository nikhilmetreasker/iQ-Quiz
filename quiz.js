const questions = [
    {
        question: "Which one does not belong to the group?",
        answer: [
            { text: "triangle", correct: false },
            { text: "circle", correct: false },
            { text: "square", correct: false },
            { text: "pyramid", correct: true },
        ],
    },
    {
        question: "Find the odd one out: 16, 25, 36, 49, 50",
        answer: [
            { text: "16", correct: false },
            { text: "25", correct: false },
            { text: "36", correct: false },
            { text: "50", correct: true },
        ],
    },
    {
        question: "Find the missing number in the sequence: 2, 9, 28, 65, __, 217",
        answer: [
            { text: "126", correct: true },
            { text: "120", correct: false },
            { text: "130", correct: false },
            { text: "138", correct: false },
        ],
    },
    {
        question: "Identify the correctly spelled word:",
        answer: [
            { text: "Ambigous", correct: false },
            { text: "Ambitious", correct: true },
            { text: "Ambitiuos", correct: false },
            { text: "Ambigiuos", correct: false },
        ],
    },
    {
        question: "What comes next in the series? 2, 6, 12, 20, __",
        answer: [
            { text: "30", correct: false },
            { text: "28", correct: true },
            { text: "26", correct: false },
            { text: "24", correct: false },
        ],
    },
    {
        question: "If A = 1, B = 2, C = 3, ... Z = 26, what is the sum of the letters in the word 'DATA'?",
        answer: [
            { text: "36", correct: false },
            { text: "37", correct: true },
            { text: "38", correct: false },
            { text: "39", correct: false },
        ],
    },
    {
        question: "A train is moving at 60 km/h. How far will it travel in 45 minutes?",
        answer: [
            { text: "45 km", correct: false },
            { text: "60 km", correct: false },
            { text: "30 km", correct: true },
            { text: "25 km", correct: false },
        ],
    },
    {
        question: "Choose the correct synonym of 'Procrastinate':",
        answer: [
            { text: "Delay", correct: true },
            { text: "Hurry", correct: false },
            { text: "Deny", correct: false },
            { text: "Cancel", correct: false },
        ],
    },
    {
        question: "What is the value of (15 + 3) × 2 ÷ 6?",
        answer: [
            { text: "5", correct: true },
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "9", correct: false },
        ],
    },
    {
        question: "Find the correct antonym for 'Profound':",
        answer: [
            { text: "Shallow", correct: true },
            { text: "Deep", correct: false },
            { text: "Significant", correct: false },
            { text: "Intense", correct: false },
        ],
    },
    {
        question: "The sum of three consecutive numbers is 60. What is the largest number?",
        answer: [
            { text: "18", correct: false },
            { text: "19", correct: false },
            { text: "20", correct: false },
            { text: "21", correct: true },
        ],
    },
    {
        question: "What is the compound interest on ₹10,000 for 2 years at a rate of 10% per annum?",
        answer: [
            { text: "₹2,100", correct: true },
            { text: "₹2,000", correct: false },
            { text: "₹2,100.50", correct: false },
            { text: "₹2,200", correct: false },
        ],
    },
    {
        question: "A man is facing north. He turns 90° clockwise, then 180° counterclockwise, and finally 90° clockwise. What direction is he facing now?",
        answer: [
            { text: "East", correct: false },
            { text: "West", correct: true },
            { text: "South", correct: false },
            { text: "North", correct: false },
        ],
    },
    {
        question: "If x = 2 and y = 3, what is the value of 2x^2 + 3xy - y^2?",
        answer: [
            { text: "22", correct: false },
            { text: "20", correct: false },
            { text: "18", correct: true },
            { text: "16", correct: false },
        ],
    },
    {
        question: "Complete the sentence with the correct phrase: 'If I ___ known about the meeting earlier, I would have attended.'",
        answer: [
            { text: "Had", correct: true },
            { text: "Have", correct: false },
            { text: "Would have", correct: false },
            { text: "Was", correct: false },
        ],
    },
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    clearAnswers();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer));
        answerButton.appendChild(button);
    });
}

function clearAnswers() {
    answerButton.innerHTML = "";
}

function selectAnswer(selectedButton, answer) {
    const buttons = Array.from(answerButton.children);

  
    buttons.forEach((button, index) => {
        const isCorrect = questions[currentQuestionIndex].answer[index].correct;

        if (button === selectedButton) {
         
            button.classList.add(answer.correct ? "correct" : "wrong");
            if (answer.correct) {
                score++; 
            }
        }

        if (isCorrect) {
            button.classList.add("correct");
        }

        button.disabled = true; 
    });

    nextButton.style.display = "block"; 
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        showScore();
    }
}

function showScore() {
    clearAnswers();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", startQuiz);
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        showNextQuestion();
    } else {
        startQuiz();
    }
});

startQuiz();
