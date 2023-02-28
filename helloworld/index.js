// Skapa en ny mapp för dagens övningar kallad ”hello".
// Öppna mappen i VS Code.
// Skapa en fil som heter index.js med som skriver ut hello world med hjälp av console.

// Kör programet i VS Code-terminalen med:
// node index.js

// Hitta ett paket på NPM som låter dig sätta en färg på texten i terminalen.
// Installera modulen från terminalen med npm install.

// Bygg ut er index.js så att ni använder modulen, ändra färg på texten som skrivs ut i terminalen.

// kör programet i terminalen med:
// node index.js
import chalk from 'chalk';
console.log(chalk.green('Hello world!'));
console.log(chalk.redBright('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);


import http from "http";

http.createServer(function (reg, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello World Wide Web");
}).listen(1337);

console.log("servern är igång på localhost:1337");
