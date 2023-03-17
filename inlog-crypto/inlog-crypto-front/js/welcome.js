import { renderSignUp } from "./signUpForm.js";
import { renderLogInHtml } from "./loginForm.js";

let btnDiv = document.getElementById("btnDiv");

export function printWelcomeElement() {
  const headerElement = document.createElement("header");
  const headerTextElement = document.createElement("h1");
  headerTextElement.innerText = "Hello Stranger!";
  const subHeaderTextElement = document.createElement("h2");
  subHeaderTextElement.innerText = "What do you want to do today?";
  const divElement = document.createElement("div");
  const signupBtn = document.createElement("button");
  signupBtn.innerText = "SIGN UP";
  const loginBtn = document.createElement("button");
  loginBtn.innerText = "LOG IN";

  btnDiv.appendChild(headerElement);
  headerElement.append(headerTextElement, subHeaderTextElement, divElement);
  divElement.append(signupBtn, loginBtn);

  //eventlisteners HEADERS
  signupBtn.addEventListener("click", () => {
    console.log("signup");
    localStorage.setItem("renderState", "signup");
    renderSignUp();
  });

  loginBtn.addEventListener("click", () => {
    console.log("login");
    localStorage.setItem("renderState", "login");
    renderLogInHtml();
  });
  
  // const renderState = localStorage.getItem("renderState");
  // if (renderState === "signup") {
  //   renderSignUp();
  // } else if (renderState === "login") {
  //   renderLogInHtml();
  // }
}
