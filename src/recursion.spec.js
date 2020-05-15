const { add, sub, eq } = require("./recursion");
const { zero, succ } = require("./numbers");
const { _true } = require("./boolean");

const one = succ(zero);
const two = succ(one);
const three = succ(two);
const four = succ(three);
const five = succ(four);

describe("recursion", () => {
  test("0 + 0 = 0", () => {
    expect(eq(add(zero)(zero))(zero)).toEqual(_true);
  });
  test("2 + 3 = 5", () => {
    expect(eq(add(two)(three))(five)).toEqual(_true);
  });
  test("5 - 4 = 1", () => {
    expect(eq(sub(five)(four))(one)).toEqual(_true);
  });
});
