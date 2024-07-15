const FIZZ = "fizz";
const BUZZ = "buzz";

export const convert = (number: number): string => {
  if (isDividedByThree(number) && isDividedByFive(number)) return FIZZ + BUZZ;
  if (isDividedByThree(number)) return FIZZ;
  if (isDividedByFive(number)) return BUZZ;
  return number.toString();
};

const isDividedByThree = (number: number): boolean => {
  return number % 3 === 0;
};

const isDividedByFive = (number: number): boolean => {
  return number % 5 === 0;
};
