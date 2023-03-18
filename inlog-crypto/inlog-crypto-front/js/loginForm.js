import { renderSignUp } from "./signUpForm.js";
import { renderLoggedInDiv } from "./inloggedUser.js"

export function renderLogInHtml() {
  console.log("YoYoYo");

  const inputFormDiv = document.querySelector("#userFormDiv");
  inputFormDiv.innerHTML = "";

  const welcomeHeading = document.createElement("h1");
  const textMessage = document.createElement("p");
  const userNameLabel = document.createElement("label");
  const userPasswordLabel = document.createElement("label");
  userNameLabel.textContent = "username:";
  userPasswordLabel.textContent = "password: ";
  const userContainer = document.createElement("div");
  const userNameInput = document.createElement("input");
  const userPasswordInput = document.createElement("input");
  const userInlogBtn = document.createElement("button");
  userInlogBtn.setAttribute("id", "userLoginBtn");
  userInlogBtn.setAttribute("class", "logged-out");
  userInlogBtn.disabled = true;

  const textDisclaimer = document.createElement("p");
  const goToSignUpBtn = document.createElement("button");
  goToSignUpBtn.setAttribute("id", "goToSignUpBtn");
  goToSignUpBtn.setAttribute("class", "goToBtn");

  welcomeHeading.textContent = "This is The Log In Page";
  textMessage.textContent = "Enter your username and a password to log in.";
  userInlogBtn.textContent = "LOG IN";
  textDisclaimer.textContent = "Want to create an account?";
  goToSignUpBtn.textContent = " SIGN UP >> "

  userContainer.appendChild(userNameLabel);
  userNameLabel.appendChild(userNameInput);
  userContainer.appendChild(userPasswordLabel);
  userPasswordLabel.appendChild(userPasswordInput);

  inputFormDiv.appendChild(welcomeHeading);
  inputFormDiv.appendChild(textMessage);
  inputFormDiv.appendChild(userContainer);
  inputFormDiv.appendChild(userInlogBtn);
  inputFormDiv.appendChild(textDisclaimer);
  textDisclaimer.appendChild(goToSignUpBtn);

  goToSignUpBtn.addEventListener("click", () => {
    console.log("click");
    renderSignUp();
  })

  function checkInput() {
    const name = userNameInput.value;
    const password = userPasswordInput.value;

    if (name && password) {
      userInlogBtn.disabled = false;
      userInlogBtn.classList.add('btnOk');
    } else {
      userInlogBtn.disabled = true;
    }
  }

  userNameInput.addEventListener("input", checkInput);
  userPasswordInput.addEventListener("input", checkInput);


  userInlogBtn.addEventListener("click", () => {
    console.log('logga in')
    let loginUser = {
      userName: userNameInput.value,
      userPassword: userPasswordInput.value
    }
    console.log(loginUser);

    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUser)
    })
    .then(result => result.json())
    .then(data => {
      console.log(data)
      if(data.userName) {
        localStorage.setItem("userName", loginUser.userName);
        renderLoggedInDiv(loginUser);
      }
      else {
        console.log('login failed.')
      }

    })

  })

}
