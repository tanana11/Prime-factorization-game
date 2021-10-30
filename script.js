document.getElementById("btn2").addEventListener('click', () => {mult(2);});
document.getElementById("btn3").addEventListener('click', () => {mult(3);});
document.getElementById("btn5").addEventListener('click', () => {mult(5);});
document.getElementById("btn7").addEventListener('click', () => {mult(7);});
document.getElementById("btn11").addEventListener('click', () => {mult(11);});
document.getElementById("btn13").addEventListener('click', () => {mult(13);});
document.getElementById("btn17").addEventListener('click', () => {mult(17);});
document.getElementById("btn19").addEventListener('click', () => {mult(19);});
document.getElementById("btn23").addEventListener('click', () => {mult(23);});
document.getElementById("btn29").addEventListener('click', () => {mult(29);});





const question = document.getElementById("question");
const answer = document.getElementById("answer");
const answered = document.getElementById("answered");
const gave_up = document.getElementById("gave_up");

answered_number = 0;
gave_up_number = 0;

function question_number(){
  let n = 1
  n *= 
    Math.pow(2, Math.floor(Math.random() * 8))
   *Math.pow(3, Math.floor(Math.random() * 6))
   *Math.pow(5, Math.floor(Math.random() * 5))
   *Math.pow(7, Math.floor(Math.random() * 3))
   *Math.pow(11, Math.floor(Math.random() * 1.5))
   *Math.pow(13, Math.floor(Math.random() * 1.5))
   *Math.pow(17, Math.floor(Math.random() * 1.25))
   *Math.pow(19, Math.floor(Math.random() * 1.1))
   *Math.pow(23, Math.floor(Math.random() * 1.1))
   *Math.pow(29, Math.floor(Math.random() * 1.1))
console.log(number);
  if (n <= 10000){
    question.innerHTML = n;
  }
  else{
    question_number();
    console.log(n);
  }
}






let number = 1;

function mult(n){
  number *= n;
  answer.innerHTML += n + "*";
  console.log(number);
}

question_number()
console.log("\n")

document.getElementById("next").addEventListener('click', () => {
  if (number == question.innerHTML){
    alert("atari!");
    number = 1;
    answer.innerHTML = "";
    question_number();
    answered_number += 1;
    answered. innerHTML = answered_number;
  }
  else{
    alert("hazure!");
    
    number = 1;
    answer.innerHTML = "";
  }
});

document.getElementById("deleting").addEventListener('click', () => {
  number = 1;
  answer.innerHTML = "";
});

document.getElementById("give_up").addEventListener('click', () => {
  number = 1;
  answer.innerHTML = "";
  question_number();
  gave_up_number += 1;
  gave_up.innerHTML = gave_up_number;
});


