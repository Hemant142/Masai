// ### **3. Palindrome Check**

// Write a function `isPalindrome` that checks if a given string is a palindrome (reads the same forward and backward).

// - **Requirements**:
// - Ignore spaces, punctuation, and case differences.

function isPalindrome(str) {
  let regix = /[^a-zA-Z0-9]/;
  let newStr = "";
  let newReverseStr = "";
  for (let i = 0; i < str.length; i++) {
    if (regix.test(str[i]) == false) {
      newStr += str[i].toLowerCase();
    }
  }

  for (let i = newStr.length - 1; i >= 0; i--) {
    newReverseStr += newStr[i];
  }
  if (newReverseStr == newStr) {
    return true;
  } else {
    return false;
  }
}

const result = isPalindrome("A man, a plan, a canal, Panama");
console.log(result);
// Output: true
