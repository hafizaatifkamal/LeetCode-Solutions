/*
  You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

  Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

  Example 1:

  Input: letters = ["c","f","j"], target = "a"
  Output: "c"
  Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
  

  Example 2:

  Input: letters = ["c","f","j"], target = "c"
  Output: "f"
  Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
  

  Example 3:

  Input: letters = ["x","x","y","y"], target = "z"
  Output: "x"
  Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
  

  Constraints:

  2 <= letters.length <= 104
  letters[i] is a lowercase English letter.
  letters is sorted in non-decreasing order.
  letters contains at least two different characters.
  target is a lowercase English letter.
*/

function nextGreatestLetter(letters, target) {
  /* Normal Approach */
  // for (let letter of letters) {
  //   if (letter > target) {
  //     return letter;
  //   }
  // }

  // return letters[0];

  /* Binary Search Approach */
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // After the binary search, 'left' points to the index where the answer should be.
  // If 'left' is equal to the length of the array, wrap around to the first element.
  return left === letters.length ? letters[0] : letters[left];
}

console.log(nextGreatestLetter(["c", "f", "j"], "a"));
console.log(nextGreatestLetter(["c", "f", "j"], "c"));
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));
