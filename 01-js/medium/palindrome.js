/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
 // console.log("ActualInput: "+str);
  str = str.replace(/\s+/g, '').replace(/[^\w\s]/gi, '').toLowerCase(); // remove space, special chars , lowercase
  //console.log("Modified Input: "+str);
  let strReverse= str.split('').reverse().join('');
 // console.log("Reversed Input: "+strReverse);
  let isPalindrome = str === strReverse;
  console.log(isPalindrome);
  return isPalindrome;
}

module.exports = isPalindrome;

/**
 *  first Wrote it in basic manner with for loop
 * @param {*} str 
 * @returns 
 */
function reverseString(str){
  let strReverse= '';
  for(let i=str.length-1; i>=0; i--){
    strReverse += str[i];
  }
  return strReverse;
}
isPalindrome("A man a plan a canal Panama");
