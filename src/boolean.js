const _true = first => second => first
const _false = first => second => second

const cond = first => second => pred => pred ( first )( second )

const not = cond ( _false ) ( _true )

const or = cond ( _true )

const and = x => y => cond ( x ) ( _false ) ( y )

module.exports = {
  _true,
  _false,
  cond,
  not,
  or,
  and,
}