const {_assert} = require("./_assert");

const _true = first => second => first
const _false = first => second => second

const cond = first => second => pred => pred ( first )( second )

const not = cond ( _false ) ( _true )

_assert("not", not ( _true ), _false)
_assert("not", not ( _false ), _true)

const or = cond ( _true )

_assert("or", or ( _true ) ( _true ), _true)
_assert("or", or ( _true ) ( _false ), _true)
_assert("or", or ( _false ) ( _true ), _true)
_assert("or", or ( _false ) ( _false ), _false)

const and = x => y => cond ( x ) ( _false ) ( y )

_assert("and", and ( _true ) ( _true ), _true)
_assert("and", and ( _true ) ( _false ), _false)
_assert("and", and ( _false ) ( _true ), _false)
_assert("and", and ( _false ) ( _false ), _false)

module.exports = {
  _true,
  _false,
  cond,
  not,
  or,
  and,
}