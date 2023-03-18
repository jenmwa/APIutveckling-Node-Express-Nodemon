console.log('we´re connected!');

// let signedInDiv = document.querySelector('#signedInDiv');
// signedInDiv.innerHtml = "Hello";

/*************************************************************
 ******************* RENDER LOGIN HTML ***********************
 *************************************************************/

let loginDivContent = `
<h1>Welcome to the Login Section!</h1>
<h4>Log in:</h4>
<label>
    name:
    <input type="text" id="loginNameInput">
</label>
    password:
<label>
    <input type="text" id="loginPasswordInput">
</label>
<button id="loginBtn">LOG IN</button>
`;

let loginDiv = document.querySelector('#loginDiv');
loginDiv.innerHTML = loginDivContent;

/*************************************************************
 ***************** LOGIN USER EVENT **************************
 *************************************************************/

 const loginBtn = document.querySelector('#loginBtn')

 loginBtn.addEventListener('click', loginUser)
 
 function loginUser() {
     console.log('click loginBTN')
 }


// FETCH TILL DB USER
// KONTROLLERA NAMN+LÖSENORD
// INLOGGAD = TRUE

/*************************************************************
 ******************* RENDER LOGIN HTML ***********************
 *************************************************************/

 let signupDivContent = `
 <h1>Welcome to the Sign Up Section!</h1>
 <h4>Log in:</h4>
 <label>
     name:
     <input type="text" id="loginNameInput">
 </label>
     password:
 <label>
     <input type="text" id="loginPasswordInput">
 </label>
 <button id="signupBtn">CREATE USER</button>
 `;
 
 let signupDiv = document.querySelector('#signupDiv');
 signupDiv.innerHTML = signupDivContent;

/*************************************************************
 ***************** SIGN UP USER EVENT **************************
 *************************************************************/

 const signupBtn = document.querySelector('#signupBtn')

 signupBtn.addEventListener('click', SignUpUser)
 
 function SignUpUser() {
     console.log('click signUpBTN')
 }

//  FETCH till DB
//  KRYPTERA LÖSENORD
//  SPARA ANVÄNDARE & UPPGIFTER 