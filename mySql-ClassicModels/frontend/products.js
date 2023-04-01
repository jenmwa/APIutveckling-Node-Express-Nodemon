export default function renderproductSection() {
  console.log("were showing productPage");
  const app = document.querySelector("#app");
  app.innerText = "";
  const headerMain = document.createElement("h2");
  headerMain.innerText = "Products";
  app.appendChild(headerMain);

  const productLineDiv = document.createElement('div');

  fetch("http://localhost:3000/productLines")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      data.map(item =>{
        console.log(item)

        const officeCityDiv = document.createElement("div");
        officeCityDiv.setAttribute("id", "officeCityDiv");
        const productLineHeader = document.createElement("h4");
        const productLineDescription = document.createElement("p");


        productLineHeader.innerText = item.productLine;
        productLineDescription.innerText =
          item.textDescription;


        officeCityDiv.append(productLineHeader, productLineDescription);
        productLineDiv.appendChild(officeCityDiv);

      
      });
      
      app.appendChild(productLineDiv);

    });
}
