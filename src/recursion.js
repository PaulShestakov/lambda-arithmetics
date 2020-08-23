const {cond, and} = require("./boolean")
const {zero, is_zero, succ, pred} = require("./numbers")

const Y =
  f =>
    (
      s => arg => f ( s (s) ) (arg)
    )(
      s => arg => f ( s (s) ) (arg)
    );

const add1 = f => x => y => arg => cond ( x ) (f (succ ( x )) (pred ( y ))) (is_zero ( y )) (arg)

const add = Y ( add1 )

const sub1 = f => x => y => arg => cond (x) (f (pred (x)) (pred (y))) (is_zero ( y )) (arg)

const sub = Y ( sub1 )

const mult1 = f => x => y => arg => cond (zero) (add (x) (f (x) (pred (y)))) (is_zero ( y )) (arg)

const mult = Y ( mult1 )

const eq = x => y => and ( is_zero (sub (x) (y)) ) ( is_zero (sub (y) (x)) )

const one = succ ( zero )

const factorial1 = f => x => arg => cond (one) (mult (x) (f (pred(x)))) (is_zero(x)) (arg)

const factorial = Y ( factorial1 )

module.exports = {
  Y,
  add,
  sub,
  eq,
  mult,
  factorial,
}