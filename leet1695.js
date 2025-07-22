//You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.

// Return the maximum score you can get by erasing exactly one subarray.

// An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

//  Medium

// Example 1:

// Input: nums = [4,2,4,5,6]
// Output: 17
// Explanation: The optimal subarray here is [2,4,5,6].
// Example 2:

// Input: nums = [5,2,1,2,5,2,1,2,5]
// Output: 8
// Explanation: The optimal subarray here is [5,2,1] or [1,2,5].
 

// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104


var maximumUniqueSubarray=function(nums){
    const seen =new Set()
    let left=0
    let currentSum=0
    let maxScore=0

    for(right=0;right<nums.length;right++){
        // while seen has right means there are duplicates so perform the body part
        while(seen.has(nums[right])){  
            seen.delete(nums[left])
            currentSum-=nums[left]
            left++
        }
        // occurs when while loop has finished operating and is satisfied
        seen.add(nums[right])
        currentSum+=nums[right]
        maxScore=Math.max(maxScore,currentSum)

    }
    return maxScore
   
}
console.log(maximumUniqueSubarray([5,2,1,2,5,2,1,2,5]))
console.log(maximumUniqueSubarray([4,2,4,5,6]))


