'use strict'

let login = document.getElementById("login");
let signup = document.getElementById("signup");
let slide = document.getElementById("slide");
let signinForm = document.querySelector(".signin-form");
let signupForm = document.querySelector(".signup-form");



const nameFieldEl = document.querySelector('#namefield')
const emailFieldEl = document.querySelector('#emailfield')
const passwordFieldEl = document.querySelector('#passwordfield')
const formEl = document.querySelector('.form')
const outputEl = document.querySelector('.output')
const commentEl = document.querySelector('.comment')
const joinnEl = document.querySelector('.join')




login.addEventListener("click", () => {
  slide.classList.add("slide-right");
  slide.classList.remove("slide-left");
  signinForm.style.zIndex = "2";
  signinForm.style.opacity = "1";
});

signup.addEventListener("click", () => {
  slide.classList.add("slide-left");
  slide.classList.add("slide-right");
  signinForm.style.zIndex = "-1";
  signinForm.style.opacity = "0";
});

formEl.addEventListener('submit', function(e){
  e.preventDefault()
  console.log('working');
  const nameEl = nameFieldEl.value.toUpperCase();
  const emailEl = emailFieldEl.value;
  const passwordEl = passwordFieldEl.value;
  nameFieldEl.value = "";
  emailFieldEl.value = "";
  passwordFieldEl.value = "";
  const joinEl = nameEl+passwordEl;
  outputEl.style.opacity = 1;
  outputEl.textContent = `Hello! ${[nameEl]}, kindly proceed to login`;
  joinnEl.style.opacity = 1;
  joinnEl.textContent = `WELCOME! your username is ${[joinEl]} ✔`;
  outputEl.style.color = "indigo";
  joinnEl.style.color = "indigo";
  
  console.log(nameEl)
})







// function multiplication(num1, num2, num3){
//   const calc = (num1 * num2)/num3;
//   if (calc <= 5) {
//     console.log(`${calc} is less than what we want! Gerrout`)
//   } else if ( calc > 5) {
//     console.log(`${calc} is what we want. Hurrah!!!`)
//   } 
// };

// multiplication(6,4,3);
// multiplication(8,5,10);


/**
 *  Write a JavaScript program where the program takes a random integer between 1 to 10,
 * the user is then prompted to input a guess number. If the user input matches with guess
 * number, the program will display a message "Good Work" 
 * otherwise display a message "Not matched"
 */

// const tryUser = () => {
//   const x = Math.ceil(Math.random() * 3);
//   const trial = parseFloat(prompt('Please put a number between 1 and 9.'));
//   console.log(x)

//   if (trial === x) {
//     alert('Good work!');
//   } else {
//     alert('Not matched');
//   }
  
//   console.log(trial)
// }
// tryUser()

//aminat.com = com
// const xtnSn = (x) => {
//   const lastPart = x.split('.');
//   console.log(lastPart[1]);
// }
// xtnSn('index.html')


























