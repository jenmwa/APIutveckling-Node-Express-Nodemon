import { renderLogInHtml } from "./loginForm.js";
import { signUpOk } from "./signUpOk.js";

export function renderSignUp() {
  console.log("HEY");

  const btnDiv = document.getElementById("btnDiv");
  btnDiv.innerHTML = "";

  const inputFormDiv = document.querySelector("#userFormDiv");
  inputFormDiv.innerHTML = "";

  const welcomeHeading = document.createElement("h1");
  const textMessage = document.createElement("p");
  const userNameLabel = document.createElement("label");
  const userPasswordLabel = document.createElement("label");
  userNameLabel.textContent = "username:";
  userPasswordLabel.textContent = "password: ";

  const userEmailLabel = document.createElement("label");
  userEmailLabel.textContent = "email:";

  const userContainer = document.createElement("div");
  const userNameInput = document.createElement("input");
  const userPasswordInput = document.createElement("input");
  const userEmailInput = document.createElement("input");

  const userInlogBtn = document.createElement("button");
  userInlogBtn.setAttribute("id", "userLoginBtn");
  userInlogBtn.setAttribute("class", "logged-out");
  userInlogBtn.disabled = true;

  const textDisclaimer = document.createElement("p");
  const goToBtn = document.createElement("button");
  goToBtn.setAttribute("id", "goToBtn");
  goToBtn.setAttribute("class", "goToBtn");

  welcomeHeading.textContent = "This Is The Sign Up page";
  textMessage.textContent = "Enter a username and a password to register.";
  userInlogBtn.textContent = "SIGN UP";
  textDisclaimer.textContent = "Already have an account?";
  goToBtn.textContent = " LOG IN >> "

  userContainer.appendChild(userNameLabel);
  userNameLabel.appendChild(userNameInput);
  userContainer.appendChild(userPasswordLabel);
  userPasswordLabel.appendChild(userPasswordInput);
  userContainer.appendChild(userEmailLabel);
  userEmailLabel.appendChild(userEmailInput)

  inputFormDiv.appendChild(welcomeHeading);
  inputFormDiv.appendChild(textMessage);
  inputFormDiv.appendChild(userContainer);
  inputFormDiv.appendChild(userInlogBtn);
  inputFormDiv.appendChild(textDisclaimer);
  textDisclaimer.appendChild(goToBtn);

  function checkInput() {
    const name = userNameInput.value;
    const password = userPasswordInput.value;
    const email = userEmailInput.value;

    if (name && password && email) {
      userInlogBtn.disabled = false;
      userInlogBtn.classList.add('btnOk');
    } else {
      userInlogBtn.disabled = true;
    }
  }

  userNameInput.addEventListener("input", checkInput);
  userPasswordInput.addEventListener("input", checkInput);
  userEmailInput.addEventListener("input", checkInput);

  function handleLogin() {
    console.log("CLICK");

    // if (userInlogBtn.classList.contains("logged-out")) {
      let newUser = {
        userName: userNameInput.value,
        userPassword: userPasswordInput.value,
        userEmail: userEmailInput.value

      };
      console.log(newUser);

      fetch("http://localhost:3000/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((respons) => respons.json())
        .then((data) => {
          console.log(data);
          // toggleLoggedStatus(newUser);
          signUpOk(newUser);
        });

      userNameInput.value = "";
      userPasswordInput.value = "";
      userEmailInput.value = "";
    // } else {
    
      // toggleLoggedStatus(null);
    // }
  }

  // function toggleLoggedStatus(newUser) {
  //   if (userInlogBtn.classList.contains("logged-out")) {
  //     userInlogBtn.classList.remove("logged-out");
  //     userInlogBtn.classList.add("logged-in");
  //     userInlogBtn.innerHTML = "LOGGA UT";
  //     welcomeHeading.innerHTML = "";

  //     const nameSpan = document.createElement("span");
  //     nameSpan.textContent = newUser.userName;
  //     nameSpan.classList.add("nameSpan");
  //     welcomeHeading.appendChild(document.createTextNode("Welcome "));
  //     welcomeHeading.appendChild(nameSpan);

  //     welcomeHeading.appendChild(document.createTextNode("!"));
  //     textMessage.innerHTML = "What do you want to do today?";
  //     userContainer.innerHTML = "";
  //     textDisclaimer.innerHTML = "";

  //   } else {
  //     userInlogBtn.setAttribute("class", "logged-out");
  //     renderSignUp();
  //   }
  // }

  //add to localstorage
  userInlogBtn.addEventListener("click", handleLogin);

  goToBtn.addEventListener("click", () => {
    console.log("clicketi");
    renderLogInHtml();
  })
}
