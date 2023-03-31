export default function renderStartSection() {
    console.log('were showing startPage');
    const app = document.querySelector('#app');
    app.innerText = '';
    const headerMain = document.createElement('h2');
    headerMain.innerText = "Welcome to classic MODELS webshop";
 
    app.appendChild(headerMain);
 }