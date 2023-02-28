## ROUTING & REQUEST

starta nytt projekt:
```bash
    npm init
```

installera:
```bash
    npm install
```

hämta express-generator:
```bash
    npx express-generator --no-view
```

kör igång:
```bash
    npm install
```

INSTALLERA NODEMON: i projektet lokalt som devdep:

installera lokalt:
```bash
    npm install nodemon --save-dev
```

script i package.json:
```bash
"scripts": {
    "start:dev": "nodemon index.html"
} 
```

kör igång:
```bash
    npm run start:dev
```

INSTALLERA CORS:
_När du sedan fetchar mellan två lokala servrar på din dator tex om du startar en frontend klient via VSC och en express server via terminalen så kan du råka ut för så kallade “Access-Controll-Allow-Origin” CORS problem. Det är ett säkerhetsprotokoll för att skydda anrop som görs till en server._ 

installera CORS:
```bash
    npm install cors
```

_Du behöver importera CORS på de routrar där du får fel. Dvs du måste importera paketet med const cors = require(“cors”) i samtliga filer där du gör anropen! Samt sedan initiera cors pluginet med antingen app.use(cors()) eller router.use(cors()) innan dina routers i filen._

importera paketet:
```bash
const cors = require("cors");
```
initiera cors-pluginet
```bash
    router.use(cors());
```
eller
```bash
    app.use(cors())
```

