
alltid dubbelkolla så att vi har node
```bash
    node -v
```

initiera npm
```bash
    npm init
```

installera projektet
```bash
    npm install
```

skapa fil, en consol.log & kontrollera att det skrivs ut i terminalen:
```bash
    node filnamn.js
```

installera express som en dependency:
```bash
    npm install express --save
```

importera express-paketet till projektet:
```bash
    const express = require('express');
    const app = express();
```

kör igång och starta servern:
```bash
    app.listen(3000, function(){
        console.log('servern är igång på localhost:3000');
    });
```

kolla så att servern är igång, i terminalen:
```bash
    node filnamn.js
```

skapa route;
```bash
   app.get('/', function(req, res){
    res.send('<h1>Hello WISCONSIN from express</h1>')
   })
```
_REMINDER; starta om server_

:
```bash
    node filnamn.js
```

INSTALLERA NODEMON:
i projektet lokalt som devdep:

installera lokalt:
```bash
    npm install nodemon --save-dev
```

script i package.json:
```bash
"scripts": {
    "start": "nodemon app.js"
} 
```
(app om app är routern, annars nnamnet på det din; ex server.js, index.js osv)

kör igång:
```bash
    npm start
```


slippa uppdatera manuellt, installera paket nodemon:
```bash
    npm install -g nodemon
```
Se till att du har rättigheter att installera globalt!


ALTERNATIV:
INSTALLERA EXPRESS express-generator med färdiga filer, sätter upp en struktur åt oss.

```bash
    npx express-generator --no-view
```

köra igång:
```bash
    npm install
```

starta server:
```bash
    npm start
```
localhost:3000 default
(kolla annars bin/www/ var port )
app.js ingången på server, routern på servern.

<!-- npx express-generator --no-view -->
<!-- npm install -->
<!-- app.js är routern pås ervern -->
<!-- npm install -g nodemon -->