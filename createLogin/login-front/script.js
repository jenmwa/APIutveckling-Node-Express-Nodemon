/******************************************************
 *********** RENDER NEW USER FORM in HTML *************
 ******************************************************/

const createNewUserForm = document.querySelector("#createNewUserForm");

function renderNewUserForm() {
  createNewUserForm.innerHTML = `
    <label>username:
      <input type="text" id="newUser">
    </label>
    <label>password:
      <input type="text" id="newUserPassword">
    </label>
    <button id="saveUserBtn" disabled>LOGIN</button>
    `;
}
renderNewUserForm();

/******************************************************
 *********** RENDER NEW USER FORM in HTML *************
 ******************************************************/

 const inlogForm = document.querySelector("#inlogForm");

 function renderinlogForm() {
   inlogForm.innerHTML = `
     <label>username:
       <input type="text" id="inlogUser">
     </label>
     <label>password:
       <input type="text" id="inlogPassword">
     </label>
     <button id="inlogBtn">LOGIN</button>
     `;
 }
 renderinlogForm();

/******************************************************
 * ************** create userList in HTML *************
 ******************************************************/

const newUser = document.querySelector("#newUser");
const newUserPassword = document.querySelector("#newUserPassword");
const saveUserBtn = document.querySelector("#saveUserBtn");
const userListTable = document.querySelector('#userListTable');

fetch("http://localhost:3001/users")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data)
    renderUserTable(data);
  });

function renderUserTable(users) {
  console.log(users);

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
  console.log('click')
  //skapar ny användare
  let user = { userName: newUser.value, password: newUserPassword.value };
  console.log(user);

  //skickar till servern
  fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      renderUser(data);
    });

    
});

