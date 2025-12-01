// Get test id from URL
const urlParams = new URLSearchParams(window.location.search);
const testId = urlParams.get("id");

let currentQuestion = 0;
let testData = null;
let userAnswers = [];

// Load test data
async function loadTest() {
    const res = await fetch(`http://localhost:5000/api/mocktest/${testId}`);
    testData = await res.json();

    document.getElementById("instructions").innerHTML =
        `<p><strong>Instructions:</strong> ${testData.instructions.join(", ")}</p>`;

    showQuestion();
}

function showQuestion() {
    const q = testData.questions[currentQuestion];
    document.getElementById("questionText").innerText = q.q;

    const optionsBox = document.getElementById("options");
    optionsBox.innerHTML = "";

    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.style.display = "block";
        btn.style.margin = "8px 0";

        btn.onclick = () => {
            userAnswers[currentQuestion] = i;
            document.getElementById("nextBtn").click();
        };

        optionsBox.appendChild(btn);
    });
}

document.getElementById("nextBtn").addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion >= testData.questions.length) {
        finishTest();
    } else {
        showQuestion();
    }
});

async function finishTest() {
    // send answers to backend for evaluation
    const res = await fetch(`http://localhost:5000/api/mocktest/${testId}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: userAnswers })
    });

    const data = await res.json();

    // redirect to results page
    window.location.href = `./result.html?score=${data.score}&total=${data.total}`;
}

loadTest();
