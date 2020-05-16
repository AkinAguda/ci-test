const findAbsolute = require(".");

test("it should find return a postive difference if a > b", () => {
  expect(findAbsolute(5, 3)).toBe(2);
});

test("it should find return a postive difference if a < b", () => {
  expect(findAbsolute(3, 5)).toBe(2);
});
