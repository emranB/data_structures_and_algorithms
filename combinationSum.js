/* 
    Finds all possible combinations (permutations)
    Note: eg. [2,3] and [3,2] are both valid outputs
*/
var combinationSum_allCombinations = function(candidates, target, memo={}) {
    if (target in memo) return memo[target]
    if (target < 0) return []
    if (candidates.length <= 0) return []

    let combinations = []
    for ( const num of candidates ) {
        let remainder = target - num
        if (remainder == 0) {
            combinations.push([num])
        }
        let remainderCombinations = combinationSum_allCombinations(candidates, remainder, memo)
        if (remainderCombinations.length) {
            remainderCombinations = remainderCombinations.map(comb => [num, ...comb])
            combinations.push(...remainderCombinations)
            memo[target] = combinations
        }
    }    

    return combinations
};
// console.log(combinationSum_allCombinations([2,3,5], 5))     // Output: [[2,3], [3,2], [5]]
// console.log(combinationSum_allCombinations([2,3,6,7], 7))   // Output: [[2,2,3], [2,3,2], [3,2,2], [7]]
// console.log(combinationSum_allCombinations([2,3], 5))       // Output: [[2,3], [3,2]]
// console.log(combinationSum_allCombinations([2,3,5], 8))     // Output: [[2,2,2,2], [2,3,3], [3,2,3], [3,3,2], [3,5], [5,3]]


/* 
    Finds all unique combinations
    Note: eg. [2,3] and [3,2] are considered non-unique outputs
*/
var combinationSum_uniqueCombinations = function(candidates, target, memo={}) {
    if (target in memo) return memo[target]
    if (target < 0) return []
    if (candidates.length <= 0) return []

    let combinations = []
    for ( let i=candidates.length - 1; i>=0; i-- ) {
        let num = candidates[i]
        let remainder = target - num
        if (remainder == 0) {
            combinations.push([num])
            candidates.pop()
            console.log(i, combinations)
            // return combinations
        }
        else {
            let remainderCombinations = combinationSum_uniqueCombinations(candidates, remainder, memo)
            if (remainderCombinations.length) {
                remainderCombinations = remainderCombinations.map(comb => [num, ...comb])
                combinations.push(...remainderCombinations)
                memo[target] = combinations
            }
        }

        // return combinations
    }

    return combinations
};
// console.log(combinationSum_uniqueCombinations([2,3,5], 5))     // Output: [[5], [3,2]]
console.log(combinationSum_uniqueCombinations([2,5,6,7], 7))   // Output: [[7], [3,2,2], [2,3,2]]
// console.log(combinationSum_uniqueCombinations([2,3,6,7], 7))   // Output: [[7], [3,2,2], [2,3,2]]
// console.log(combinationSum_uniqueCombinations([2,3], 5))       // Output: [[3,2]]
// console.log(combinationSum_uniqueCombinations([2,3,5], 8))     // Output: [[5,3], [3,3,2], [2,2,2,2]]