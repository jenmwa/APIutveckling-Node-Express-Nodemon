import { renderLogInHtml } from "./loginForm.js";


export function signUpOk(newUser) {


  const inputFormDiv = document.querySelector("#userFormDiv");
  inputFormDiv.innerHTML = "";

  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('class', 'signUpSuccessfullDiv')

  let mainDivContent = `
  <h2>Hello ${newUser.userName}!</h2>
  <p>You account was successfully created and you can now log in!</p>
  <p> Go to <button id="logInBtn" class="goToBtn"> LOG IN >> </button>
  `
  mainDiv.innerHTML = mainDivContent;

  inputFormDiv.appendChild(mainDiv);

  const logInBtn = document.querySelector('#logInBtn');
 

  logInBtn.addEventListener('click', () => {
    console.log('account created and go to login');
    renderLogInHtml();
  })
}
