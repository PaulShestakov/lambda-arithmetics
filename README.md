[![npm](https://img.shields.io/npm/v/lambda-arithmetics)](https://www.npmjs.com/package/lambda-arithmetics)

# 🍷  Need basic arithmetics, defined purely by functions?
```
const { _true, zero, succ, eq, sub, add, mult } = require("lambda-arithmetics");

const one = succ(zero);
const two = succ(one);
const three = succ(two);
const four = succ(three);
const five = succ(four);
const six = succ(five);

console.log(eq(sub(three)(two))(one) === _true);
// true

console.log(eq(add(two)(three))(five) === _true);
// true

console.log(eq(mult(two)(three))(six) === _true);
// true

```
