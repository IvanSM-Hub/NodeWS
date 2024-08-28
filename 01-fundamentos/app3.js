
const fs = require('fs');

const content = fs.readFileSync('README.md','UTF-8');

const wordCount = content.split(' ').length;

const reactCount = content.match(/react/gi ?? []).length;

console.log('Palabras: ' + wordCount);
console.log('React contador: ' + reactCount);

