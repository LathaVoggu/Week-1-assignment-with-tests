/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

/**
 * To write a Anagram program
 *  - sort the string1 and string2 and compare the both result. 
 *  - anagram will provide same result on sorting
 * 
 * Js doesn't have any sort funtion on string it will sort array only
 *  so to sort the string
 *  - split string into Array
 *  - sort the array
 *  - and join the array to string
 *  - and compare the sorted string --> anagram          
 * 
 */

// simple formate
function sort(str){
 return str.split("").sort().join("");
}
/**
*  if we use small 'a' it will give false as Js is case sensitive A and a are 2 different things in JS
*  lowercase() to handle the case sensitive
*/

function isAnagram(str1, str2){
  return sort(str1.toLowerCase()) === sort(str2.toLowerCase());
}

console.log(isAnagram("Amigo","ogima")); 

module.exports = isAnagram;
