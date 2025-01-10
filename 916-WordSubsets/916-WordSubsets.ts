const countLetters = (word: string): Record<string, number> => {
  const result: Record<string, number> = {};
  for (const c of word) {
    result[c] = (result[c] ?? 0) + 1;
  }
  return result;
};

const wordSubsets = (words1: string[], words2: string[]): string[] => {
  const uniqWords1 = Array.from(new Set(words1));
  const uniqWords2 = Array.from(new Set(words2));

  // Precompute the maximum letter counts for `words2`
  const maxLetterCount: Record<string, number> = {};
  for (const word of uniqWords2) {
    const counts = countLetters(word);
    for (const [letter, count] of Object.entries(counts)) {
      maxLetterCount[letter] = Math.max(maxLetterCount[letter] ?? 0, count);
    }
  }

  // Filter `words1` by checking if it satisfies `maxLetterCount`
  return uniqWords1.filter(word => {
    const counts = countLetters(word);
    for (const [letter, count] of Object.entries(maxLetterCount)) {
      if ((counts[letter] ?? 0) < count) {
        return false;
      }
    }
    return true;
  });
};
