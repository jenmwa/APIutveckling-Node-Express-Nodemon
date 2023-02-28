import http from 'http';
import chalk from 'chalk';

const hello = "hello World Wide Webzz";
console.log(hello);

http.createServer(function(req,res){
    res.writeHead(200, {'CreateContent': 'text/plain'});
    res.end('Welcome Stranger');
}).listen(1337);

console.log('Servern är igång på localhost:1337');
console.log(chalk.bgYellow('let there be some colors'));
console.log(chalk.magenta('and'),chalk.strikethrough('some'),chalk.bgCyan('textstyling'),chalk.dim('and'),chalk.inverse('som more'));