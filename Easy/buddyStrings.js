/*
	Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

	Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

	For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
	

	Example 1:

	Input: s = "ab", goal = "ba"
	Output: true
	Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
	Example 2:

	Input: s = "ab", goal = "ab"
	Output: false
	Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
	Example 3:

	Input: s = "aa", goal = "aa"
	Output: true
	Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.
	

	Constraints:

	1 <= s.length, goal.length <= 2 * 104
	s and goal consist of lowercase letters.
*/

function buddyStrings(s, goal) {
  s = s.split("");
  let strArray = [];
  let str = s;

  for (let i = 0; i <= s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const temp = str[i];
      str[i] = str[j];
      str[j] = temp;
    }
    str = s;
    strArray.push(s.join(""));
  }

  console.log(strArray);
  return s.join("") === goal;
}

console.log(buddyStrings("ab", "ba"));
console.log(buddyStrings("ab", "ab"));
console.log(buddyStrings("aa", "aa"));
console.log(buddyStrings("abcd", "cbad"));
