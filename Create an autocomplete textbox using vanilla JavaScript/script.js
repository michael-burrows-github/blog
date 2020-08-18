const data = ["red", "blue", "green", "yellow", "purple", "orange", "black", "white", "brown"];
const autocomplete = document.getElementById("autocomplete");
const resultsHTML = document.getElementById("results");

autocomplete.oninput = function () {
  let results = [];
  const userInput = this.value;
  resultsHTML.innerHTML = "";
  if (userInput.length > 0) {
    results = getResults(userInput);
    resultsHTML.style.display = "block";
    for (i = 0; i < results.length; i++) {
      resultsHTML.innerHTML += "<li>" + results[i] + "</li>";
    }
  }
};

function getResults(input) {
  const results = [];
  for (i = 0; i < data.length; i++) {
    if (input === data[i].slice(0, input.length)) {
      results.push(data[i]);
    }
  }
  return results;
}

resultsHTML.onclick = function (event) {
  const setValue = event.target.innerText;
  autocomplete.value = setValue;
  this.innerHTML = "";
};