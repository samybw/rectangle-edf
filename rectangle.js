var fs = require('fs');


const data = fs.readFileSync('c1.txt', 'UTF-8');
const lines = data.split(/\r?\n/).map((element) => { 
    var newElement = element.split('').map(Number) ;
    return newElement;
})

console.log(lines);

  