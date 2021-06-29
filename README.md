[![npm](https://img.shields.io/npm/v/lambda-arithmetics)](https://www.npmjs.com/package/lambda-arithmetics)

# Arithmetics in lambda calculus


## Boolean
```js
const { _true, _false, not, or, and } = require("./boolean");

not(_true);
// => _false

or(_true)(_false);
// => _true

and(_false)(_true);
// => _false
```

## Numbers
```js
const { zero, is_zero, succ, pred } = require("./numbers");

const one = succ(zero)

is_zero(zero);
// => _true

pred(one);
// => zero
```

## Recursion

```js
const { zero, succ, eq, add } = require("lambda-arithmetics");

const two = succ(succ(zero));
const four = succ(succ(two));

eq(add(two)(two))(four)) 
// => _true
```
