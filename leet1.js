// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

var twoSum=function(nums,target){
    const map=new Map();

    for(let i=0;i<nums.length;i++){
        let num=nums[i]
        const complement=num-target
        // [2,5,7,11] 
        // first number is 2.target=9.compliment 7.does 7 exist in map no. store (2,0).Next number is 7.Complement is 2.does 2 exist in map Yes.so map.get(complement)returns index of the complement so our complement is 2 index=0, i is the index of current number so 7 is in index 1 [0,1]  
        if(map.has(complement)){
            return [map.get(complement),i]
        }
        else{
            // this occurs when the compliment is not in the map.It stores the number and its index
            return map.set(num,i)
        }
    }
}
console.log(twoSum([2,7,5,11],9))