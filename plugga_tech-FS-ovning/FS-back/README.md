## Övning: Samla på e-postadresser

Skapa ett enkelt API för att samla e-postadresser från ett formulär. Spara sedan alla adresser som komma separerade adresser i en textfil på servern (mails.json).

installera
```bash
npm install express-generator --no-view
```

```bash
npm install --save-dev nodemon
```

och skapa skript i package.json;

"start:dev": "nodemon index.html";
körs igång med npx nodemon


skapa json-fil i rot
```bash
emails.json
```

i routern där din json-fil ska användas
```bash
    const fs = require('fs')
```

OM headless:
installera
```bash
    npm install cors
```

i app.js
```bash
    var cors = require('cors')
```
```bash
    app.use(cors())
```

i routern där FS ska användas
```bash
    const fs = require('fs');
```