console.log("Hey hey it´s connected!");

const inputFormDiv = document.querySelector("#inlogFormDiv");

const welcomeHeading = document.createElement("h1");
const textMessage = document.createElement("p");
const userContainer = document.createElement('div');
const userNameInput = document.createElement("input");
const userPasswordInput = document.createElement("input");
const userInlogBtn = document.createElement("button");
userInlogBtn.setAttribute("id", "userLoginBtn");

renderSignInHtml();

function renderSignInHtml() {
  const userNameLabel = document.createElement("label");
  const userPasswordLabel = document.createElement("label");

  welcomeHeading.textContent = "Welcome To The Sign Up page";
  textMessage.textContent = "Enter a username and a password to register.";
  userNameLabel.textContent = "username:";
  userPasswordLabel.textContent = "password: ";
  userInlogBtn.textContent = "SIGN UP";

  inputFormDiv.appendChild(welcomeHeading);
  inputFormDiv.appendChild(textMessage);
  inputFormDiv.appendChild(userContainer);
  userContainer.appendChild(userNameLabel);
  userNameLabel.appendChild(userNameInput);
  userContainer.appendChild(userPasswordLabel);
  userPasswordLabel.appendChild(userPasswordInput);
  inputFormDiv.appendChild(userInlogBtn);
}

userInlogBtn.addEventListener("click", () => {
  console.log("CLICK");

  let newUser = {
    userName: userNameInput.value,
    userPassword: userPasswordInput.value
  }
  console.log(newUser);

  fetch('http://localhost:3000/users/add', {
    method: 'POST',
    headings: {
      'Content-Type': 'application/JSON'
    }, 
    body: JSON.stringify(newUser)
  })
  .then((respons) => respons.json())
  .then((data) =>
    console.log(data),
    userInlogBtn.innerHTML = "LOGGA UT",
    welcomeHeading.innerHTML = 'Welcome ' + newUser.userName + '!',
    textMessage.innerHTML = "What do you want to do today?",
    userContainer.innerHTML = '',

    )
});
