// import {pi,a} from './External.js';
// const c=43;
// console.log('file from import export js ',pi,a,c);

//import everything

// import * as test from './External.js';
// console.log(test);

// import {a as varA, pi as varPi} from './External.js';
// console.log('from import export js',varA,varPi);

import external, {pi,a} from './External.js';
console.log(a, pi);
external();