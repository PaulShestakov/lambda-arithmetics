
const {_true, _false, cond} = require("./boolean")

const identity = x => x

const zero = identity

const is_zero = n => n ( _true )

const succ = n => s => s ( _false )( n )

const pred = n => cond (zero) (n ( _false )) (is_zero ( n ))

module.exports = {
  zero,
  is_zero,
  succ,
  pred,
}