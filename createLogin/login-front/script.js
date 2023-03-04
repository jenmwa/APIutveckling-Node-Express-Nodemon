/******************************************************
 *********** RENDER INLOG FORM in HTML *************
 ******************************************************/

let inlogForm = `
  <label>username:
  <input type="text" id="inlogUser">
  </label>
  <label>password:
  <input type="text" id="inlogPassword">
  </label>
  <button id="inlogBtn">LOGIN USER</button>
 `;

let inlogContainer = document.querySelector("#inlogContainer");
inlogContainer.innerHTML = inlogForm;

let inlogUser = document.querySelector("#inlogUser");
let inlogPassword = document.querySelector("#inlogPassword");
let inlogBtn = document.getElementById("inlogBtn");

/******************************************************
 *********** RENDER NEW USER FORM in HTML *************
 ******************************************************/

let createNewUserForm = `
    <label>username:
      <input type="text" id="newUser">
    </label>
    <label>password:
      <input type="text" id="newUserPassword">
    </label>
    <button id="saveUserBtn" disabled>CREATE USER</button>
 `;

let createNewUserContainer = document.querySelector("#createNewUserContainer");
createNewUserContainer.innerHTML = createNewUserForm;

const newUser = document.querySelector("#newUser");
const newUserPassword = document.querySelector("#newUserPassword");
const saveUserBtn = document.querySelector("#saveUserBtn");

/******************************************************
 * ************** create userTable in HTML *************
 ******************************************************/

const userListTable = document.querySelector("#userListTable");

fetch("http://localhost:3000/users")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data)
    renderUserTable(data);
  });

function renderUserTable(users) {
  // console.log(users);

  let tableHtml = `
    <tr>
      <th>Id</th>
      <th>name</th>
      <th>password</th>
    </tr>
  `;

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    tableHtml += `
      <tr>
        <td>${user.userId}</td>
        <td>${user.userName}</td>
        <td>${user.password}</td>
      </tr>
    `;
  }
  userListTable.innerHTML = tableHtml;
}

/******************************************************
 * ************** activate LoginBtn *******************
 ******************************************************/

newUser.addEventListener("input", checkInputValidity);
newUserPassword.addEventListener("input", checkInputValidity);

function checkInputValidity() {
  if (newUser.value && newUserPassword.value) {
    saveUserBtn.disabled = false;
  } else {
    saveUserBtn.disabled = true;
  }
}

/******************************************************
 * ************** EVENTLISTENER ADD new user *************
 ******************************************************/

saveUserBtn.addEventListener("click", () => {
  console.log("click");
  //skapar ny användare
  let user = { userName: newUser.value, password: newUserPassword.value };
  console.log(user);

  //skickar till servern
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      renderUserTable(data);
    });
  // empty inputfield after submit
  newUser.value = "";
  newUserPassword.value = "";
});
//eventlistener for login
inlogBtn.addEventListener("click", () => {
  console.log("clicketi");
  //skapar ny användare
  let inloggedUser = {
    userName: inlogUser.value,
    password: inlogPassword.value,
  };
  console.log(inloggedUser);

  //skickar till servern
  fetch("http://localhost:3000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inloggedUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  // empty inputfield after submit
  inlogUser.value = "";
  inlogPassword.value = "";
});
