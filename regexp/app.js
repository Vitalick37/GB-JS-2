'use strict';

let text = 'Lorem ipsum, \'dolor\' sit amet can\'t consectetur adipisicing elit';
let regexp = /\'/g;
let text2 = text.replace(regexp, '"');
console.log(text2);