let questions = [
    {
        id: 1,
        question: "1 + 1 adalah?",
        answer: "2",
        options: [
            "3",
            "1",
            "2",
            "5",
        ]
    },
    {
        id: 2,
        question: "2 + 1 adalah?",
        answer: "3",
        options: [
            "3",
            "1",
            "2",
            "5",
        ]
    },
    {
        id: 3,
        question: "3 + 1 adalah?",
        answer: "4",
        options: [
            "4",
            "1",
            "2",
            "5",
        ]
    },
    {
        id: 4,
        question: "4 + 1 adalah?",
        answer: "5",
        options: [
            "3",
            "5",
            "2",
            "5",
        ]
    },
    {
        id: 5,
        question: "5 + 1 adalah?",
        answer: "6",
        options: [
            "3",
            "6",
            "2",
            "5",
        ]
    },
    {
        id: 6,
        question: "6 + 1 adalah?",
        answer: "7",
        options: [
            "3",
            "1",
            "2",
            "7",
        ]
    },
    {
        id: 7,
        question: "7 + 1 adalah?",
        answer: "8",
        options: [
            "3",
            "1",
            "8",
            "5",
        ]
    },
    {
        id: 8,
        question: "8 + 1 adalah?",
        answer: "9",
        options: [
            "9",
            "1",
            "2",
            "5",
        ]
    },
    {
        id: 9,
        question: "9 + 1 adalah?",
        answer: "10",
        options: [
            "3",
            "1",
            "10",
            "5",
        ]
    },
    {
        id: 10,
        question: "10 + 1 adalah?",
        answer: "11",
        options: [
            "11",
            "1",
            "2",
            "5",
        ]
    },
];

let question_count = 0;
let points = 0;

window.onload = function () {
    show(question_count);
};

function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1} . ${questions[count].question}</h2>
    <ul class="option-group">
                    <li class="option">${first}</li>
                    <li class="option">${second}</li>
                    <li class="option">${third}</li>
                    <li class="option">${fourth}</li>    
    </ul>
    `;
    toggleActive();
};

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let i = 0; i < option.lentgth; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next() {

    if (question_count == questions.length - 1) {
        location.href = "quiz_finish.html";
    }
    console.log(question_count);


    let user_answer = document.querySelector("li.option.active").innerHTML;

    if (user_answer == questions[question_count].answer) {
        points += 10;
        sessionStorage.setItem("points", points);
    }
    console.log(points);

    question_count++;
    show(question_count)
}