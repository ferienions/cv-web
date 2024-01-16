// quiz.js

document.getElementById('quizForm').onsubmit = function() {
  var score = 0;

  if (document.getElementById('quizForm').q1.value === "a") {
      score++;
  }

  if (document.getElementById('quizForm').q2.value === "a") {
      score++;
  }

  if (document.getElementById('quizForm').q3a.checked && !document.getElementById('quizForm').q3b.checked && !document.getElementById('quizForm').q3c.checked) {
      score++;
  }

  var q4Answer = document.getElementById('quizForm').q4.value.toLowerCase();
  if (q4Answer === "document.write") {
      score++;
  }
  if (document.getElementById('quizForm').q5c.checked && !document.getElementById('quizForm').q5b.checked && !document.getElementById('quizForm').q5a.checked) {
    score++;
 }
 if (document.getElementById('quizForm').q6c.checked && !document.getElementById('quizForm').q6b.checked && !document.getElementById('quizForm').q6a.checked) {
    score++;
 }
 if (document.getElementById('quizForm').q7.value === "b") {
  score++;
 }
 if (document.getElementById('quizForm').q8.value === "c") {
  score++;
 }
 if (document.getElementById('quizForm').q9.value === "b") {
  score++;
 }
 if (document.getElementById('quizForm').q10.value === "a") {
  score++;
 }

  // Ajoutez des blocs similaires pour les questions suivantes

  alert("Votre score est de " + score + "/10");
  return false;
};
