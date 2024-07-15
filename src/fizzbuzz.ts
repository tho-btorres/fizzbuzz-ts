export const convert = (number: number): string => {
  if (isDividedByThree(number) && isDividedByFive(number)) return "fizzbuzz";
  if (isDividedByThree(number)) return "fizz";
  if (isDividedByFive(number)) return "buzz";
  return number.toString();
};

const isDividedByThree = (number: number): boolean => {
  return number % 3 === 0;
}

const isDividedByFive = (number: number): boolean => {
  return number % 5 === 0;
}