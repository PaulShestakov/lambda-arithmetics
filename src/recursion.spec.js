const { add, sub, mult, eq } = require("./recursion");
const { zero, succ } = require("./numbers");
const { _true } = require("./boolean");

const one = succ(zero);
const two = succ(one);
const three = succ(two);
const four = succ(three);
const five = succ(four);
const six = succ(five);

describe("add", () => {
  test("0 + 0 = 0", () => {
    expect(eq(add(zero)(zero))(zero)).toEqual(_true);
  });
  test("2 + 3 = 5", () => {
    expect(eq(add(two)(three))(five)).toEqual(_true);
  });
});

describe("sub", () => {
  test("5 - 4 = 1", () => {
    expect(eq(sub(five)(four))(one)).toEqual(_true);
  });
});

describe("mult", () => {
  test("2 * 3 = 6", () => {
    expect(eq(mult(two)(three))(six)).toEqual(_true);
  });
});
