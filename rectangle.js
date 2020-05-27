var fs = require('fs');

fs.readFile('c1.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});