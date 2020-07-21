new Sortable(quiz);

const correctAnswers = [
  "Michael Schumacher",
  "Lewis Hamilton",
  "Sebastian Vettel",
  "Alain Prost",
  "Ayrton Senna",
  "Fernando Alonso",
];

function checkAnswer() {
  const li = document.querySelectorAll("#quiz li");
  let answers = new Array();
  li.forEach(function (text) {
    answers.push(text.innerHTML);
  });
  if (JSON.stringify(correctAnswers) === JSON.stringify(answers)) {
    alert("Correct :)");
  } else {
    alert("Try Again...");
  }
}