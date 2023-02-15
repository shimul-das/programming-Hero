var graduate = true;
var salary = 20000;
var car = 1;

if (graduate == true && salary > 30000 && car >= 1) {
    console.log('eso biyew kore feli')
} else {
    console.log('tor kopale biye nai')
}

if (graduate == true || salary > 30000 || car >= 1) {
    console.log('eso biyew kore feli')
} else {
    console.log('tor kopale biye nai')
}

// ek sathe amra and or use korte pari/.

if ((graduate == true && salary > 30000) || car >= 1) {
    console.log('eso biyew kore feli')
} else {
    console.log('tor kopale biye nai')
}
// ekhane graduate hote hobe and salary 30k er vesi hote hobe must, othoba gari thaklei hobe.

if (graduate == true && (salary > 30000 || car >= 1)) {
    console.log('eso biyew kore feli')
} else {
    console.log('tor kopale biye nai')
}
// ekhane graduate hote hobe and salary 30k er vesi hote hobe othoba gari thaklei hobe.