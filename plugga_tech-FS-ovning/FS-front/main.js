console.log("it´s connected!");

/******************************************************
 * ***************** Render HTML  *********************
 ******************************************************/

let inputForm = `

  <h4>Welcome to the inputform for the superdupermegafantastic maillist!</h4>
  <p>please fill out your name and email-adress here:<br>
    <label>name:
      <input type="text">
    </label><br>
    <label>email:
      <input type="text">
    </label><br>
    
    <button id="sendBtn" disabled>SUBMIT</button>
    <br><br>
    ----------------------------------------
    `;

let inputFormDiv = document.querySelector("#inputFormDiv");
inputFormDiv.innerHTML = inputForm;

/******************************************************
 * ************** Render HTML AGAIN *******************
 ******************************************************/

const inputFormDivNew = document.querySelector("#inputFormDivNew");
const nameInput = document.createElement('input');
const emailInput = document.createElement('input');
const submitEmailBtn = document.createElement('button');
submitEmailBtn.disabled = true;

renderHtmlEmailForm();

function renderHtmlEmailForm() {
  const heading = document.createElement('h4');
  const message = document.createElement('p');
  const nameLabel = document.createElement('label');
  const emailLabel = document.createElement('label');

  heading.textContent = 'Welcome to the inputform for the superdupermegafantastic maillist!';
  message.textContent = 'please fill out your name and email-adress here:';

  nameLabel.textContent = 'name:';
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'nameInputField')
  nameInput.placeholder="your name";
  nameInput.required = true;


  emailLabel.textContent = 'email:';
  emailInput.setAttribute('type', 'text');
  emailInput.setAttribute('id', 'emailInputField')
  emailInput.placeholder="your email";
  emailInput.required = true;


  submitEmailBtn.setAttribute("id", "sendBtn");
  submitEmailBtn.textContent = 'SUBMIT EMAIL';

  inputFormDivNew.appendChild(heading);
  inputFormDivNew.appendChild(message);
  inputFormDivNew.appendChild(nameLabel);
  
  nameLabel.appendChild(nameInput);
  inputFormDivNew.appendChild(emailLabel);
  emailLabel.appendChild(emailInput);
  inputFormDivNew.appendChild(submitEmailBtn);
}

/******************************************************
 * ************** activate LoginBtn *******************
 ******************************************************/

//.trim() removes spaces, tabs, and line breaks. from both ends of a string.

function checkInputValidity() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  
  if (name && email) {
    submitEmailBtn.disabled = false;
  } else {
    submitEmailBtn.disabled = true;
  }
}

nameInput.addEventListener('input', checkInputValidity);
emailInput.addEventListener('input', checkInputValidity);

/******************************************************
 * ************** Btn eventlistener *******************
 ******************************************************/

submitEmailBtn.addEventListener('click', () => {
  console.log('click');

  //skapa ett nytt objekt
  let newInput = { name: nameInput.value, email: emailInput.value };
  console.log(newInput);

  //skickar till servern
  fetch('http://localhost:3000/email/add', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newInput),
  })
    .then((respons) => respons.json())
    .then((data) => {
      console.log(data);
    })

})