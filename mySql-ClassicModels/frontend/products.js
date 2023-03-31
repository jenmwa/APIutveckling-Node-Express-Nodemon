export default function renderproductSection() {
    console.log('were showing productPage');
    const app = document.querySelector('#app');
    app.innerText = '';
    const headerMain = document.createElement('h2');
    headerMain.innerText = "Products";
 
    app.appendChild(headerMain);
}