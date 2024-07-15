const FIZZ = "fizz";
const BUZZ = "buzz";

const isDivisibleBy = (number: number, divisor: number): boolean => number % divisor === 0;

export function convert(number: number): string {
  let result = "";

  if (isDivisibleBy(number, 3)) result += FIZZ;
  if (isDivisibleBy(number, 5)) result += BUZZ;

  const numberStr = number.toString();
  for (const char of numberStr) {
    if (char === "3") result += FIZZ;
    if (char === "5") result += BUZZ;
  }

  return result || number.toString();
}

console.log(convert(45));
