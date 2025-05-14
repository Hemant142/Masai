// Q1### **1. Count Vowels and Consonants**

// Write a function `countVowelsAndConsonants` that accepts a string and returns an object with the count of vowels and consonants.

// - **Requirements**:
//     - Ignore spaces and non-alphabetical characters.
//     - Treat both uppercase and lowercase letters as the same.

function countVowelsAndConsonants(str) {
  let regix = /[^a-zA-Z0-9]/;

  let vowels = 0;
  let consonants = 0;
  for (let i = 0; i < str.length; i++) {
    if (regix.test(str[i]) == false) {
      if (
        str[i].toLowerCase() == "a" ||
        str[i].toLowerCase() == "e" ||
        str[i].toLowerCase() == "i" ||
        str[i].toLowerCase() == "o" ||
        str[i].toLowerCase() == "u"
      ) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }
  return { vowels, consonants };
}

const result = countVowelsAndConsonants("Hello World!");
console.log(result);
