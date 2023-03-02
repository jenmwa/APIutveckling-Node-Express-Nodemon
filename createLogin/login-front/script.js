/******************************************************
 * ************** RENDER FORM in HTML ******************
 ******************************************************/

const inlogForm = document.querySelector("#inlogForm");

function renderForm() {
  inlogForm.innerHTML = `
    <label>username:
      <input type="text" id="newUser">
    </label>
    <label>password:
      <input type="text" id="newUserPassword">
    </label>
    <button id="saveUserBtn" disabled>LOGIN</button>
    `;
}
renderForm();

/******************************************************
 * ************** create userList in HTML *************
 ******************************************************/

// const userList = document.querySelector("#userList");

// const newUser = document.querySelector("#newUser");
// const newUserPassword = document.querySelector("#newUserPassword");
// const saveUserBtn = document.querySelector("#saveUserBtn");

// fetch("http://localhost:3001/users")
//   .then((res) => res.json())
//   .then((data) => {
//     // console.log(data)
//     renderUser(data);
//   });

// function renderUser(users) {
//   console.log(users);

//   userList.innerHTML = "";
//   users.map((user) => {
//     let li = document.createElement("li");
//     li.id = user.userId;
//     li.innerText = user.userId + " = " + user.userName + " - " + user.password;

//     userList.appendChild(li);
//   });
// }


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
 * ************** EVENTLISTENER ADD user *************
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


// ADD LOGIC:
//   IF userName || password is empty = SaveBtn Disable