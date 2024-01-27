document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function() {
      if (this.getAttribute("data-type") === "submit") {
        alert("You clicked Submit!");
      } else {
        let gameType = this.getAttribute("data-type");
        alert(`You clicked ${gameType}`);
      }
    });
  }
});


function runGame() {}
function checkAnswer() {}
function calculateCorrectAnswer() {}
function incrementScore() {}
function incrementWrongAnswer() {}
function displayAdditionQuestion() {}
function displaySubtractQuestions() {}
function displayMultiplyQuestions() {}
function displayDivisionQuestions() {}