const assert = require("assert");
const addition = require("../addition.js");

describe("addition()", function() {
  //arrange
  let a = 2;
  let b = 2;
  let sum = 4;

  //act
  let result = addition(a, b);

  //assert
  it("it should return 4", function() {
    expect(result).toEqual(sum);
  });
});
