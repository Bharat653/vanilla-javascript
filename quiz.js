// $(document).ready(function () {
//     $('form').submit(function (event) {
//         event.preventDefault(); // Prevent the form from submitting normally

//         const jsonData = {selectedAnswer : $("input[name='color']:checked").val()};


//         if (jsonData["selectedAnswer"] === 'blue') {
//             alert('Correct answer!');
//         } else {
//             alert('Wrong answer!');
//         }
//     });
// });


const quizData = [
    {
        question: "what is the color of sky?",
        a: "red",
        b: "blue",
        c: "yellow",
        d: "green",
        correct: "b",
    },
    {
        question: "what is the color of mango?",
        a: "blue",
        b: "red",
        c: "yellow",
        d: "green",
        correct: "c",
    },
    {
        question: "what is the value of 2*8?",
        a: "102",
        b: "19",
        c: "25",
        d: "16",
        correct: "d",
    },
  
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    selectAns()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function selectAns() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})