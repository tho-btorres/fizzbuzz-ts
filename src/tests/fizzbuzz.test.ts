import { convert } from "../fizzbuzz";

test("should return 1", () => {
  expect(convert(1)).toBe("1");
});

test("should return fizz when number 3", () => {
  expect(convert(3)).toBe("fizz");
});

test("should return fizz when number is multiple of 3", () => {
  expect(convert(6)).toBe("fizz");
});

test("should return 2 when number 2", () => {
  expect(convert(2)).toBe("2");
});

test("should return buzz when number multiple of 5", () => {
  expect(convert(5)).toBe("buzz");
});

test("should return fizzbuzz when number multiple of 3 and multiple of 5", () => {
  expect(convert(15)).toBe("fizzbuzz");
});
