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

  fetch("http://localhost:3000/offices")
    .then(res => res.json())
    .then(data => {
      console.log(data);

      const officeDiv = document.createElement('div');
      data.map(item => {
        const officeHeader = document.createElement('h4');
        const officeAdress = document.createElement('p');
        const officePhone = document.createElement('p');

        officeHeader.innerText = item.city;
        officeAdress.innerText = item.addressLine1 + (item.addressLine2 ? ", " + item.addressLine2 : "") + ", " + item.city + (item.state ? ", " + item.state : "") + ', ' + item.country;
        
        officePhone.innerText = 'phone: ' + item.phone;

        officeDiv.append(officeHeader, officeAdress, officePhone);
    
   
      })
    app.appendChild(officeDiv)

    })
}
