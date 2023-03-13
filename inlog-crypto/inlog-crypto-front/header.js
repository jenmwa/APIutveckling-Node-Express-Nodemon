import { renderSignUp } from "./signUpForm.js";
import { renderLogInHtml } from "./loginForm.js";

let header = document.getElementById("header");

export function printHeaderElement() {
  const headerElement = document.createElement("header");
  const navElement = document.createElement("nav");
  const signupBtn = document.createElement("button");
  signupBtn.innerText = "SIGN UP";
  const loginBtn = document.createElement("button");
  loginBtn.innerText = "LOG IN";

  header.appendChild(headerElement);
  headerElement.appendChild(navElement);
  navElement.append(signupBtn, loginBtn);

  //eventlisteners HEADERS
  signupBtn.addEventListener("click", () => {
    console.log("signup");

    renderSignUp();
  });

  loginBtn.addEventListener("click", () => {
    console.log("login");
    renderLogInHtml();
  });
}
