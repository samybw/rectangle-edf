var fs = require('fs');


const data = fs.readFileSync('c1.txt', 'UTF-8');
const findThis = data.split(/\r?\n/).map((element) => { 
    var newElement = element.split('').map(Number) ;
    return newElement;
})

console.log(findThis);

const data2 = fs.readFileSync('c2.txt', 'UTF-8');
const inThat = data2.split(/\r?\n/).map((element) => { 
    var newElement = element.split('').map(Number) ;
    return newElement;
})

console.log(inThat);

var parcourirl = 0 ; 
var parcourirc = 0 
while (parcourirl < inThat.length) {
   
    while (parcourirc < inThat[parcourirl]) {
    console.log(parcourc);
     parcourirc++
    }
  parcourirl++
    
    
}


  