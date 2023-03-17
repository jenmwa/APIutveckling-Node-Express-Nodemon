
export function renderLoggedInDiv(loginUser) {
    const inputFormDiv = document.querySelector("#userFormDiv");
    inputFormDiv.innerHTML = "";

    const userGreeting = document.createElement("h4");
    const nameSpan = document.createElement("span");
    nameSpan.textContent = loginUser.userName;
    nameSpan.classList.add("nameSpan"); 
  
    inputFormDiv.appendChild(userGreeting);

    
    userGreeting.appendChild(document.createTextNode("Welcome "));
    userGreeting.appendChild(nameSpan);
    userGreeting.appendChild(document.createTextNode("!"));

    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'inloggedUserDiv')


    let mainDivContent = `
        <h4>Let's create a new blogPost!</h4><br>
        <label>
            title:<br>
            <input type="text" id="blogTitle">
        </label><br>
        <label>
        text:</label>
        <textarea rows="20" cols="50" id="blogText">Bla bla blablabla bla Bla bla blablabla bla
        </textarea>
        <button>SAVE and publish</button>
        <button>Erase All</button>
        <br>
        <button>LOG OUT</button>
        
        `;

        mainDiv.innerHTML = mainDivContent;

    inputFormDiv.appendChild(mainDiv);
  }