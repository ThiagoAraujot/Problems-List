/*

Difficulty: easy

You are given two 0-indexed integer arrays nums and divisors.

The divisibility score of divisors[i] is the number of indices j such that nums[j] is divisible by divisors[i].

Return the integer divisors[i] with the maximum divisibility score. If there is more than one integer with the maximum score, return the minimum of them.

 

Example 1:

Input: nums = [4,7,9,3,9], divisors = [5,2,3]
Output: 3
Explanation: The divisibility score for every element in divisors is:
The divisibility score of divisors[0] is 0 since no number in nums is divisible by 5.
The divisibility score of divisors[1] is 1 since nums[0] is divisible by 2.
The divisibility score of divisors[2] is 3 since nums[2], nums[3], and nums[4] are divisible by 3.
Since divisors[2] has the maximum divisibility score, we return it.

*/

var maxDivScore = function (nums, divisors) {
  let maxCount = 0;
  let max = divisors[0];

  for (let i = 0; i < divisors.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] % divisors[i] === 0) {
        count++;
      }
    }

    if (maxCount <= count) {
      if (maxCount < count) {
        maxCount = count;
        max = divisors[i];
      } else {
        if (max > divisors[i]) max = divisors[i];
      }
    }
  }

  return max;
};
