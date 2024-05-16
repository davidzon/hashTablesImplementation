// Function to check if two strings are anagrams of each other
function anagrams(str1, str2) {
  // Check if the strings are of different lengths
  if (str1.length !== str2.length) {
    return false;
  }

  // Create a hash table to store character counts of str1
  const charCount = {};

  // Count the occurrences of characters in str1
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check the character counts in str2
  for (let char of str2) {
    // If the character is not present in charCount or count is 0, they are not anagrams
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

// Function to find common elements in two arrays
function commonElements(arr1, arr2) {
  // Convert arr1 to a Set for constant time lookup
  const set1 = new Set(arr1);
  const result = [];

  // Check if each element in arr2 exists in set1
  for (let num of arr2) {
    if (set1.has(num)) {
      result.push(num);
    }
  }

  return result;
}

// Function to find the duplicate integer in an array
function duplicate(arr) {
  // Create a Set to store seen elements
  const seen = new Set();

  // Iterate over the array and return the duplicate element
  for (let num of arr) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }

  return -1; 
}

// Function to check if two numbers in an array sum up to a target
function twoSum(nums, target) {
  // Create a Set to store seen elements
  const seen = new Set();

  // Iterate over the array and check for the complement
  for (let num of nums) {
    const complement = target - num;
    if (seen.has(complement)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

// Function to check if a pattern matches an array of strings
function wordPattern(pattern, strings) {
  // Check if pattern length matches strings length
  if (pattern.length !== strings.length) {
    return false;
  }

  const patternMap = {};
  const wordMap = {};

  // Compare the pattern with the strings
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = strings[i];

    // Check pattern-to-word mapping
    if (patternMap[char]) {
      if (patternMap[char] !== word) {
        return false;
      }
    } else {
      patternMap[char] = word;
    }

    // Check word-to-pattern mapping
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