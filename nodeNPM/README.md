Hello Node.js

kolla så att node är installerat 
```bash
  node -v
```

skriv en consol.log.<br>
kör på vår node server:
```bash
  node index.js
```

hämta paketet
kolla så att node är installerat 
```bash
  let http = require('http');
```

skapa server
```bash
  http.createServer
```
den i sin tur tar en callback, 2 paramtrar, request & response
```bash
  http.createServer(function(req,res){});
```

behöver först skicka med när det gått bra.
```bash
  http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
  });
```

res.end, där berättar vi att responsen tar slut, det här är innehållet vi skickar till webbläsaren:
```bash
  http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Welcome Stranger!');
  });
```
och för funktionen behöver vi speca vilken port vi ska lyssna på:
```bash
  http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Welcome Stranger!');
  }).listen(1337);
```
och fint att skicka något för att kolla att servern är igång.
```bash
  http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Welcome Stranger!');
  }).listen(1337);
  console.log("servern är igång på localhost:1337")
```

Hitta ett paket på NPM som låter dig sätta en färg på texten i terminalen.
(populärt, nyligen uppdaterat, safe)
här: chalk
```bash
    npm i chalk
```
importera i filen:
```bash
    import chalk from 'chalk';
```

typ modul i package.json
```bash
    {
    "type": "module"
    }
```
och i fil, gör om require av http till import:

```bash
    import http from 'http';
```