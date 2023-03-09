// Quantum Mechanical Model / Atomic Model Quiz

// Event Listener
document
  .getElementById("submit")
  .addEventListener("click", btnclicked);

// Var
var r = document.getElementById("question1");
let sum = 0;
let str = "\u0025";
let str2 = "";
// Function
function btnclicked() {
  let q = document
    .getElementById("question")
    .value.toLowerCase();
  let q1 =
    document.getElementById("question1").value;
  let q2 = document
    .getElementById("question2")
    .value.toLowerCase();
  let q3 = document
    .getElementById("question3")
    .value.toLowerCase();

  if (q === "dalton") {
    document.getElementById("answer").innerHTML =
      "Correct";
    document.getElementById(
      "question"
    ).style.borderColor = "green";
    document.getElementById(
      "answer"
    ).style.color = "green";
    sum += 1;
  } else if (q == "") {
    document.getElementById("answer").innerHTML =
      "Insert Answer";
    document.getElementById(
      "question"
    ).style.borderColor = "black";
    document.getElementById(
      "answer"
    ).style.color = "black";
  } else {
    document.getElementById(
      "question"
    ).style.borderColor = "red";
    document.getElementById("answer").innerHTML =
      "Incorrect";
    document.getElementById(
      "answer"
    ).style.color = "red";
  }
  if (q1 == 4) {
    document.getElementById("answer2").innerHTML =
      "Correct";
    document.getElementById(
      "question1"
    ).style.borderColor = "green";
    document.getElementById(
      "answer2"
    ).style.color = "green";
    sum += 1;
  } else if (q1 == ``) {
    document.getElementById("answer2").innerHTML =
      "Insert Answer";
    document.getElementById(
      "question1"
    ).style.borderColor = "black";
    document.getElementById(
      "answer2"
    ).style.color = "black";
  } else {
    document.getElementById(
      "question1"
    ).style.borderColor = "red";
    document.getElementById("answer2").innerHTML =
      "Incorrect";
    document.getElementById(
      "answer2"
    ).style.color = "red";
  }
  if (q2 == `rutherford`) {
    document.getElementById("answer3").innerHTML =
      "Correct";
    document.getElementById(
      "question2"
    ).style.borderColor = "green";
    document.getElementById(
      "answer3"
    ).style.color = "green";
    sum += 1;
  } else if (q2 == ``) {
    document.getElementById("answer3").innerHTML =
      "Insert Answer";
    document.getElementById(
      "question2"
    ).style.borderColor = "black";
    document.getElementById(
      "answer3"
    ).style.color = "black";
  } else {
    document.getElementById(
      "question2"
    ).style.borderColor = "red";
    document.getElementById("answer3").innerHTML =
      "Incorrect";
    document.getElementById(
      "answer3"
    ).style.color = "red";
  }
  if (
    q3 == `spdf` ||
    q3 == `spfd` ||
    q3 == `sfpd` ||
    q3 == `sfdp` ||
    q3 == `sdfp` ||
    q3 == `sdpf`
  ) {
    document.getElementById("answer4").innerHTML =
      "Correct";
    document.getElementById(
      "question3"
    ).style.borderColor = "green";
    document.getElementById(
      "answer4"
    ).style.color = "green";
    sum += 1;
  } else if (q3 == ``) {
    document.getElementById("answer4").innerHTML =
      "Insert Answer";
    document.getElementById(
      "question3"
    ).style.borderColor = "black";
    document.getElementById(
      "answer4"
    ).style.color = "black";
  } else {
    document.getElementById(
      "question3"
    ).style.borderColor = "red";
    document.getElementById("answer4").innerHTML =
      "Incorrect";
    document.getElementById(
      "answer4"
    ).style.color = "red";
  }

  if (sum == 4) {
    document.getElementById(
      "output1"
    ).innerHTML = `4/4`;
    document.getElementById("output2").innerHTML =
      (4 / 4) * 100 + str;
    document.getElementById("output3").innerHTML =
      "Congratulations on getting 100%";
  }
  if (sum == 3) {
    document.getElementById(
      "output1"
    ).innerHTML = `3/4`;
    document.getElementById("output2").innerHTML =
      (3 / 4) * 100 + str;
    document.getElementById("output3").innerHTML =
      "75% is pretty good but try to get 100% next time! ";
  }
  if (sum == 2) {
    document.getElementById("output1").innerHTML =
      "2/4";
    document.getElementById("output2").innerHTML =
      (2 / 4) * 100 + str;
    document.getElementById("output3").innerHTML =
      "Hmm, not the best but it's still a pass, but please try harder next time";
  }
  if (sum == 1) {
    document.getElementById("output1").innerHTML =
      "1/4";
    document.getElementById("output2").innerHTML =
      (1 / 4) * 100 + str;
    document.getElementById("output3").innerHTML =
      "Not a pass, please re-read the questions and try again please, I know you can do it";
  }
  if (sum == ``) {
    document.getElementById(
      "output1"
    ).innerHTML = `Please fill in the quiz and then submit`;
  }
}

// Make a class and use .classname
