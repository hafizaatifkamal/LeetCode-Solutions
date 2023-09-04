const containsDuplicate = (nums) => {
  for (let i = 0; i < nums.length / 2; i++) {
    let target = nums.length - 1;
    if (nums[i] === nums[target]) return true;
    return false;
  }
};

console.log(containsDuplicate([1, 2, 3, 1]));
