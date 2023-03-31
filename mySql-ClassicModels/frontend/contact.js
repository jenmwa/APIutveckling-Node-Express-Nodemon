//Kontaktsidan skall visa alla kontor med adress samt vilken personal med kontaktuppgifter arbetar på det kontoret.
//1. visa alla kontor med adress
//2.därefter personal m kontaktuppgifter som jobbar där

export default function renderContactSection() {
  console.log("were showing contactPage");
  const app = document.querySelector("#app");
  app.innerText = "";
  const headerMain = document.createElement("h2");
  headerMain.innerText = "Contact";
  app.appendChild(headerMain);

  const officeDiv = document.createElement("div");

  fetch("http://localhost:3000/offices")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      data.map((item) => {
        const officeCityDiv = document.createElement("div");
        officeCityDiv.setAttribute("id", "officeCityDiv");
        const officeHeader = document.createElement("h4");
        const officeAdress = document.createElement("p");
        const officePhone = document.createElement("p");

        officeHeader.innerText = item.city;
        officeAdress.innerText =
          item.addressLine1 +
          (item.addressLine2 ? ", " + item.addressLine2 : "") +
          ", " +
          item.city +
          (item.state ? ", " + item.state : "") +
          ", " +
          item.country;

        officePhone.innerText = "phone: " + item.phone;

        officeCityDiv.append(officeHeader, officeAdress, officePhone);
        officeDiv.appendChild(officeCityDiv);

        let employeesDisplayed = false;

        officeCityDiv.addEventListener("click", () => {
          console.log(item.officeCode);
          if (!employeesDisplayed) {
            renderEmployeesPerOffice(item.officeCode, officeCityDiv);
            employeesDisplayed = true;
          }
        });
        
        app.appendChild(officeDiv);
      });
    });

  function renderEmployeesPerOffice(officeCode, officeCityDiv) {
    const employeesDiv = document.createElement("div");
    const title = document.createElement("h5");
    title.innerText = "Employees:";
    employeesDiv.appendChild(title);


    fetch('http://localhost:3000/employees/' + officeCode)
      .then(res => res.json())
      .then(data => {
        console.log(data);


        data.map((employee) => {

          const employees = document.createElement('p');
  
          employees.innerText =
          employee.firstName + ' ' + employee.lastName + ', ' + employee.jobTitle + ', ' + employee.email;
  
  

          employeesDiv.appendChild( employees);
        }) 
        officeCityDiv.appendChild(employeesDiv);  
        // const officeCityDiv = document.querySelector("#officeCityDiv");
        // officeCityDiv.appendChild(employeesDiv);

      })
  }
}
