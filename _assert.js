const green = "\x1b[32m";
const red = "\x1b[31m";

const _assert = (assert_name, a, b) => {
  if (a === b) {
    console.log(green, `🍏 ${assert_name}`);
  } else {
    console.log(red, `💥 ${assert_name}`);
  }
}

module.exports = {
  _assert
}