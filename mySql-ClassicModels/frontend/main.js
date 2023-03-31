console.log("Hey, were connected!");
import renderContactSection from "./contact.js";
import renderproductSection from "./products.js";
import renderStartSection from "./start.js";

const app = document.querySelector("#app");

function addEventListeners() {


  const startPageLink = document.querySelector('#startPage');
  const productsPageLink = document.querySelector('#productPage');
  const contactPageLink = document.querySelector('#contactPage');

  startPageLink.addEventListener('click', () => {
    console.log('click startPage');
    renderStartSection() ;
  })

  productsPageLink.addEventListener('click', () => {
    console.log('click productPage');
    renderproductSection()
  })

  contactPageLink.addEventListener('click', () => {
    console.log('click contactPage')
    renderContactSection();
  })


}
renderStartSection() 
addEventListeners();