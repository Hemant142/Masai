//### **2. Reverse Words in a String**

// Write a function `reverseWords` that takes a string, and returns the string with each word reversed, while keeping the word order the same.

// - **Requirements**:
//     - Consider words to be separated by spaces.

function reverseWords(str) {
  let words = str.split(" ");

  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += reverse(words[i]) + " ";
  }
  return result;
}

function reverse(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

const result = reverseWords("JavaScript is fun");
console.log(result);
// Output: "tpircSavaJ si nuf"
