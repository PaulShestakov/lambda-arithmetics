const {_assert} = require("./_assert")

const {cond, and, _true} = require("./boolean")
const {is_zero, zero, succ, pred} = require("./numbers")


const add1 = f => x => y => arg => cond ( x ) (f (succ ( x )) (pred ( y ))) (is_zero ( y )) (arg)

const sub1 = f => x => y => arg => cond (x) (f (pred (x)) (pred (y))) (is_zero ( y )) (arg)

const recursive =
  f =>
    (
      s =>
        arg => f(s(s))(arg)
    )(
      s =>
        arg => f(s(s))(arg)
    );


const add = recursive ( add1 )

const sub = recursive ( sub1 )

const eq = x => y => and ( is_zero (sub (x) (y)) ) ( is_zero (sub (y) (x)) )


const two = succ(succ(zero))
const three = succ(two)
const four = succ(three)
const five = succ(four)

_assert("0 + 0 = 0", eq (add(zero)(zero)) (zero), _true)
_assert("2 + 3 = 5", eq (add(two)(three)) (five), _true)

module.exports = {
  recursive,
  add,
  sub,
  eq,
}