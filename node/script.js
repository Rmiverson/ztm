// node module way (newer)
// import largeNum from "./script2";

// commonJS (old)
// const script2 = require('./script2');

// import { largeNum } from "./script2.js";

let a;

if (true) {
  const { largeNum } = await import('./script2.js')
  a = largeNum
}

// const a = script2.largeNum;
// const a = largeNum;
const b = 5;

// setTimeout(() => {
//   console.log(a + b);
// }, 3000);

// console.log(__dirname);

console.log(a + b);