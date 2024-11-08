const validateKeys = <T>(obj: T, keys: (keyof T)[]) => {
  let matchedKey = keys.length;
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]]) {
      matchedKey--;
    }
  }
  if (matchedKey == 0) {
    return true;
  } else {
    return false;
  }
};
