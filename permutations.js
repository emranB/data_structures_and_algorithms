/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (!nums.length) return []

    let perms = []
    for (let [ i, num ] of Object.entries(nums)) {
        let newNums = nums.slice()
        newNums.splice(i, 1)
        let remPerms = permute(newNums)
        if ( remPerms.length ) {
            let currPerms = remPerms.map(el => el.push(num))
            perms.push(...remPerms)
        }
        else {
            perms.push([num])
        }
    }

    return perms
};

console.log(JSON.stringify(permute([1,2,3]), null))   // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// console.log(permute([0,1]))     // [[0,1],[1,0]]
// console.log(permute([1]))       // [ 1 ]
