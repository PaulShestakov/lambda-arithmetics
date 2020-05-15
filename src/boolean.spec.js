const { _true, _false, not, or, and } = require("./boolean");

describe("not", () => {
  test("not true = false", () => {
    expect(not(_true)).toEqual(_false);
  });
  test("not false = true", () => {
    expect(not(_false)).toEqual(_true);
  });
});

describe("or", () => {
  test("", () => {
    expect(or(_true)(_true)).toEqual(_true);
  });
  test("", () => {
    expect(or(_true)(_false)).toEqual(_true);
  });
  test("", () => {
    expect(or(_false)(_true)).toEqual(_true);
  });
  test("", () => {
    expect(or(_false)(_false)).toEqual(_false);
  });
});

describe("and", () => {
  test("", () => {
    expect(and(_true)(_true)).toEqual(_true);
  });
  test("", () => {
    expect(and(_true)(_false)).toEqual(_false);
  });
  test("", () => {
    expect(and(_false)(_true)).toEqual(_false);
  });
  test("", () => {
    expect(and(_false)(_false)).toEqual(_false);
  });
});
