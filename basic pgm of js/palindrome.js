function isPalindrome(inputStr) {
  console.log(inputStr);
  let reversedStr = inputStr.split("").reverse().join("");

  const res = (reversedStr === inputStr);
  return res ? "is palindrome" : "not palindrome";
}

console.log(isPalindrome('mom'));