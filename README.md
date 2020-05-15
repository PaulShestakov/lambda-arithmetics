[![npm](https://img.shields.io/npm/v/lambda-arithmetics)](https://www.npmjs.com/package/lambda-arithmetics)

# 🍷 Need basic arithmetics, defined purely by functions?
```
const {_true, zero, succ, add, eq} = require("lambda-arithmetics")

> eq(add(two)(three))(five) === _true

// true
```