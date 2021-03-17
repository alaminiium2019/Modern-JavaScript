//imports/exports
//for import export have to create file package.json

import {total, cost} from './external.js'  //named import

console.log(total);

//import all variable
import * as test from './external.js'  //named import

console.log(test);

// use Alias 
import {total as A, cost as B} from './external.js'  //named import

console.log(A,B);

//by Default export
import external from "./external.js";
console.log(external);

//function import
import { myFunc} from './external.js';
myFunc();