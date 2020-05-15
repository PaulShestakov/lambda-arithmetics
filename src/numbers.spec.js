const { zero, is_zero, succ, pred } = require("./numbers");
const { _true, _false } = require("./boolean");

const one = succ(zero)
const two = succ(one)

describe("is_zero", () => {
  test("is_zero zero = true", () => {
    expect(is_zero(zero)).toEqual(_true);
  });
  test("is_zero zero = false", () => {
    expect(is_zero(one)).toEqual(_false);
  });
});

describe("pred", () => {
  test("pred zero = zero", () => {
    expect(pred(zero)).toEqual(zero);
  });
  test("pred one = zero", () => {
    expect(pred(one)).toEqual(zero);
  });
  test("pred two = one", () => {
    expect(pred(two)).toEqual(one);
  });
});
