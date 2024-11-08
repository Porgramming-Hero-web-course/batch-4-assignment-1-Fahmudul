const removeDuplicates = (array: number[]): number[] => {
  const result: number[] = [];
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};

