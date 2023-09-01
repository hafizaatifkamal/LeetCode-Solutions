/*
  Provided array of strings
  Print the elements which are not a palindrome
*/

const stringArray = ["wow", "speed", "mon", "peep", "level", "super"];

const checkPalindrome = (stringArray) => {
  for (let i = 0; i < stringArray.length / 2; i++) {
    let target = stringArray.length - 1;
    if (stringArray[i] !== stringArray[target]) {
      return true;
    }
    return false;
  }
};

const result = stringArray.filter((element) => checkPalindrome(element));
console.log(result);
