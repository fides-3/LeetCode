//  You are given a string s and two integers x and y. You can perform two types of operations any number of times.

// Remove substring "ab" and gain x points.
// For example, when removing "ab" from "cabxbae" it becomes "cxbae".
// Remove substring "ba" and gain y points.
// For example, when removing "ba" from "cabxbae" it becomes "cabxe".
// Return the maximum points you can gain after applying the above operations on s.

//  medium

// Example 1:

// Input: s = "cdbcbbaaabab", x = 4, y = 5
// Output: 19
// Explanation:
// - Remove the "ba" underlined in "cdbcbbaaabab". Now, s = "cdbcbbaaab" and 5 points are added to the score.
// - Remove the "ab" underlined in "cdbcbbaaab". Now, s = "cdbcbbaa" and 4 points are added to the score.
// - Remove the "ba" underlined in "cdbcbbaa". Now, s = "cdbcba" and 5 points are added to the score.
// - Remove the "ba" underlined in "cdbcba". Now, s = "cdbc" and 5 points are added to the score.
// Total score = 5 + 4 + 5 + 5 = 19.
// Example 2:

// Input: s = "aabbaaxybbaabb", x = 5, y = 4
// Output: 20
 

// Constraints:

// 1 <= s.length <= 10 power 5
// 1 <= x, y <= 10 power 4
// s consists of lowercase English letters. does this use the set and sliding window concept or?


/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
     let total = 0;

  
  const remove = (str, a, b, points) => {
    let stack = [];
    let score = 0;

    for (let ch of str) {
      if (stack.length && stack[stack.length - 1] === a && ch === b) {
        stack.pop();
        score += points;
      } else {
        stack.push(ch);
      }
    }

    return [stack.join(''), score];
  };

  
  if (x >= y) {
    [s, score1] = remove(s, 'a', 'b', x);
    [s, score2] = remove(s, 'b', 'a', y);
  } else {
    [s, score1] = remove(s, 'b', 'a', y);
    [s, score2] = remove(s, 'a', 'b', x);
  }

  return score1 + score2;

    
};

// RECAP