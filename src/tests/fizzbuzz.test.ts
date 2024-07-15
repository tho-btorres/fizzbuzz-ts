import { convert } from "../fizzbuzz";

test("should return 1", () => {
  //arrange
  const number = 1;
  const expectedResult = "1";

  //act
  const result = convert(number);

  //assert
  expect(result).toBe(expectedResult);
});

test("should return fizz when number 3", () => {
  expect(convert(3)).toBe("fizzfizz");
});

test("should return fizz when number is multiple of 3", () => {
  expect(convert(6)).toBe("fizz");
});

test("should return 2 when number 2", () => {
  expect(convert(2)).toBe("2");
});

test("should return buzz when number multiple of 5", () => {
  expect(convert(5)).toBe("buzzbuzz");
});

test("should return fizzbuzzbuzz when number multiple of 3 and multiple of 5", () => {
  expect(convert(15)).toBe("fizzbuzzbuzz");
});

test("should return fizzbuzzfizz when number is 30", () => {
  expect(convert(30)).toBe("fizzbuzzfizz");
});
test("should return fizzbuzzbuzz when number is 45", () => {
  expect(convert(45)).toBe("fizzbuzzbuzz");
});
