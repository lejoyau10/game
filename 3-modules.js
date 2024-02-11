const names = require('./names');
const sayHi = require('./5-utils');
const data = require('./6-alternatives-flavor');
console.log(data);
sayHi(names.john);
sayHi(names.peter);
sayHi('Susan');

require('./7-mind-grenade')