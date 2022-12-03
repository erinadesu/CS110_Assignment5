const readlinesync = require("readline-sync");

const matrixProduct = require('./utils.js').matrixProduct;
const sumOfMatrices = require('./utils.js').sumOfMatrices;
const sumOfEachRow = require('./utils.js').sumOfEachRow;
const wordCount = require('./utils.js').wordCount;
const trimTheString = require('./utils.js').trimTheString;

let mat1 = [ [6, 2, 4], [5, -3, 4], [0, -4, 6] ];
let mat2 = [ [-8, 3, 7], [3, -6, 7], [2, 8, 1] ];
let str = " Dream, may all of your trials end in full bloom. Dream, Though your beginnings may be humble, may the end be prosperous.   ";

let a = matrixProduct(mat1, mat2);
let b = sumOfMatrices(mat1, mat2);
let c = sumOfEachRow(mat2);
let d = readlinesync.question("The sentence: ");
let e = wordCount(d);
let f = trimTheString(str);