function anagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = {};

  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

function commonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const result = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      result.push(num);
    }
  }

  return result;
}

function duplicate(arr) {
  const seen = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }

  return -1; // If no duplicate found
}

function twoSum(nums, target) {
  const seen = new Set();

  for (let num of nums) {
    const complement = target - num;
    if (seen.has(complement)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

function wordPattern(pattern, strings) {
  if (pattern.length !== strings.length) {
    return false;
  }

  const patternMap = {};
  const wordMap = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = strings[i];

    if (patternMap[char]) {
      if (patternMap[char] !== word) {
        return false;
      }
    } else {
      patternMap[char] = word;
    }

    if (wordMap[word]) {
      if (wordMap[word] !== char) {
        return false;
      }
    } else {
      wordMap[word] = char;
    }
  }

  return true;
}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
