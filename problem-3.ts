const countWordOccurrences = (sentence: string, word: string): number => {
  let wordsInString = sentence.split(" ");
  // let newWordString: string[] = [];

  let wordCount = 0;

  for (let i = 0; i < wordsInString.length; i++) {
    if (wordsInString[i].toLowerCase() === word.toLowerCase()) {
      wordCount++;
    }
  }
  return wordCount;
};
