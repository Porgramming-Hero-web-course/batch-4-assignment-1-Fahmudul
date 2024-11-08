type SumArray = (array: number[]) => number;

const sumArray: SumArray = (array) => {
  return array.reduce((a, b) => a + b, 0);
};

