
const {_assert} = require("./_assert")

const {_true, _false, cond} = require("./boolean")

const identity = x => x

const zero = identity
const succ = n => s => s ( _false )( n )

const one = succ(zero)
const two = succ(one)

const is_zero = n => n ( _true )

_assert("is_zero zero", is_zero(zero), _true)
_assert("is_zero one", is_zero(one), _false)

const pred = n => cond (zero) (n ( _false )) (is_zero ( n ))

_assert("pred", pred(two), one)
_assert("pred", pred(one), zero)
_assert("pred", pred(zero), zero)

module.exports = {
  zero,
  is_zero,
  succ,
  pred,
}