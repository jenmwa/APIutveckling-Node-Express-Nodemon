// console.log("Hello world!");
const userList = document.querySelector('#userList');
const newUser = document.querySelector('#newUser');
const newUserPassword = document.querySelector('#newUserPassword')
const saveUserBtn = document.querySelector('#saveUserBtn');


fetch("http://localhost:3001/users")
  .then(res => res.json())
  .then(data => {
    // console.log(data)
    renderUser(data);
  })

  function renderUser(users) {
    console.log(users);

    userList.innerHTML = '';
    users.map(user => {
      let li = document.createElement('li');
      li.id = user.userId;
      li.innerText = user.userId + ' = ' + user.userName + ' - ' + user.password;

      userList.appendChild(li);
    }); 
  };

  saveUserBtn.addEventListener('click', () => {
    //skapar ny användare
    let user = {userName: newUser.value, password: newUserPassword.value};
    console.log(user);

    //skickar till servern
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        renderUser(data);
      });
  });