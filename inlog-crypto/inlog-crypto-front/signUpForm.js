export function renderSignUp() {
  console.log("HEY");
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

  welcomeHeading.textContent = "Welcome To The Sign Up page";
  textMessage.textContent = "Enter a username and a password to register.";
  userInlogBtn.textContent = "SIGN UP";
  textDisclaimer.textContent = "Already have an account? LOG IN >> ";

  userContainer.appendChild(userNameLabel);
  userNameLabel.appendChild(userNameInput);
  userContainer.appendChild(userPasswordLabel);
  userPasswordLabel.appendChild(userPasswordInput);

  inputFormDiv.appendChild(welcomeHeading);
  inputFormDiv.appendChild(textMessage);
  inputFormDiv.appendChild(userContainer);
  inputFormDiv.appendChild(userInlogBtn);
  inputFormDiv.appendChild(textDisclaimer);
}
