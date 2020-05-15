const {cond, and} = require("./boolean")
const {zero, is_zero, succ, pred} = require("./numbers")

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

const mult1 = f => x => y => arg => cond (zero) (add (x) (f (x) (pred (y)))) (is_zero ( y )) (arg)

const mult = recursive ( mult1 )

const eq = x => y => and ( is_zero (sub (x) (y)) ) ( is_zero (sub (y) (x)) )

module.exports = {
  recursive,
  add,
  sub,
  eq,
  mult,
}