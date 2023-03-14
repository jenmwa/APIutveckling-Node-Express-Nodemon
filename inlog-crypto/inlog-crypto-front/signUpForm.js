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

  function checkInput() {
    const name = userNameInput.value;
    const password = userPasswordInput.value;

    if (name && password) {
      userInlogBtn.disabled = false;
    } else {
      userInlogBtn.disabled = true;
    }
  }

  userNameInput.addEventListener("input", checkInput);
  userPasswordInput.addEventListener("input", checkInput);

  function handleLogin() {
    console.log("CLICK");

    if (userInlogBtn.classList.contains("logged-out")) {
      let newUser = {
        userName: userNameInput.value,
        userPassword: userPasswordInput.value,
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
          toggleLoggedStatus(newUser);
          //Göm headern?
        });

      userNameInput.value = "";
      userPasswordInput.value = "";
    } else {
      toggleLoggedStatus(null);
    }
  }

  function toggleLoggedStatus(newUser) {
    if (userInlogBtn.classList.contains("logged-out")) {
      userInlogBtn.classList.remove("logged-out");
      userInlogBtn.classList.add("logged-in");
      userInlogBtn.innerHTML = "LOGGA UT";
      welcomeHeading.innerHTML = "";

      const nameSpan = document.createElement("span");
      nameSpan.textContent = newUser.userName;
      nameSpan.classList.add("nameSpan");
      welcomeHeading.appendChild(document.createTextNode("Welcome "));
      welcomeHeading.appendChild(nameSpan);

      welcomeHeading.appendChild(document.createTextNode("!"));
      textMessage.innerHTML = "What do you want to do today?";
      userContainer.innerHTML = "";
      textDisclaimer.innerHTML = "";

    } else {
      userInlogBtn.setAttribute("class", "logged-out");
      renderSignUp();
    }

    
  }

  //add to localstorage

  userInlogBtn.addEventListener("click", handleLogin);
}
