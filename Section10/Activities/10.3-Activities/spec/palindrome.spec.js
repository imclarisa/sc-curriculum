const assert = require("assert");
const isPalindrome = require("../palindrome.js");

describe("Palindrome test", function() {
  it("recognizes a non-palindrome", function() {
    expect(isPalindrome("Hello")).toBe(false);
  });

  it("should be case-sensitive", function() {
    assert.strictEqual(isPalindrome("Hello"), false);
  });

  it("knows that an empty string is a palindrome", function() {
    expect(isPalindrome("")).toBe(true);
  });

  it("should return true for a same letter repeated", function() {
    assert.strictEqual(isPalindrome("aaa"), true);
  });

  it("should consider whitespace", function() {
    assert.strictEqual(isPalindrome("Top spot"), false);
  });
});
