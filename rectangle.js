var fs = require('fs');

fs.readFile('./c1.txt','utf8',(err, data) => {
    if (err) throw err;
   return console.log(data);
  });

  fs.readFile('./c2.txt','utf8',(err, data) => {
    if (err) throw err;
   return console.log(data);
  });
  