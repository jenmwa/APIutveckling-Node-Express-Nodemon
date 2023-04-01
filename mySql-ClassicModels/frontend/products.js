// Produktsidan skall visa samtliga produktkategorier.
//Klickar besökaren på en kategori så skall samtliga produkter från den kategorin visas.

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

        const productLineCatDiv = document.createElement("div");
        productLineCatDiv.setAttribute("id", "officeCityDiv");
        const productLineHeader = document.createElement("h4");
        const productLineDescription = document.createElement("p");


        productLineHeader.innerText = item.productLine;
        productLineDescription.innerText =
          item.textDescription;


          productLineCatDiv.append(productLineHeader, productLineDescription);
        productLineDiv.appendChild(productLineCatDiv);

        let isProductsDisplayed = false;

        productLineCatDiv.addEventListener('click', () => {
          console.log('click on productLineCatDiv', item.productLine);
          if (!isProductsDisplayed) {
            renderProductsPerProductLine(item.productLine, productLineCatDiv);
            isProductsDisplayed = true;
            }
          })
        

        app.appendChild(productLineDiv);
      
      });
    });

    function renderProductsPerProductLine(productLine, productLineCatDiv) {
      console.log('render html for products!', productLine);

      const productDiv = document.createElement('div')
      const title = document.createElement("h5");
      title.innerText = "Products:";
      productDiv.appendChild(title);

      fetch("http://localhost:3000/products/" + productLine)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        data.map(item => {
          const p = document.createElement('p');
          p.innerHTML = item.productName;

          productDiv.appendChild(p);
        })

        })
        productLineCatDiv.appendChild(productDiv)
      
    }
}
