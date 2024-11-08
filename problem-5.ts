const getProperty = <T, K extends keyof T>(
  personObject: T,
  Proptery: K
): T[K] => {
  return personObject[Proptery];
};

