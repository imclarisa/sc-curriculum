const assert = require("assert");
const helloWorld = require("../helloWorld.js");

describe("helloWorld()", function() {
  //ARRANGE
  let greeting = "Hello World";
  //ACT
  let result = helloWorld;
  //ASSERT
  it("it should return Hello World", function() {
    expect(result()).toEqual(greeting);
  });
});
