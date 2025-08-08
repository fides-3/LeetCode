// 9. Palindrome Number
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1

var isPalindrome=function(x){
    // numbers do not have a .length proprty in js..strings,arrays have.Convert the number x to a string
    let str=x.toString()
    let start=0
    let end=str.length-1
    // negative numbers cannpt be palindromes
    if(x<0){
        return false;
    }

    while(start<end){
        if(str[start]!==str[end]){
            return false
        }
        else{
            start+=1
            end=-1
        }

    }
     // put outside the loop to ensure all numbers are checked.if put inside,it could check the first pair of start and end,if they match it returns true without checking the rest
    return true;

}
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
