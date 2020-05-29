var fs = require('fs');


const data = fs.readFileSync('c1.txt', 'UTF-8');
const c1 = data.split(/\r?\n/).map((element) => { 
    var newElement = element.split('').map(Number) ;
    return newElement;
})

//console.log(c1);

const data2 = fs.readFileSync('c2.txt', 'UTF-8');
const c2 = data2.split(/\r?\n/).map((element) => { 
    var newElement = element.split('').map(Number) ;
    return newElement;
})

//console.log(c2);
function match(c1 , c2, ligne, colonne) {
    ligne2 = 0 
while (ligne2 < c1.length) {
   colonne2 = 0

    while (colonne2 < c1[ligne2].length) {
        if (c1[ligne2][colonne2] != c2[ligne + ligne2][colonne + colonne2]) {
            return false
        }
        
        
        colonne2++
    }
    ligne2++
}
return true 
}

function rectangle(c1 , c2) {
    var ligne = 0 ; 
while (ligne < c2.length) {
    var colonne = 0 ;
    while (colonne < c2[ligne].length) {
    if (c2[ligne][colonne] == c1[0][0] ) {
    if (match(c1 , c2, ligne, colonne)) {
        console.log([colonne]+ ',' +[ligne]);
        return true
     }
   
    }
    colonne++
     }
 ligne++
    }
    console.log("Pas de Match");
return false
  
}

rectangle(c1 ,c2)


     
    


    
    




  