const {readFileSync, writeFileSync} = require('fs')
console.log('sart');

const fisrt = readFileSync('./content/first.txt', 'utf8');
const sercond = readFileSync('./content/second.txt', 'utf8');
writeFileSync('./content/resutl-sync.txt',`Here is the result: ${fisrt}, ${sercond}`, {flag: 'a'})

console.log('done with this task');
console.log('starting the next one');