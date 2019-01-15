const interpulateME = require('./interpolateME');

var test = interpulateME("The {{color}} {{adjective}} {{animal}} jumps over the {{color2}} {{animal2}}.",
{color: 'black', adjective:'inconsiderate', animal: 'goat', color2: 'white', animal2: 'sheep'});

var test2 = interpulateME("{{one}} + {{one}} = 2",{one: 1})

console.log(test);
console.log(test2)